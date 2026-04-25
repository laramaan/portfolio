import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '@/data/portfolio';
import { PageListHeading } from '@/components/ui/PageListHeading';
import { MarqueeBanner } from '@/components/sections/MarqueeBanner';
import { PillButtonLink } from '@/components/ui/PillButton';

export default function BlogsPage() {
  return (
    <>
      <Helmet>
        <title>News &amp; Blogs | Manish Portfolio</title>
        <meta
          name="description"
          content="Notes on Laravel, React, WordPress, AI-assisted development, and shipped client projects."
        />
      </Helmet>
      <section className="pt-28 md:pt-36 bg-white pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <PageListHeading eyebrow="News & Blogs" titleBefore="All " titleAccent="Blogs" />
        </div>
      </section>

      <MarqueeBanner />

      <section className="pt-16 md:pt-20 pb-20 md:pb-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                className="h-full"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${blog.id}`}
                  className="group flex flex-col h-full bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/[0.03] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-white">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {blog.category && (
                        <span className="bg-yellow text-green font-bold text-[11px] px-3 py-1.5 rounded-full font-headline uppercase tracking-wide">
                          {blog.category}
                        </span>
                      )}
                      <span className="bg-white/90 backdrop-blur-sm text-green font-bold text-[13px] px-4 py-2 rounded-full font-headline">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-green/60 font-body text-[14px] mb-3">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden>
                      schedule
                    </span>
                    <span>{blog.time}</span>
                  </div>
                  <h2 className="font-headline font-bold text-[22px] text-green group-hover:text-yellow transition-colors leading-[1.3] mb-4">
                    {blog.title}
                  </h2>
                  <p className="font-body text-green/70 leading-relaxed flex-1 min-h-0 mt-1">
                    {blog.excerpt ?? `${blog.content.slice(0, 140)}…`}
                  </p>
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
