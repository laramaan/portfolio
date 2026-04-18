import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-20 md:py-24 bg-white" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-4 h-0.5 bg-yellow" aria-hidden />
            <p className="font-headline font-bold text-[15px] tracking-wide text-green">FAQs</p>
          </div>
          <h2
            id="faq-heading"
            className="font-headline font-extrabold text-3xl md:text-5xl text-green leading-tight"
          >
            Questions? <span className="text-yellow italic font-normal">Look here.</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={faq.q} delay={idx * 0.04}>
                <div
                  className={`border border-black/5 rounded-2xl overflow-hidden transition-colors duration-300 text-green ${
                    isOpen ? 'bg-yellow' : 'bg-grey'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 flex justify-between items-center text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                    aria-expanded={isOpen}
                  >
                    <span className="font-headline text-lg font-bold pr-4">{faq.q}</span>
                    <div className="relative w-6 h-6 flex items-center justify-center shrink-0" aria-hidden>
                      <span
                        className={`material-symbols-outlined absolute transition-opacity duration-200 ${
                          isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        add
                      </span>
                      <span
                        className={`material-symbols-outlined absolute transition-opacity duration-200 ${
                          isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        remove
                      </span>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-sm leading-relaxed text-green/90 border-t border-green/15 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
