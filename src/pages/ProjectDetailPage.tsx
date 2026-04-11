import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getProjectById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getProjectById(id) : undefined;

  if (!item) {
    return (
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-headline text-2xl text-green mb-4">Project not found</h1>
        <Link to="/projects" className="text-yellow font-bold hover:underline">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={item.content.slice(0, 155)} />
      </Helmet>
      <article className="pt-28 md:pt-36 pb-20 md:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-6">
            <h1 className="font-headline font-bold text-3xl md:text-5xl text-green w-full md:max-w-2xl">
              {item.title}
            </h1>
            <Link
              to="/projects"
              className="text-green/80 hover:text-green font-body flex items-center gap-2 shrink-0 focus-visible:outline focus-visible:underline rounded"
            >
              <span className="material-symbols-outlined">arrow_back</span> Projects
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-grey shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                width={1200}
                height={750}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow text-green font-headline font-bold text-[13px] px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="font-body text-green/80 text-lg leading-relaxed space-y-4">
              <p>{item.content}</p>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
