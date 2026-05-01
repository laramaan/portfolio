export type HomeService = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  icon: string;
  image: string;
  title: string;
  description: string;
  detailed_description: string;
  services_included: string[];
  industries: string[];
  benefits: string[];
  use_cases: string[];
  problems_solved: string[];
  process: ProcessStep[];
  deliverables: string[];
  outcomes: string[];
};

export type Project = {
  id: string;
  image: string;
  /** Optional extra images for detail page gallery (2–3 recommended) */
  gallery?: string[];
  tags: string[];
  title: string;
  /** Short line on cards and detail hero */
  summary?: string;
  role?: string;
  duration?: string;
  client?: string;
  stack?: string[];
  highlights?: string[];
  content: string;
};

export type Blog = {
  id: string;
  date: string;
  time: string;
  title: string;
  image: string;
  content: string;
  category?: string;
  excerpt?: string;
};

export type Testimonial = {
  id?: string;
  text: string;
  name: string;
  role: string;
  image: string;
};

export type Faq = { q: string; a: string };

export type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
};

export type SkillRow = { icon: string; label: string }[];
