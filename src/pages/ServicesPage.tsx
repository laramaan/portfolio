import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>All Services | Manish Portfolio</title>
        <meta name="description" content="UI/UX design, application design, and website design services." />
      </Helmet>
      <section className="pt-28 md:pt-36 pb-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12">
            <h1 className="font-headline font-bold text-3xl md:text-5xl text-green">All Services</h1>
            <Link
              to="/"
              className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded"
            >
              <span className="material-symbols-outlined">home</span> Home
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-grey p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-3xl text-green">{service.icon}</span>
                </div>
                <h2 className="font-headline font-bold text-[22px] text-green mb-3">{service.title}</h2>
                <p className="font-body text-green/70 leading-relaxed mb-6 text-[15px]">
                  {service.short_desc}
                </p>
                <Link
                  to={`/service/${service.id}`}
                  className="inline-flex items-center font-headline font-bold text-[15px] text-green hover:text-yellow transition-colors focus-visible:outline focus-visible:underline rounded"
                >
                  Learn more
                  <span className="text-yellow ml-2" aria-hidden>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                    </svg>
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
