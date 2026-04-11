import type {
  SiteSettings,
  ContactFormCopy,
  LegalContent,
  TestimonialsCarouselConfig,
} from '@/types/site';
import type { Blog, Faq, Project, Service, Testimonial, TimelineItem } from '@/types';

import home from './content/home.json';
import projectsData from './content/projects.json';
import servicesData from './content/services.json';
import blogData from './content/blog.json';
import legalData from './content/legal.json';

type HomeJson = {
  site: SiteSettings;
  educationItems: TimelineItem[];
  workItems: TimelineItem[];
  skillsRow1: { icon: string; label: string }[];
  skillsRow2: { icon: string; label: string }[];
  aboutSkillPills: string[][];
  testimonials: Testimonial[];
  faqs: Faq[];
  testimonialsSettings?: TestimonialsCarouselConfig;
  contactForm: ContactFormCopy;
};

const homeTyped = home as HomeJson;

export const site = homeTyped.site;
export const educationItems = homeTyped.educationItems;
export const workItems = homeTyped.workItems;
export const skillsRow1 = homeTyped.skillsRow1;
export const skillsRow2 = homeTyped.skillsRow2;
export const aboutSkillPills = homeTyped.aboutSkillPills;
export const testimonials = homeTyped.testimonials;
export const faqs = homeTyped.faqs;
export const testimonialsSettings: TestimonialsCarouselConfig =
  homeTyped.testimonialsSettings ?? {
    autoScrollIntervalMs: 5500,
    pauseOnHover: true,
  };
export const contactForm = homeTyped.contactForm;

export const services = (servicesData as { services: Service[] }).services;
export const projects = (projectsData as { projects: Project[] }).projects;
export const blogs = (blogData as { blogs: Blog[] }).blogs;
export const legal = legalData as LegalContent;

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getBlogById(id: string): Blog | undefined {
  return blogs.find((b) => b.id === id);
}
