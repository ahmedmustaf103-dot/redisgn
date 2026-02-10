import { useState } from 'react';

const faqs = [
  {
    q: 'Where does Waten operate?',
    a: 'Waten develops commercial and residential projects across the Kingdom, with a focus on Riyadh, Makkah, and other major Saudi cities.',
  },
  {
    q: 'What types of projects does Waten deliver?',
    a: 'We deliver both commercial and residential developments — from mixed-use spaces to premium residential properties, with a commitment to quality and sustainability.',
  },
  {
    q: 'How can I get in touch?',
    a: 'Reach out via our contact form or email Hello@waten.com. Our office is located at Office 22 9 Sercon Building, Musa Ibn Nusair St., Olaya, Riyadh.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-28 lg:py-36 bg-waten-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-charcoal font-semibold text-center mb-16">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-stone-200/80 rounded-lg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left font-medium text-charcoal hover:bg-waten-card/50 transition-colors"
                aria-expanded={open === i}
              >
                {faq.q}
                <span className="flex-shrink-0 ml-2">
                  {open === i ? (
                    <svg className="w-5 h-5 text-waten-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-waten-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {open === i && (
                <div className="px-6 md:px-8 pb-8 text-stone-600 leading-body max-w-2xl">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
