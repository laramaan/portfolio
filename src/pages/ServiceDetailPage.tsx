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
        <meta name="description" content={item.description} />
      </Helmet>
      
      {/* Hero Section */}
      <article className="pt-28 md:pt-36 pb-20 md:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <ScrollReveal className="mb-12 md:mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/services" className="text-green/70 hover:text-green font-headline font-bold text-sm tracking-wide uppercase flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Services
              </Link>
              <span className="text-green/40">/</span>
              <span className="font-headline font-bold text-sm tracking-wide text-green uppercase">{item.title}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
              <div className="flex-1">
                <h1 className="font-headline font-bold text-4xl md:text-5xl text-green leading-[1.1] tracking-tight mb-6">
                  {item.title}
                </h1>
                <p className="font-body text-xl text-green/80 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
              <div className="w-20 h-20 bg-grey rounded-full flex items-center justify-center shrink-0 hidden md:flex">
                <span className="material-symbols-outlined text-4xl text-green">{item.icon}</span>
              </div>
            </div>

            {item.image && (
              <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            )}
          </ScrollReveal>
        </div>
      </article>

      {/* About & Benefits Section */}
      <section className="py-20 md:py-24 bg-grey">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <h2 className="font-headline font-bold text-2xl text-green mb-6">Overview</h2>
              <p className="font-body text-lg text-green/80 leading-relaxed">
                {item.detailed_description}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-headline font-bold text-2xl text-green mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-yellow mt-0.5 shrink-0">check_circle</span>
                    <span className="font-body text-green/80 text-lg leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included & Deliverables (Dark Section) */}
      <section className="py-20 md:py-24 bg-green text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-3xl mb-12 text-center text-yellow">Everything You Need</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollReveal delay={0.1} className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow">inventory_2</span>
                Services Included
              </h3>
              <ul className="space-y-3">
                {item.services_included.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 font-body text-[15px]">
                    <span className="material-symbols-outlined text-[20px] text-yellow shrink-0 mt-0.5">check</span>
                    {inc}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow">card_giftcard</span>
                Deliverables
              </h3>
              <ul className="space-y-3">
                {item.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 font-body text-[15px]">
                    <span className="material-symbols-outlined text-[20px] text-yellow shrink-0 mt-0.5">check</span>
                    {del}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="font-headline font-bold text-xl mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow">trending_up</span>
                Outcomes
              </h3>
              <ul className="space-y-3">
                {item.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80 font-body text-[15px]">
                    <span className="material-symbols-outlined text-[20px] text-yellow shrink-0 mt-0.5">check</span>
                    {out}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process & Use Cases Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <h2 className="font-headline font-bold text-2xl text-green mb-8">Our Process</h2>
              <div className="space-y-8">
                {item.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-grey border border-black/5 text-green font-headline font-bold flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-green mb-1">{step.title}</h4>
                      <p className="font-body text-green/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-headline font-bold text-2xl text-green mb-8">Ideal Use Cases</h2>
              <div className="grid grid-cols-1 gap-4 mb-10">
                {item.use_cases.map((useCase, i) => (
                  <div key={i} className="bg-grey rounded-xl p-5 flex items-start gap-3">
                    <span className="material-symbols-outlined text-green/40 shrink-0 mt-0.5">lightbulb</span>
                    <span className="font-body text-green/80 font-medium leading-relaxed">{useCase}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-headline font-bold text-xl text-green mb-6">Industries</h3>
              <div className="flex flex-wrap gap-2">
                {item.industries.map((industry, i) => (
                  <span key={i} className="px-4 py-2 bg-green/5 text-green font-body font-medium rounded-full text-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="py-20 bg-grey">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-3xl text-green mb-12 text-center">Problems Solved</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {item.problems_solved.map((problem, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-3 border border-black/5">
                  <span className="material-symbols-outlined text-yellow mt-0.5 shrink-0">build</span>
                  <span className="font-body text-green/80 leading-relaxed">{problem}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-yellow mb-6">
              Ready to start your project?
            </h2>
            <p className="font-body text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Let's discuss how we can build something amazing together. Reach out and I'll get back to you shortly.
            </p>
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-green font-headline font-bold text-lg hover:bg-yellow hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
