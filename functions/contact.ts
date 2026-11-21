interface ContactEnv {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL?: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  company?: unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

async function readPayload(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    try {
      return (await request.json()) as ContactPayload;
    } catch {
      return {};
    }
  }

  const form = await request.formData();
  return {
    name: form.get('name'),
    email: form.get('email'),
    topic: form.get('topic'),
    message: form.get('message'),
    company: form.get('company'),
  };
}

export async function onRequestPost(context: {
  request: Request;
  env: ContactEnv;
}): Promise<Response> {
  const { request, env } = context;
  const payload = await readPayload(request);

  // Honeypot: silently accept submissions from bots that fill every field.
  if (String(payload.company ?? '').trim()) {
    return json({ ok: true });
  }

  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const topic = String(payload.topic ?? '').trim();
  const message = String(payload.message ?? '').trim();

  if (!name || !email || !message) {
    return json({ ok: false, error: 'Please fill in every field.' }, 400);
  }
  if (name.length > 120 || email.length > 200 || topic.length > 120 || message.length > 5000) {
    return json({ ok: false, error: 'One of your fields is too long.' }, 400);
  }
  if (!EMAIL_PATTERN.test(email)) {
    return json({ ok: false, error: 'Please provide a valid email address.' }, 400);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return json({ ok: false, error: 'The contact form is not configured yet.' }, 500);
  }

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>',
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: topic ? `Portfolio - ${topic} - ${name}` : `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\nTopic: ${topic || 'Not specified'}\n\n${message}`,
    }),
  });

  if (!resendResponse.ok) {
    console.error('Resend rejected the contact form submission:', await resendResponse.text());
    return json({ ok: false, error: 'Could not send your message. Please try again later.' }, 502);
  }

  const wantsJson =
    (request.headers.get('accept') ?? '').includes('application/json') ||
    (request.headers.get('content-type') ?? '').includes('application/json');

  if (wantsJson) {
    return json({ ok: true });
  }

  // Standard (no-JavaScript) form submissions land back on the contact section.
  return new Response(null, {
    status: 303,
    headers: { Location: '/?sent=1#contact', 'Cache-Control': 'no-store' },
  });
}
