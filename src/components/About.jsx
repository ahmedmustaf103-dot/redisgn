export default function About() {
  const features = [
    {
      title: 'Excellence & Sustainability',
      description: 'We are committed to delivering high-quality developments that stand the test of time and respect the environment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Commercial & Residential',
      description: 'From mixed-use commercial spaces to premium residential projects, we focus on both to enrich Saudi cities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Transparency & Innovation',
      description: 'Guided by clear principles, we build a reputation for projects that enrich the architectural scene across the Kingdom.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-waten-accent text-sm font-medium mb-4">
              About us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-6">
              Enhancing Urban
              <br />
              Landscapes
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              With a commitment to excellence and sustainability, we focus on delivering both{' '}
              <strong className="text-charcoal">commercial</strong> and <strong className="text-charcoal">residential</strong> developments.
            </p>
            <p className="text-muted leading-relaxed">
              Guided by principles of transparency, quality, and innovation, we are building a reputation for delivering projects that enrich the architectural scene in the major cities of The Kingdom.
            </p>
          </div>
          <div className="grid gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex gap-6 p-8 bg-white border border-stone-200/80 hover:border-waten-accent/40 transition-colors group"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-waten-light text-waten-green group-hover:bg-waten-accent group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
