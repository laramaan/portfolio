export type SiteStat = { value: string; label: string };

export type SiteSettings = {
  brandName: string;
  logoLetter: string;
  tagline: string;
  heroName: string;
  heroRoles: [string, string];
  heroBio: string;
  hireEmail: string;
  marquee: string[];
  /** Optional hero floating pill labels */
  heroBadgeLeft?: string;
  heroBadgeRight?: string;
  /** Public path to resume PDF */
  resumeUrl?: string;
  resumeDownloadFilename?: string;
  social?: {
    linkedin?: string;
    github?: string;
  };
  about: {
    lead: string;
    nameHighlight: string;
    body: string;
    stats: SiteStat[];
    signature: string;
  };
  heroPortrait: string;
  aboutPortrait: string;
  contact: {
    intro: string;
    phone: string;
    email: string;
    socialHandle: string;
    address: string;
  };
  footer: {
    blurb: string;
    phone: string;
    web: string;
    email: string;
    addressLines: [string, string];
    copyrightYear: number;
  };
};

export type SkillEntry = { icon: string; label: string };

export type ContactFormCopy = {
  successTitle: string;
  successBody: string;
  errorTitle: string;
  errorBody: string;
  sendingLabel: string;
  submitLabel: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
};

export type TestimonialsCarouselConfig = {
  autoScrollIntervalMs: number;
  pauseOnHover?: boolean;
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalContent = {
  terms: LegalPageContent;
  privacy: LegalPageContent;
};
