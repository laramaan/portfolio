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
  tags: string[];
  title: string;
  content: string;
};

export type Blog = {
  id: string;
  date: string;
  time: string;
  title: string;
  image: string;
  content: string;
};

export type Testimonial = {
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
