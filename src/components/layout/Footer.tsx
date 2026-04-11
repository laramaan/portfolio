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
  return (
    <footer className="bg-white pt-20 md:pt-24 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black/5 pt-12 md:pt-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center text-green font-black text-xl">
                {site.logoLetter}
              </div>
              <span className="text-3xl md:text-4xl font-black text-green">{site.brandName}</span>
            </div>
            <p className="text-green/70 max-w-sm mb-8 leading-relaxed font-body">
              {site.footer.blurb}
            </p>
            <div className="flex flex-wrap gap-3" aria-label="Social links">
              {['facebook', 'behance', 'youtube', 'twitter', 'instagram'].map((network, i) => (
                <motion.a
                  key={network}
                  href="#"
                  aria-label={network}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center text-green hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  {i === 1 ? (
                    <span className="font-bold text-sm">Bē</span>
                  ) : (
                    <SocialIcon kind={network} />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-yellow font-bold text-lg mb-6 font-headline">Navigation</h2>
            <ul className="space-y-3 font-body text-sm">
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
            <h2 className="text-yellow font-bold text-lg mb-6 font-headline">Contact</h2>
            <ul className="space-y-3 text-green/80 font-body text-sm">
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
            <h2 className="text-yellow font-bold text-lg mb-6 font-headline">
              Get the latest information
            </h2>
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

      <div className="bg-green py-6 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/80 font-body text-center md:text-left">
            Copyright © {site.footer.copyrightYear}{' '}
            <span className="text-yellow">{site.brandName}</span> All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm text-white/80 font-body">
            <a className="hover:text-white transition-colors focus-visible:outline rounded" href="#">
              User Terms &amp; Conditions
            </a>
            <span className="opacity-40" aria-hidden>
              |
            </span>
            <a className="hover:text-white transition-colors focus-visible:outline rounded" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ kind }: { kind: string }) {
  const common = 'w-5 h-5 fill-current';
  switch (kind) {
    case 'facebook':
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M21.58 7.19C21.35 6.31 20.66 5.6 19.79 5.37C18.21 4.95 12 4.95 12 4.95C12 4.95 5.79 4.95 4.21 5.37C3.34 5.6 2.65 6.31 2.42 7.19C2 8.79 2 12 2 12C2 12 2 15.21 2.42 16.81C2.65 17.69 3.34 18.4 4.21 18.63C5.79 19.05 12 19.05 12 19.05C12 19.05 18.21 19.05 19.79 18.63C20.66 18.4 21.35 17.69 21.58 16.81C22 15.21 22 12 22 12C22 12 22 8.79 21.58 7.19ZM10 15V9L15.2 12L10 15Z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 5.92 17.23 7.79 17.27C6.32 18.42 4.47 19.11 2.46 19.11C2.1 19.11 1.76 19.09 1.41 19.04C3.32 20.26 5.58 21 8.01 21C15.92 21 20.25 14.41 20.25 8.7C20.25 8.51 20.24 8.32 20.23 8.14C21.08 7.53 21.83 6.82 22.46 6Z" />
        </svg>
      );
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2.16C15.2 2.16 15.58 2.18 16.86 2.24C18.14 2.3 18.78 2.5 19.22 2.67C19.8 2.9 20.22 3.17 20.65 3.6C21.08 4.02 21.36 4.44 21.58 5.02C21.75 5.46 21.95 6.1 22.01 7.37C22.07 8.65 22.09 9.03 22.09 12C22.09 14.97 22.07 15.35 22.01 16.63C21.95 17.9 21.75 18.54 21.58 18.98C21.36 19.56 21.08 19.98 20.65 20.4C20.22 20.83 19.8 21.1 19.22 21.33C18.78 21.5 18.14 21.7 16.86 21.76C15.58 21.82 15.2 21.84 12 21.84C8.8 21.84 8.42 21.82 7.14 21.76C5.86 21.7 5.22 21.5 4.78 21.33C4.2 21.1 3.78 20.83 3.35 20.4C2.92 19.98 2.64 19.56 2.42 18.98C2.25 18.54 2.05 17.9 1.99 16.63C1.93 15.35 1.91 14.97 1.91 12C1.91 9.03 1.93 8.65 1.99 7.37C2.05 6.1 2.25 5.46 2.42 5.02C2.64 4.44 2.92 4.02 3.35 3.6C3.78 3.17 4.2 2.9 4.78 2.67C5.22 2.5 5.86 2.3 7.14 2.24C8.42 2.18 8.8 2.16 12 2.16ZM12 5.84C8.6 5.84 5.84 8.6 5.84 12C5.84 15.4 8.6 18.16 12 18.16C15.4 18.16 18.16 15.4 18.16 12C18.16 8.6 15.4 5.84 12 5.84ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM18.41 4.15C17.62 4.15 16.98 4.79 16.98 5.58C16.98 6.37 17.62 7.01 18.41 7.01C19.2 7.01 19.84 6.37 19.84 5.58C19.84 4.79 19.2 4.15 18.41 4.15Z" />
        </svg>
      );
  }
}
