import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getBlogById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PillButtonLink } from '@/components/ui/PillButton';

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getBlogById(id) : undefined;

  if (!item) {
    return (
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-headline text-2xl text-green mb-4">Article not found</h1>
        <Link to="/blogs" className="text-yellow font-bold hover:underline">
          Back to blogs
        </Link>
      </section>
    );
  }

  const meta = (item.excerpt ?? item.content).slice(0, 155);

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={meta} />
      </Helmet>
      <article className="pt-28 md:pt-36 pb-8 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-green leading-[1.1] tracking-tight">
                {item.title}
              </h1>
              <Link
                to="/blogs"
                className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded shrink-0"
              >
                <span className="material-symbols-outlined">arrow_back</span> All blogs
              </Link>
            </div>
            
            {/* Excerpt */}
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
              {item.excerpt && (
                <p className="font-body text-xl text-green/80 leading-relaxed max-w-4xl">
                  {item.excerpt}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {item.category && (
                <span className="bg-yellow/20 text-green font-headline font-bold text-[13px] px-4 py-1.5 rounded-full">
                  {item.category}
                </span>
              )}
              <span className="bg-yellow/20 text-green font-headline font-bold text-[13px] px-4 py-1.5 rounded-full">
                {item.date}
              </span>
              <span className="bg-yellow/20 text-green font-headline font-bold text-[13px] px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">schedule</span> {item.time}
              </span>
            </div>

            <div className="rounded-lg overflow-hidden shadow-sm relative group h-[300px] md:h-[500px] mb-16">
              <img
                src={item.image}
                alt={item.title}
                width={1200}
                height={750}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl bg-white px-6 md:px-10 py-8 md:py-12 border border-black/5 shadow-sm mb-16">
              <div 
                className="font-body text-green/85 text-[17px] leading-[1.75]"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Call to Action */}
      <section className="bg-green py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.2] w-full max-w-3xl text-center md:text-left">
            Let&apos;s Create an <span className="text-yellow">Amazing</span> <br className="hidden md:block" />
            <span className="text-yellow italic font-normal">Project</span> Together!
          </h2>
          <div className="shrink-0">
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Contact Me" />
          </div>
        </div>
      </section>
    </>
  );
}
