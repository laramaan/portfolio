import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '@/data/portfolio';
import { PillButtonLink } from '@/components/ui/PillButton';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';

export function ServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-white" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionEyebrow label="Services" />
            <h2
              id="services-heading"
              className="font-headline font-bold text-3xl md:text-5xl tracking-tight leading-[1.1]"
            >
              <span className="text-yellow italic font-normal">Services</span>
              <span className="text-green"> I Provide</span>
            </h2>
          </div>
          <PillButtonLink to="/services" label="View All Services" />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-grey p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md"
            >
              <div className="mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-3xl text-green">{service.icon}</span>
              </div>
              <h3 className="font-headline font-bold text-[22px] text-green mb-3">{service.title}</h3>
              <p className="font-body text-green/70 leading-relaxed mb-6 text-[15px]">
                {service.short_desc}
              </p>
              <Link
                to={`/service/${service.id}`}
                className="inline-flex items-center font-headline font-bold text-[15px] text-green group-hover:translate-x-0.5 transition-transform duration-300 focus-visible:outline focus-visible:underline rounded"
              >
                <span className="text-green">Learn more</span>
                <span className="text-yellow ml-2 shrink-0" aria-hidden>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
