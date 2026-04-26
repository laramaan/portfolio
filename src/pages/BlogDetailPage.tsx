import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getBlogById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

function paragraphsFromContent(content: string): string[] {
  return content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
}

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
  const body = paragraphsFromContent(item.content);

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={meta} />
      </Helmet>
      <article className="pt-28 md:pt-36 pb-16 md:pb-20 bg-[#f6f7f6]">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-row justify-between items-end mb-12 md:mb-16 gap-4 md:gap-8">
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-0.5 bg-yellow" aria-hidden />
                <p className="font-headline font-bold text-[15px] tracking-wide text-green">News & Blogs</p>
              </div>
              {item.category && (
                <span className="inline-block font-headline font-bold text-[12px] uppercase tracking-wider text-green bg-yellow/90 px-3 py-1 rounded-full mb-4">
                  {item.category}
                </span>
              )}
              <h1 className="font-headline font-bold text-3xl md:text-[2.75rem] leading-tight text-green mb-4">
                {item.title}
              </h1>
              <p className="font-body text-green/55 text-sm md:text-base">
                <span className="font-bold text-green/80">{item.date}</span>
                <span className="mx-2" aria-hidden>
                  ·
                </span>
                {item.time}
              </p>
            </div>
            <Link
              to="/blogs"
              className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded shrink-0"
            >
              <span className="material-symbols-outlined">arrow_back</span> All blogs
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-white mb-10">
              <div className="relative w-full aspect-[16/9] bg-white">
                <img
                  src={item.image}
                  alt=""
                  width={1200}
                  height={675}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              {item.excerpt && (
                <p className="font-body text-lg text-green/75 leading-relaxed px-6 md:px-10 py-6 md:py-8 border-t border-black/5 bg-white">
                  {item.excerpt}
                </p>
              )}
            </div>

            <div className="rounded-3xl bg-white px-6 md:px-10 py-8 md:py-12 border border-black/5 shadow-sm">
              <div className="font-body text-green/85 text-[17px] leading-[1.75] space-y-5 max-w-[65ch] mx-auto">
                {body.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
