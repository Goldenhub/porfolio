export type Project = {
  title: string;
  category: string;
  description: string;
  href: string;
  tags: string[];
  outcome?: string;
};

export const projects: Project[] = [
  {
    title: 'Marrket Africa',
    category: 'Conversational Commerce & Order Fulfillment',
    description:
      'A WhatsApp-native grocery platform that turns typed or photographed shopping lists into priced, paid and delivered orders, with automated customer updates and streamlined picker, rider and admin workflows.',
    href: 'https://marrket.africa',
    tags: ['WhatsApp Business API', 'OCR', 'Payments', 'Operations'],
    outcome: '98% zero-touch automation',
  },
  {
    title: 'Heirmpire Real Estate',
    category: 'Real-Estate Investment & Wealth Management',
    description:
      'A fintech platform where investors move from KYC onboarding to funding a wallet, subscribing to project offers and receiving payouts. Behind it sits an admin console with role-based approvals, compliance checks and live transaction monitoring.',
    href: 'https://heirmpire.app',
    tags: ['Fintech', 'KYC', 'RBAC', 'Admin console'],
  },
  {
    title: 'Billkit',
    category: 'Payments & Back-Office Infrastructure',
    description:
      'Utility payments infrastructure — automated processing, instant confirmations and back-office tracking, with CI/CD and production support built in.',
    href: 'https://usebillkit.com',
    tags: ['Payments', 'Automation', 'Back office'],
    outcome: '~40% shorter release cycles',
  },
  {
    title: 'CyberEx',
    category: 'Backend · Fintech CMS',
    description:
      'Built the CMS backend for a Nigerian wallet and payments fintech’s marketing site — blog, banners, FAQs, testimonials, announcements, metrics and legal pages, all managed from the admin dashboard. Added ~60 documented REST endpoints to an inherited clean-architecture NestJS monolith, with XSS-safe content, queued emails and role-based permissions.',
    href: 'https://cyberextech.com/',
    tags: ['NestJS', 'Prisma', 'BullMQ', 'Cloudflare R2'],
    outcome: '~60 endpoints · ~90 E2E checks',
  },
  {
    title: 'Fileway',
    category: 'Open Source · Storage Engine',
    description:
      'A zero-dependency storage engine for TypeScript runtimes built directly on Web Standards primitives (WHATWG Streams and Web Crypto), with streaming file operations, cryptographic integrity and cross-runtime portability.',
    href: 'https://usefileway.dev',
    tags: ['TypeScript', 'Web Standards', 'Open source'],
    outcome: 'Zero dependencies',
  },
  {
    title: 'Mongeesy',
    category: 'Open Source · MongoDB Learning',
    description:
      'A zero-setup, browser-native playground for learning MongoDB. Write queries and aggregation pipelines, see results instantly, and practice document modelling without any database setup.',
    href: 'https://mongeesy.vercel.app',
    tags: ['MongoDB', 'Learning', 'Browser'],
    outcome: 'Zero setup',
  },
  {
    title: 'Amysos Holdings',
    category: 'Corporate Web Platform · Prena Resources Limited',
    description:
      'Led the build for Prena Resources Limited from technical direction through deployment — Next.js and Sanity CMS with technical SEO baked in.',
    href: 'https://amysosholdings.org',
    tags: ['Lead developer', 'Next.js', 'Sanity CMS', 'Technical SEO'],
  },
];
