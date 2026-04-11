import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projects } from '@/data/portfolio';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>All Projects | Manish Portfolio</title>
        <meta name="description" content="Browse all portfolio projects — UI/UX, app design, and web work." />
      </Helmet>
      <section className="pt-28 md:pt-36 pb-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12">
            <h1 className="font-headline font-bold text-3xl md:text-5xl text-green">All Projects</h1>
            <Link
              to="/"
              className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded"
            >
              <span className="material-symbols-outlined">home</span> Home
            </Link>
          </ScrollReveal>

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
