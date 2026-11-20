export type BackgroundEntry = {
  role: string;
  company: string;
  companyHref?: string;
  period: string;
  focus: string;
};

export const background: BackgroundEntry[] = [
  {
    role: 'Founding Engineer',
    company: 'Marrket Africa',
    companyHref: 'https://marrket.africa',
    period: '2026 — now',
    focus: 'WhatsApp commerce and fulfilment',
  },
  {
    role: 'Fullstack Engineer',
    company: 'Celebut',
    companyHref: 'https://celebut.com/',
    period: '2025 — 2026',
    focus: 'Digital gifting and internal operations',
  },
  {
    role: 'Co-founder',
    company: 'Billkit Solutions',
    companyHref: 'https://usebillkit.com',
    period: '2024 — now',
    focus: 'Utility payments infrastructure',
  },
  {
    role: 'Fullstack Developer',
    company: 'Cinfores Limited',
    companyHref: 'https://www.cinfores.com',
    period: '2020 — 2025',
    focus: 'Healthcare management systems',
  },
];
