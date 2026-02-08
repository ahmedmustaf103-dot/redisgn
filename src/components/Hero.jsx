const HEADER_IMAGE = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0/4e1d8267-0f13-4b45-9482-502af28bef07/header.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HEADER_IMAGE}')` }}
      />
      <div className="absolute inset-0 bg-waten-dark/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6">
          Urban Spaces,
          <br />
          <span className="text-waten-light">Elevated.</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10">
          <strong className="text-white">Waten Real Estate</strong> is a real estate development company based in{' '}
          <strong className="text-white">Saudi Arabia</strong>, dedicated to enhancing urban landscapes with high-quality, thoughtfully designed properties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-waten-accent text-white font-medium hover:bg-waten-green transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-waten-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
