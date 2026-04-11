import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getBlogById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={item.content.slice(0, 155)} />
      </Helmet>
      <article className="pt-28 md:pt-36 pb-20 md:pb-24 bg-grey">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-6">
            <h1 className="font-headline font-bold text-3xl md:text-5xl text-green w-full md:max-w-2xl">
              {item.title}
            </h1>
            <Link
              to="/blogs"
              className="text-green/80 hover:text-green font-body flex items-center gap-2 shrink-0 focus-visible:outline focus-visible:underline rounded"
            >
              <span className="material-symbols-outlined">arrow_back</span> Blogs
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <p className="font-body text-green/60 mb-6">
              <span className="font-bold text-green">{item.date}</span> • {item.time}
            </p>
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-white shadow-sm">
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
            <div className="font-body text-green/80 text-lg leading-relaxed space-y-4 bg-white rounded-2xl p-8 border border-black/5 shadow-sm">
              <p>{item.content}</p>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
}
