import { Helmet } from 'react-helmet-async';
import { projects } from '@/data/portfolio';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';
import { PageListHeading } from '@/components/ui/PageListHeading';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>All Projects | Manish Portfolio</title>
        <meta name="description" content="Browse all portfolio projects — web, WordPress, Laravel, and React work." />
      </Helmet>
      <section className="pt-28 md:pt-36 pb-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <PageListHeading eyebrow="My Portfolio" titleBefore="All " titleAccent="Projects" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          <ScrollReveal className="flex flex-col md:flex-row justify-between items-center gap-8 mt-20 pt-12 border-t border-black/5">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-green text-center md:text-left">
              Let&apos;s <span className="text-yellow italic font-normal">Connect</span> there
            </h2>
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Let's Connect" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
