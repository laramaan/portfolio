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

  const metaDesc = (item.summary ?? item.content).slice(0, 155);
  const galleryThumbs = (item.gallery ?? []).filter((src) => src !== item.image);

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={metaDesc} />
      </Helmet>
      <article className="pt-28 md:pt-36 pb-16 md:pb-20 bg-white">
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
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-grey shadow-sm">
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

            {galleryThumbs.length > 0 && (
              <div className="mb-8">
                <h2 className="sr-only">Project gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {galleryThumbs.map((src, i) => (
                    <a
                      key={src}
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-grey ring-1 ring-black/5 hover:ring-yellow focus-visible:outline focus-visible:ring-2 focus-visible:ring-yellow"
                    >
                      <img
                        src={src}
                        alt={`${item.title} screenshot ${i + 1}`}
                        width={400}
                        height={300}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {(item.role || item.client || item.duration || (item.stack && item.stack.length > 0)) && (
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-5 md:p-6 rounded-2xl bg-grey/80 border border-black/5 text-sm font-body">
                {item.role && (
                  <>
                    <dt className="text-green/50 font-headline font-bold">Role</dt>
                    <dd className="text-green">{item.role}</dd>
                  </>
                )}
                {item.client && (
                  <>
                    <dt className="text-green/50 font-headline font-bold">Client</dt>
                    <dd className="text-green">{item.client}</dd>
                  </>
                )}
                {item.duration && (
                  <>
                    <dt className="text-green/50 font-headline font-bold">Timeline</dt>
                    <dd className="text-green">{item.duration}</dd>
                  </>
                )}
                {item.stack && item.stack.length > 0 && (
                  <>
                    <dt className="text-green/50 font-headline font-bold">Stack</dt>
                    <dd className="text-green">{item.stack.join(' · ')}</dd>
                  </>
                )}
              </dl>
            )}

            {item.summary && (
              <p className="font-body text-lg text-green/85 leading-relaxed mb-6 border-l-4 border-yellow pl-4">
                {item.summary}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-8">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow text-green font-headline font-bold text-[12px] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.highlights && item.highlights.length > 0 && (
              <div className="mb-10">
                <h2 className="font-headline font-bold text-xl text-green mb-4">Highlights</h2>
                <ul className="list-disc pl-5 space-y-2 font-body text-green/80 leading-relaxed">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="font-body text-green/80 text-lg leading-relaxed space-y-4 border-t border-black/5 pt-8">
              {item.content.split(/\n\n+/).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
