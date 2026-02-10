import { useLanguage } from '../context/LanguageContext';

const HEADER_IMAGE = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0/4e1d8267-0f13-4b45-9482-502af28bef07/header.jpg';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HEADER_IMAGE}')` }}
      />
      {/* Dark gradient overlay using brand dark colour (waten-accent) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(58, 51, 42, 0.5) 0%, rgba(58, 51, 42, 0.75) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <div className="max-w-4xl mx-auto w-full">
        <div className="animate-hero-fade-in">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-tight mb-8">
            {t('hero.headline')}
            <br />
            <span className="text-white">{t('hero.elevated')}</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl mx-auto mb-8 font-medium">
            {t('hero.subline')}
          </p>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-12">
            {t('hero.intro')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="btn-primary text-lg px-10 py-5"
            >
              {t('hero.explore')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl text-lg font-medium border-2 border-white text-white hover:bg-white hover:text-waten-accent transition-colors duration-300"
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
