import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ContactSection() {
  return (
    <section className="py-20 md:py-24 bg-green text-white" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-0.5 bg-yellow" aria-hidden />
              <p className="font-headline font-bold text-[15px] tracking-wide text-white">Contact Us</p>
            </div>
            <h2
              id="contact-heading"
              className="font-headline font-extrabold text-3xl md:text-5xl text-white leading-[1.1] tracking-tight mb-8"
            >
              Let&apos;s Talk for{' '}
              <span className="text-yellow italic font-normal">
                Your
                <br />
                Next Projects
              </span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed font-body mb-10 max-w-lg">
              {site.contact.intro}
            </p>

            <ul className="space-y-6" aria-label="Contact details">
              <li className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green text-[22px]">phone_in_talk</span>
                </div>
                <a className="text-white text-lg font-body hover:text-yellow transition-colors" href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green text-[22px]">mail</span>
                </div>
                <a
                  className="text-white text-lg font-body hover:text-yellow transition-colors"
                  href={`mailto:${site.contact.email}`}
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0">
                  <span className="text-green text-[22px] font-bold mt-0.5">S</span>
                </div>
                <span className="text-white text-lg font-body">{site.contact.socialHandle}</span>
              </li>
              <li className="flex items-start gap-5 pt-1">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-green text-[22px]">location_on</span>
                </div>
                <span className="text-white text-lg font-body leading-relaxed max-w-[280px] mt-2">
                  {site.contact.address}
                </span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <form
              className="flex flex-col gap-6 mt-2 lg:mt-0"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Ex. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-5 py-4 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-email">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-5 py-4 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-phone">
                    Phone *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="Enter Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-5 py-4 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35"
                  />
                </div>
                <div className="flex flex-col gap-2 relative z-0">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-interest">
                    I&apos;m Interested in *
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-5 py-4 text-white/90 font-body outline-none focus:ring-0 focus:border-yellow transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="uiux" className="text-green">
                      UI/UX Design
                    </option>
                    <option value="web" className="text-green">
                      Web Development
                    </option>
                  </select>
                  <div className="absolute right-5 top-[46px] pointer-events-none text-white/60" aria-hidden>
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 relative z-0">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-budget">
                    Budget Range (USD) *
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-5 py-4 text-white/90 font-body outline-none focus:ring-0 focus:border-yellow transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Range
                    </option>
                    <option value="1k-5k" className="text-green">
                      $1,000 - $5,000
                    </option>
                    <option value="5k-10k" className="text-green">
                      $5,000 - $10,000
                    </option>
                  </select>
                  <div className="absolute right-5 top-[46px] pointer-events-none text-white/60" aria-hidden>
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 relative z-0">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-country">
                    Country *
                  </label>
                  <select
                    id="contact-country"
                    name="country"
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-5 py-4 text-white/90 font-body outline-none focus:ring-0 focus:border-yellow transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="us" className="text-green">
                      United States
                    </option>
                    <option value="uk" className="text-green">
                      United Kingdom
                    </option>
                  </select>
                  <div className="absolute right-5 top-[46px] pointer-events-none text-white/60" aria-hidden>
                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-message">
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Enter here.."
                  className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-5 py-4 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35 resize-none min-h-[140px]"
                />
              </div>

              <div className="mt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center bg-yellow p-[2px] rounded-full shadow-sm transition-colors duration-300 w-fit group border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span className="bg-green text-white px-8 py-3.5 rounded-full font-bold font-headline text-sm tracking-wide mr-2">
                    Submit
                  </span>
                  <span className="bg-white text-green w-10 h-10 rounded-full flex items-center justify-center shadow-sm mr-1 group-hover:translate-x-1 transition-transform relative z-10">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5" aria-hidden>
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
