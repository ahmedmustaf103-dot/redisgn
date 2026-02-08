const WATEN_EMAIL = 'Hello@waten.com';
const WATEN_ADDRESS = 'Office 22 9 Sercon Building, Musa Ibn Nusair St., Olaya, Riyadh';
const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0/33f121b8-3f79-4c4e-b9e1-9c7f16954dd4/Waten---Logo-.png?format=1500w';

const footerLinks = [
  { href: '#about', label: 'About us' },
  { href: '#projects', label: 'Portfolio' },
  { href: '#why-waten', label: 'Why Waten' },
  { href: '#team', label: 'The Team' },
  { href: '#contact', label: 'Contact' },
  { href: '#faq', label: 'FAQ' },
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { href: 'https://twitter.com', label: 'X (Twitter)', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
];

export default function Footer() {
  return (
    <>
      <section className="py-16 bg-waten-card text-waten-ink">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Ready to elevate your space?
          </h2>
          <p className="text-waten-muted mb-8 max-w-xl mx-auto">
            Get in touch to discuss your next project or learn more about our developments.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-waten-ink text-white font-medium hover:bg-charcoal transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>
      <footer className="py-12 bg-waten-accent text-stone-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            <div className="lg:col-span-2">
              <img
                src={LOGO_URL}
                alt="Waten Real Estate"
                className="h-8 w-auto object-contain opacity-90 mb-4 brightness-0 invert"
              />
              <p className="text-sm mb-2">{WATEN_ADDRESS}</p>
              <a href={`mailto:${WATEN_EMAIL}`} className="text-stone-300 hover:text-white transition-colors text-sm">
                {WATEN_EMAIL}
              </a>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={link.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-700 text-center text-sm">
            © {new Date().getFullYear()} Waten Real Estate. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
