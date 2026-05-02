import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getProjectById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';

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
      
      {/* Hero Section */}
      <article className="pt-28 md:pt-36 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-green leading-[1.1] tracking-tight">
                {item.title}
              </h1>
              <Link
                to="/projects"
                className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded shrink-0"
              >
                <span className="material-symbols-outlined">arrow_back</span> All projects
              </Link>
            </div>
            
            {/* Summary and Live URL */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
              {item.summary && (
                <p className="font-body text-xl text-green/80 leading-relaxed max-w-4xl">
                  {item.summary}
                </p>
              )}
              {item.is_public && item.live_url && (
                <a
                  href={item.live_url}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 bg-green text-white font-headline font-bold px-6 py-3 rounded-full hover:bg-yellow hover:text-green transition-colors flex items-center gap-2"
                >
                  Visit Live Site <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow/20 text-green font-headline font-bold text-[13px] px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
              {/* Main Image */}
              <div className="lg:col-span-9 h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-sm relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={750}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {item.stack && item.stack.length > 0 && (
                  <div className="absolute bottom-6 right-6 flex flex-wrap gap-2 justify-end max-w-[80%]">
                    {item.stack.map(s => (
                      <span key={s} className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-headline text-[11px] border border-white/10 shadow-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {galleryThumbs.length > 0 && (
                <div className="lg:col-span-3 flex lg:flex-col gap-4 h-[300px] md:h-[500px]">
                  {galleryThumbs.map((src, i) => (
                    <a
                      key={src}
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="relative flex-1 rounded-lg overflow-hidden bg-grey shadow-sm hover:shadow-md transition-all group border border-black/5"
                    >
                      <img
                        src={src}
                        alt={`${item.title} screenshot ${i + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Overview & The Challenge/Solution */}
      <section className="py-20 md:py-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-16 md:gap-20">
          
          <ScrollReveal>
            <h2 className="font-headline font-bold text-2xl text-green mb-6">Overview</h2>
            <div className="font-body text-[16px] text-green/80 leading-relaxed space-y-4 max-w-4xl">
              {item.content.split(/\n\n+/).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </ScrollReveal>

          {(item.problem || item.solution) && (
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {item.problem && (
                  <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-black/5">
                    <h3 className="font-headline font-bold text-xl text-green mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-yellow text-2xl">error</span>
                      The Challenge
                    </h3>
                    <p className="font-body text-[16px] text-green/80 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                )}
                {item.solution && (
                  <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-black/5">
                    <h3 className="font-headline font-bold text-xl text-green mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-yellow text-2xl">lightbulb</span>
                      The Solution
                    </h3>
                    <p className="font-body text-[16px] text-green/80 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Key Features & Project Highlights (Dark Section) */}
      {(item.features?.length || item.highlights?.length) ? (
        <section className="py-20 md:py-24 bg-green text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {item.features && item.features.length > 0 && (
                <ScrollReveal>
                  <h2 className="font-headline font-bold text-2xl text-yellow mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-yellow rounded-full" />
                    Key Features
                  </h2>
                  <div className="space-y-4">
                    {item.features.map((f, i) => (
                      <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-yellow text-[14px]">check</span>
                        </div>
                        <p className="font-body text-white/90 text-[15px] leading-relaxed">
                          {f}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {item.highlights && item.highlights.length > 0 && (
                <ScrollReveal delay={0.1}>
                  <h2 className="font-headline font-bold text-2xl text-yellow mb-8 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-yellow rounded-full" />
                    Project Highlights
                  </h2>
                  <ul className="flex flex-col">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-6 py-5 border-t border-white/10 first:border-0">
                        <span className="font-headline font-black text-3xl text-yellow/50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="font-body text-white/90 text-[16px] leading-relaxed pt-1">
                          {h}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
            </div>
        </section>
      ) : null}

      {/* Learnings, Challenges, Impact (White Background) */}
      {(item.challenges || item.learnings || item.impact) && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <ScrollReveal>
              <h2 className="font-headline font-bold text-3xl mb-12 text-center text-green">Project Results & Outcomes</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
              
              {/* Challenges */}
              {item.challenges && item.challenges.length > 0 && (
                <ScrollReveal delay={0.1}>
                  <h3 className="font-headline font-bold text-xl text-green mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow">trending_flat</span>
                    Challenges Overcome
                  </h3>
                  <ul className="space-y-4">
                    {item.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow mt-2.5 shrink-0" />
                        <p className="font-body text-[16px] text-green/80 leading-relaxed">{c}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              {/* Learnings */}
              {item.learnings && item.learnings.length > 0 && (
                <ScrollReveal delay={0.2}>
                  <h3 className="font-headline font-bold text-xl text-green mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow">star</span>
                    Key Learnings
                  </h3>
                  <ul className="space-y-4">
                    {item.learnings.map((l, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow mt-2.5 shrink-0" />
                        <p className="font-body text-[16px] text-green/80 leading-relaxed">{l}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}

              {/* Impact */}
              {item.impact && item.impact.length > 0 && (
                <ScrollReveal delay={0.3}>
                  <h3 className="font-headline font-bold text-xl text-green mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow">trending_up</span>
                    Business Impact
                  </h3>
                  <ul className="space-y-4">
                    {item.impact.map((imp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow mt-2.5 shrink-0" />
                        <p className="font-body text-[16px] text-green/80 leading-relaxed">{imp}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-green py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.2] w-full max-w-3xl text-center md:text-left">
            Want to see <span className="text-yellow">Similar</span> <br className="hidden md:block" />
            <span className="text-yellow italic font-normal">Results</span> for your business?
          </h2>
          <div className="shrink-0">
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Contact Me" />
          </div>
        </div>
      </section>
    </>
  );
}
