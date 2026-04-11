import { projects } from '@/data/portfolio';
import { PillButtonLink } from '@/components/ui/PillButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { ProjectCard } from '@/components/sections/ProjectCard';

export function PortfolioSection() {
  return (
    <section
      className="py-20 md:py-24 bg-grey flex flex-col items-center"
      id="portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="flex flex-col">
            <SectionEyebrow label="My Portfolio" />
            <h2
              id="portfolio-heading"
              className="font-headline font-bold text-3xl md:text-5xl tracking-tight leading-[1.1]"
            >
              <span className="text-green">My Latest</span>
              <span className="text-yellow italic font-normal"> Projects</span>
            </h2>
          </div>
          <PillButtonLink to="/projects" label="View All Projects" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
