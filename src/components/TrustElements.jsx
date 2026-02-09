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

const CDN = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0';
const TRUST_IMAGE = `${CDN}/1738250935690-J3HFE52N7OIVNMBPSH7B/Artboard+1+copy+12.jpg`;

export default function TrustElements() {
  return (
    <section className="py-24 lg:py-32 bg-waten-card">
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
              <blockquote key={i} className="p-8 bg-waten-bg border border-waten-stone rounded-lg">
                <p className="text-charcoal text-lg leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <p className="font-medium text-charcoal">{t.author}</p>
                  <p className="text-muted text-sm">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Project image */}
        <div className="pt-12 border-t border-stone-200">
          <a
            href="#/project/plaza-dan"
            className="block rounded-xl overflow-hidden border border-waten-stone/80 hover:border-waten-accent/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-waten-accent focus-visible:ring-offset-2"
          >
            <div className="aspect-[21/9] max-h-64 overflow-hidden bg-waten-stone">
              <img
                src={TRUST_IMAGE}
                alt="Plaza Dan — Makkah"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="p-3 text-center text-muted text-sm font-medium">Plaza Dan — Makkah, Awali District</p>
          </a>
        </div>
      </div>
    </section>
  );
}
