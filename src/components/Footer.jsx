const WATEN_EMAIL = 'Hello@waten.com';
const WATEN_ADDRESS = 'Office 22 9 Sercon Building, Musa Ibn Nusair St., Olaya, Riyadh';
const LOGO_URL = 'https://images.squarespace-cdn.com/content/v1/679a478f72e1ff7f9f77d1f0/33f121b8-3f79-4c4e-b9e1-9c7f16954dd4/Waten---Logo-.png?format=1500w';

export default function Footer() {
  return (
    <>
      {/* CTA strip – improvement: clear next step for visitors */}
      <section className="py-16 bg-waten-green text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Ready to elevate your space?
          </h2>
          <p className="text-waten-light/90 mb-8 max-w-xl mx-auto">
            Get in touch to discuss your next project or learn more about our developments.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-waten-dark font-medium hover:bg-waten-light transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>
      <footer className="py-12 bg-waten-dark text-stone-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <img
                src={LOGO_URL}
                alt="Waten Real Estate"
                className="h-8 w-auto object-contain opacity-90"
              />
              <div className="text-sm">
                <p>{WATEN_ADDRESS}</p>
                <a href={`mailto:${WATEN_EMAIL}`} className="text-waten-light/90 hover:text-white transition-colors">
                  {WATEN_EMAIL}
                </a>
              </div>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Waten Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
