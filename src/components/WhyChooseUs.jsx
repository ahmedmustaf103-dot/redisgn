// One featured project image for Why Waten (Murabaa – residential quality)
const WHY_IMAGE = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0/7442b059-a70b-473f-b7f6-17e55af7f1b7/Untitled-52-gigapixel-high+fidelity+v2-2x.jpeg';

// Different from TrustElements (15+, 12+, 3, 100%) and About (19k sqm, 74+, 57+) — process/outcome focused
const proofStats = [
  { value: 'On budget', label: 'Delivery track record' },
  { value: 'Zero', label: 'Hidden fees' },
  { value: 'Commercial & Residential', label: 'Both sectors' },
  { value: 'End-to-end', label: 'Concept to handover' },
];

const benefits = [
  {
    title: 'Transparent Process',
    copy: 'Clear communication at every stage — no hidden fees, full disclosure.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Premium Quality',
    copy: 'Thoughtfully designed properties that define urban living in the Kingdom.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Innovation First',
    copy: 'Forward-thinking design and development that enriches the architectural scene.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Kingdom-Wide',
    copy: 'Projects in Riyadh, Makkah, and beyond — expanding across the Kingdom.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-waten" className="relative py-24 lg:py-32 bg-waten-bg text-waten-ink overflow-hidden">
      {/* Subtle top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-waten-accent/30 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase tracking-[0.2em] text-waten-accent text-xs font-semibold mb-3">
            Why Waten?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-charcoal mb-4">
            Benefit-Driven Results
          </h2>
          <div className="w-12 h-0.5 bg-waten-accent/50 mx-auto mb-6" aria-hidden="true" />
          <p className="text-waten-muted text-lg leading-relaxed">
            We deliver more than buildings — transparency, quality, and innovation at every step.
          </p>
        </header>

        {/* Social proof stats */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-20">
          {proofStats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-serif text-3xl md:text-4xl text-waten-accent font-medium tabular-nums">{s.value}</span>
              <span className="text-waten-muted text-sm mt-1 max-w-[120px]">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <article
              key={i}
              className="group relative flex gap-6 p-8 lg:p-10 bg-waten-card border border-waten-stone/80 rounded-xl shadow-sm hover:shadow-md hover:border-waten-accent/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-waten-accent/20 group-hover:bg-waten-accent transition-colors duration-300" aria-hidden="true" />
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-waten-accent/10 flex items-center justify-center text-waten-accent group-hover:bg-waten-accent group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <div className="min-w-0 pl-1">
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-waten-muted text-sm lg:text-base leading-relaxed">
                  {benefit.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Featured project image — quality in practice */}
        <div className="mt-16 max-w-3xl mx-auto">
          <a
            href="#/project/murabbaa-residence"
            className="block rounded-xl overflow-hidden border border-waten-stone/80 hover:border-waten-accent/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-waten-accent focus-visible:ring-offset-2"
          >
            <div className="aspect-[16/10] overflow-hidden bg-waten-stone">
              <img
                src={WHY_IMAGE}
                alt="Murabaa Residence — Riyadh"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="p-4 text-center text-sm text-waten-muted font-medium">Murabaa Residence — Riyadh · View project →</p>
          </a>
        </div>
      </div>
    </section>
  );
}
