const HEADER_IMAGE = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0/4e1d8267-0f13-4b45-9482-502af28bef07/header.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HEADER_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-waten-bg/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-waten-ink">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4">
          Urban Spaces,
          <br />
          <span className="text-waten-ink">Elevated.</span>
        </h1>
        <p className="text-xl md:text-2xl text-waten-muted max-w-2xl mx-auto mb-6 font-medium">
          Premium Saudi Residential & Commercial Developments
        </p>
        <p className="text-waten-muted text-base max-w-xl mx-auto mb-10">
          Waten Real Estate delivers thoughtfully designed properties across the Kingdom — with transparency, quality, and innovation at the core.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-waten-accent text-white font-medium hover:bg-waten-ink transition-colors"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-waten-accent text-waten-accent font-medium hover:bg-waten-accent hover:text-white transition-colors"
          >
            Contact Us for Investment Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
