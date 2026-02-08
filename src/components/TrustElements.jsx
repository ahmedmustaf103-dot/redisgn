const metrics = [
  { value: '15+', label: 'Years in Saudi Arabia' },
  { value: '12+', label: 'Projects Completed' },
  { value: '3', label: 'Major Cities' },
  { value: '100%', label: 'Client Focused' },
];

const testimonials = [
  {
    quote: 'Waten delivered exactly what they promised — on time, with full transparency throughout.',
    author: 'Partner, Riyadh',
    role: 'Commercial Development',
  },
  {
    quote: 'Their attention to quality and innovation sets them apart in the Kingdom.',
    author: 'Client, Makkah',
    role: 'Residential Project',
  },
];

const partners = [
  // Placeholder — replace with real partner logo URLs
  { name: 'Partner 1', logo: null },
  { name: 'Partner 2', logo: null },
  { name: 'Partner 3', logo: null },
];

export default function TrustElements() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Company Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-waten-ink font-medium mb-1">{m.value}</p>
              <p className="text-muted text-sm md:text-base">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-medium text-center mb-12">
            What Our Partners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="p-8 bg-white border border-stone-200/80 rounded-lg">
                <p className="text-charcoal text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <p className="font-medium text-charcoal">{t.author}</p>
                  <p className="text-muted text-sm">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Partner Logos (placeholder — add real logos when available) */}
        <div className="pt-12 border-t border-stone-200">
          <p className="text-center text-muted text-sm mb-8">Trusted by leading partners across the Kingdom</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {partners.map((p, i) => (
              <div key={i} className="w-24 h-12 flex items-center justify-center bg-stone-200/80 rounded text-muted text-xs">
                {p.logo ? <img src={p.logo} alt={p.name} className="max-h-8 w-auto" /> : p.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
