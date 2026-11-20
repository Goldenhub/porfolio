# Portfolio — Chibueze Golden Azubuike

A single-page portfolio built with [Astro](https://astro.build) and Tailwind CSS, deployed on Cloudflare Pages.

## Getting started

```bash
npm install
npm run dev
```

Build for production (output goes to `dist/`):

```bash
npm run build
npm run preview
```

## Editing content

All content lives in `src/data/` so you don't need to touch the layout:

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, title, email, social links and intro text |
| `src/data/projects.ts` | Selected work cards |
| `src/data/background.ts` | Short role timeline |
| `src/data/stack.ts` | Technology tags |

The downloadable CV is `public/cv.pdf`. Replace it with an updated resume whenever needed.

## Contact form

The form posts to the Cloudflare Pages Function at `functions/contact.ts`, which validates the submission and sends the email through [Resend](https://resend.com).

Required environment variables:

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_TO_EMAIL` | Address that receives messages |
| `CONTACT_FROM_EMAIL` | Optional verified sender, e.g. `Portfolio <hello@yourdomain.com>` |

With Resend's free tier, either verify your own domain as a sender or use `onboarding@resend.dev` and confirm the recipient address.

To test locally:

```bash
cp .dev.vars.example .dev.vars   # then fill in your real values
npm run build
npx wrangler pages dev dist
```

The form includes a honeypot field and basic input validation. It works with JavaScript (inline status) and without it (standard form POST).

## Deploying to Cloudflare Pages

1. Push this directory to a GitHub repository.
2. In Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Use these build settings:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Add the environment variables above in **Settings → Environment variables**.
5. Optional: add a custom domain and set the build variable `PUBLIC_SITE_URL` (e.g. `https://example.com`) so canonical and Open Graph URLs point at it.
