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

import CountUpStat from './CountUpStat';

export default function TrustElements() {
  return (
    <section className="py-28 lg:py-36 bg-waten-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Company Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {metrics.map((m, i) => (
            <CountUpStat key={i} value={m.value} label={m.label} className="text-center" />
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal font-semibold text-center mb-16 max-w-2xl mx-auto leading-tight">
            What Our Partners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="p-10 bg-waten-bg border border-waten-stone rounded-lg">
                <p className="text-stone-600 text-lg leading-body mb-8 max-w-xl">&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <p className="font-medium text-charcoal">{t.author}</p>
                  <p className="text-stone-600 text-sm">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Project image */}
        <div className="pt-16 border-t border-stone-200">
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
            <p className="p-3 text-center text-stone-600 text-sm font-medium">Plaza Dan — Makkah, Awali District</p>
          </a>
        </div>
      </div>
    </section>
  );
}
