import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { getServiceById } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getServiceById(id) : undefined;

  if (!item) {
    return (
      <section className="pt-32 pb-24 px-6 text-center">
        <h1 className="font-headline text-2xl text-green mb-4">Service not found</h1>
        <Link to="/services" className="text-yellow font-bold hover:underline">
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{item.title} | Manish Portfolio</title>
        <meta name="description" content={item.short_desc} />
      </Helmet>
      <article className="pt-28 md:pt-36 pb-20 md:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-row justify-between items-end mb-12 md:mb-16 gap-4 md:gap-8">
            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-0.5 bg-yellow" aria-hidden />
                <p className="font-headline font-bold text-[15px] tracking-wide text-green">Services</p>
              </div>
              <h1 className="font-headline font-bold text-3xl md:text-5xl text-green leading-[1.1] tracking-tight">
                {item.title}
              </h1>
            </div>
            <Link
              to="/services"
              className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded shrink-0"
            >
              <span className="material-symbols-outlined">arrow_back</span> All services
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-black/5 shrink-0">
                <span className="material-symbols-outlined text-3xl text-green">{item.icon}</span>
              </div>
              <p className="font-body text-green/70 text-lg">{item.short_desc}</p>
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
