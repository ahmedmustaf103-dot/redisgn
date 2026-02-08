const before = [
  'Minimal structure — single page, limited sections',
  'No clear CTAs beyond basic "Read More" links',
  'No dedicated The Team or Why Waten sections',
  'No project filtering or search',
  'No Arabic / RTL support',
  'Limited trust elements',
];

const after = [
  'Clear hierarchy — Hero → Why Waten → About → Projects → Trust → Team → Contact → FAQ',
  'Primary CTAs: "Explore Projects" and "Contact Us for Investment Opportunities"',
  'The Team section + Why Waten with benefit-driven icons',
  'Project filter (city, type, status) + property search bar',
  'Arabic / RTL support with language toggle',
  'Trust elements: metrics, testimonials, partner logos',
];

export default function BeforeAfter() {

  return (
    <section id="redesign-overview" className="py-24 lg:py-32 bg-waten-bg">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="uppercase tracking-[0.2em] text-waten-muted text-sm font-medium mb-4">
            Redesign Overview
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-4">
            Before & After
          </h2>
          <p className="text-muted text-lg">
            Key changes that improve structure, clarity, and conversion for Waten.
          </p>
        </header>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="p-8 bg-waten-card border border-waten-stone rounded-lg">
            <h3 className="font-serif text-xl text-charcoal font-medium mb-6">Before</h3>
            <ul className="space-y-3 text-muted text-sm">
              {before.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-waten-card border border-waten-accent/40 rounded-lg">
            <h3 className="font-serif text-xl text-charcoal font-medium mb-6">After</h3>
            <ul className="space-y-3 text-muted text-sm">
              {after.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-waten-accent mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
