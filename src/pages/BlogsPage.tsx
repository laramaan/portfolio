import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function BlogsPage() {
  return (
    <>
      <Helmet>
        <title>News &amp; Blogs | Manish Portfolio</title>
        <meta name="description" content="Articles on UI design, design systems, and accessibility." />
      </Helmet>
      <section className="pt-28 md:pt-36 pb-20 md:pb-24 bg-grey">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mb-12">
            <h1 className="font-headline font-bold text-3xl md:text-5xl text-green">All Blogs</h1>
            <Link
              to="/"
              className="text-green/80 hover:text-yellow font-bold font-headline flex items-center gap-2 transition-colors w-fit focus-visible:outline focus-visible:underline rounded"
            >
              <span className="material-symbols-outlined">home</span> Home
            </Link>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link
                  to={`/blog/${blog.id}`}
                  className="group block h-full bg-white/60 rounded-3xl p-4 md:p-0 md:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
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
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-green font-bold text-[13px] px-4 py-2 rounded-full font-headline">
                      {blog.date}
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
                  <p className="font-body text-green/70 leading-relaxed">{blog.content.slice(0, 120)}…</p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
