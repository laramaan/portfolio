import { faqs } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FAQSection() {
  return (
    <section className="py-20 md:py-24 text-white bg-green" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-0.5 bg-yellow" aria-hidden />
            <p className="font-headline font-bold text-[15px] tracking-wide text-white">FAQs</p>
          </div>
          <h2
            id="faq-heading"
            className="font-headline font-extrabold text-3xl md:text-5xl text-white leading-tight"
          >
            Questions? <span className="text-yellow italic font-normal">Look here.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <ScrollReveal key={faq.q} delay={idx * 0.04}>
              <details
                className="group bg-white/10 rounded-2xl overflow-hidden transition-colors duration-300 open:bg-yellow open:text-green text-white"
                {...(idx === 1 ? { open: true } : {})}
              >
                <summary className="w-full p-6 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow rounded-2xl">
                  <span className="font-headline text-lg font-bold pr-4">{faq.q}</span>
                  <div className="relative w-6 h-6 flex items-center justify-center shrink-0" aria-hidden>
                    <span className="material-symbols-outlined absolute transition-opacity duration-200 group-open:opacity-0">
                      add
                    </span>
                    <span className="material-symbols-outlined absolute opacity-0 transition-opacity duration-200 group-open:opacity-100">
                      remove
                    </span>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-sm leading-relaxed text-white/85 border-t border-transparent group-open:border-green/15 mt-0 pt-4 group-open:text-green/90">
                  {faq.a}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
