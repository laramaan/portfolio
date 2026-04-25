import { Helmet } from 'react-helmet-async';
import { projects } from '@/data/portfolio';
import { ProjectCard } from '@/components/sections/ProjectCard';

import { PillButtonLink } from '@/components/ui/PillButton';
import { PageListHeading } from '@/components/ui/PageListHeading';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>All Projects | Manish Portfolio</title>
        <meta name="description" content="Browse all portfolio projects — web, WordPress, Laravel, and React work." />
      </Helmet>
      <section className="pt-28 md:pt-36 bg-white pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <PageListHeading eyebrow="My Portfolio" titleBefore="All " titleAccent="Projects" />
        </div>
      </section>

      <MarqueeBanner />

      <section className="pt-16 md:pt-20 pb-20 md:pb-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.2] w-full max-w-3xl text-center md:text-left">
            Let&apos;s Create an <span className="text-yellow">Amazing</span> <br className="hidden md:block" />
            <span className="text-yellow italic font-normal">Project</span> Together!
          </h2>
          <div className="shrink-0">
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Contact Me Now" />
          </div>
        </div>
      </section>
    </>
  );
}
