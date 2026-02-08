import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const WATEN_EMAIL = 'Hello@waten.com';
const WATEN_ADDRESS = 'Office 22 9 Sercon Building, Musa Ibn Nusair St., Olaya, Riyadh';
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { t } = useLanguage();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      setSubmitted(true);
      return;
    }
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
      else setSubmitting(false);
    } catch {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-waten-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="uppercase tracking-[0.2em] text-waten-muted text-sm font-medium mb-4">
              {t('nav.contact')}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-muted text-lg mb-8">
              {t('contact.intro')}
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-charcoal mb-1">{t('contact.office')}</p>
                <p className="text-muted">{WATEN_ADDRESS}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal mb-1">{t('contact.email')}</p>
                <a href={`mailto:${WATEN_EMAIL}`} className="text-waten-accent hover:underline">
                  {WATEN_EMAIL}
                </a>
              </div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="p-8 bg-waten-bg border border-waten-stone text-center">
                <p className="font-serif text-xl text-charcoal mb-2">{t('contact.thanks')}</p>
                <p className="text-muted">
                  {t('contact.received')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      {t('contact.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none transition-colors"
                      placeholder={t('contact.firstName')}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      {t('contact.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none transition-colors"
                      placeholder={t('contact.lastName')}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-accent focus:ring-1 focus:ring-waten-accent outline-none transition-colors resize-none"
                    placeholder={t('contact.message')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-10 py-4 bg-waten-accent text-white font-medium hover:bg-waten-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending…' : t('contact.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
