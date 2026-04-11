export type Service = {
  id: string;
  icon: string;
  title: string;
  short_desc: string;
  content: string;
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
