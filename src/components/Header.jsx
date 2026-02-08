import { useState } from 'react';

const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0/33f121b8-3f79-4c4e-b9e1-9c7f16954dd4/Waten---Logo-.png?format=1500w';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#', label: 'Home' },
    { href: '#projects', label: 'Portfolio' },
    { href: '#about', label: 'About us' },
    { href: '#why-waten', label: 'Why Waten' },
    { href: '#team', label: 'The Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-waten-dark/95 backdrop-blur-sm border-b border-waten-green/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt="Waten Real Estate"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-200 hover:text-waten-accent transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {open && (
          <nav className="md:hidden py-4 border-t border-waten-green/30 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-200 hover:text-waten-accent transition-colors text-sm uppercase tracking-wider"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
