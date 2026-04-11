import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Manish Portfolio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-white">
        <div className="text-center max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline font-extrabold text-[100px] md:text-[150px] leading-none text-yellow mb-2 drop-shadow-sm"
          >
            404
          </motion.h1>
          <h2 className="font-headline font-bold text-3xl text-green mb-6">Page Not Found</h2>
          <p className="text-lg text-green/70 mb-10">
            The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-yellow p-[2px] rounded-full shadow-sm transition-all duration-300 w-fit group border-none mx-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            <span className="bg-green text-white px-8 py-3.5 rounded-full font-bold font-headline text-sm tracking-wide mr-2">
              Back to Homepage
            </span>
            <span className="bg-white text-green w-10 h-10 rounded-full flex items-center justify-center shadow-sm mr-1 group-hover:-translate-x-1 transition-transform">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 transform rotate-180" aria-hidden>
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
