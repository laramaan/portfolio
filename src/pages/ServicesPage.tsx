import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import { PageListHeading } from '@/components/ui/PageListHeading';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { PillButtonLink } from '@/components/ui/PillButton';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>All Services | Manish Portfolio</title>
        <meta
          name="description"
          content="Web development, WordPress, Laravel + React, and freelance consulting services."
        />
      </Helmet>
      <section className="pt-28 md:pt-36 bg-white pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <PageListHeading eyebrow="Services" titleBefore="All " titleAccent="Services" />
        </div>
      </section>

      <MarqueeBanner />

      <section className="pt-16 md:pt-20 pb-20 md:pb-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col aspect-square border border-black/[0.03]"
              >
                <div className="mb-6 w-16 h-16 bg-grey rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl text-green">{service.icon}</span>
                </div>
                <h2 className="font-headline font-bold text-[22px] text-green mb-3">{service.title}</h2>
                <p className="font-body text-green/60 leading-relaxed mb-6 text-[15px] flex-1 overflow-hidden">
                  {service.short_desc}
                </p>
                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center font-headline font-bold text-[15px] focus-visible:outline focus-visible:underline rounded mt-auto w-fit group"
                >
                  <span className="text-green group-hover:text-yellow transition-colors">Learn more</span>
                  <span className="text-yellow ml-2 shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden>
                    <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white leading-[1.2] w-full max-w-3xl text-center md:text-left">
            Let&apos;s Create an <span className="text-yellow">Amazing</span> <br className="hidden md:block" />
            <span className="text-yellow italic font-normal">Project</span> Together!
          </h2>
          <div className="shrink-0">
            <PillButtonLink to={{ pathname: '/', hash: 'contact' }} label="Contact Me Now" />
          </div>
        </div>
      </section>
    </>
  );
}
