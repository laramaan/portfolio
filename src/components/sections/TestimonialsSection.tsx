import { useRef } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function TestimonialsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  const scrollByDir = (dir: -1 | 1) => {
    const el = gridRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth, 360), behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-0.5 bg-yellow" aria-hidden />
            <p className="font-headline font-bold text-[15px] tracking-wide text-green">
              Clients Testimonials
            </p>
          </div>
          <h2
            id="testimonials-heading"
            className="font-headline font-extrabold text-3xl md:text-5xl text-green leading-tight"
          >
            The Impact of My Work:
            <br />
            <span className="text-yellow italic font-normal">Client Testimonials</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-grey rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-50 -z-10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-yellow rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-10 -z-10 blur-3xl" aria-hidden />

          <div
            ref={gridRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory md:overflow-visible pb-2 -mx-1 px-1"
            style={{ scrollbarWidth: 'thin' }}
          >
            {testimonials.map((test, i) => (
              <motion.article
                key={test.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-grey p-8 md:p-12 rounded-[2rem] flex flex-col justify-between min-h-[280px] md:h-full min-w-[min(100%,320px)] md:min-w-0 snap-center group transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="text-yellow mb-6" aria-hidden>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 opacity-50">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="font-headline text-lg md:text-[22px] text-green leading-relaxed font-bold tracking-tight mb-8">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={test.image}
                    alt={`${test.name}`}
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="font-headline font-bold text-green text-[16px]">{test.name}</h3>
                    <p className="font-body text-green/60 text-[14px]">{test.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-10 md:mt-16">
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              className="w-12 h-12 rounded-full bg-green text-yellow flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              aria-label="Previous testimonials"
            >
              <span className="material-symbols-outlined text-2xl font-bold">west</span>
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              className="w-12 h-12 rounded-full bg-yellow text-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
              aria-label="Next testimonials"
            >
              <span className="material-symbols-outlined text-2xl font-bold">east</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
