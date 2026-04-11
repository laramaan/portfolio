import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { site } from '@/data/portfolio';

const footerNav = [
  { hash: 'home', label: 'Home' },
  { hash: 'services', label: 'Services' },
  { hash: 'about', label: 'About' },
  { hash: 'portfolio', label: 'Projects' },
  { path: '/blogs', label: 'Blogs' },
  { hash: 'faq', label: 'FAQs' },
] as const;

export function Footer() {
  const linkedin = site.social?.linkedin;
  const github = site.social?.github;

  return (
    <footer className="bg-white pt-16 md:pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-10 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-black/5 pt-10 md:pt-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-green font-black text-xl">
                {site.logoLetter}
              </div>
              <span className="text-3xl md:text-4xl font-black text-green">{site.brandName}</span>
            </div>
            <p className="text-green/70 max-w-sm mb-6 leading-relaxed font-body">{site.footer.blurb}</p>
            <div className="flex flex-wrap gap-3" aria-label="Social links">
              {linkedin && (
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-green hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
              )}
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-green hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </motion.a>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-yellow font-bold text-lg mb-4 font-headline">Navigation</h2>
            <ul className="space-y-2.5 font-body text-sm">
              {footerNav.map((item) => (
                <li key={'path' in item ? item.path : item.hash}>
                  <Link
                    className="text-green/80 hover:text-yellow transition-colors focus-visible:outline focus-visible:underline rounded"
                    to={'path' in item ? item.path : { pathname: '/', hash: item.hash }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-yellow font-bold text-lg mb-4 font-headline">Contact</h2>
            <ul className="space-y-2.5 text-green/80 font-body text-sm">
              <li>{site.footer.phone}</li>
              <li>{site.footer.web}</li>
              <li>{site.footer.email}</li>
              <li className="leading-relaxed">
                {site.footer.addressLines[0]}
                <br />
                {site.footer.addressLines[1]}
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-yellow font-bold text-lg mb-4 font-headline">Get the latest information</h2>
            <form
              className="flex items-center bg-[#F4F5F4] rounded-lg overflow-hidden border border-black/5"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="bg-transparent border-none focus:ring-0 text-green px-4 py-3 w-full placeholder:text-green/40 text-sm font-body"
              />
              <button
                type="submit"
                className="bg-green text-yellow px-5 py-3 hover:bg-green/90 transition-colors flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
                aria-label="Subscribe"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-green py-5 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-white/80 font-body text-center md:text-left">
            Copyright © {site.footer.copyrightYear}{' '}
            <span className="text-yellow">{site.brandName}</span> All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm text-white/80 font-body">
            <Link className="hover:text-white transition-colors focus-visible:outline rounded" to="/terms">
              User Terms &amp; Conditions
            </Link>
            <span className="opacity-40" aria-hidden>
              |
            </span>
            <Link className="hover:text-white transition-colors focus-visible:outline rounded" to="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
