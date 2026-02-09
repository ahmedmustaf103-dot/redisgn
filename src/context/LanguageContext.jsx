import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: () => '' });

const translations = {
  en: {
    nav: { home: 'Home', portfolio: 'Portfolio', about: 'About us', whyWaten: 'Why Waten', team: 'The Team', contact: 'Contact', faq: 'FAQ' },
    hero: { headline: 'Urban Spaces,', elevated: 'Elevated.', subline: 'Premium Saudi Residential & Commercial Developments', intro: 'Waten Real Estate delivers thoughtfully designed properties across the Kingdom — with transparency, quality, and innovation at the core.', explore: 'Explore Projects', cta: 'Contact Us for Investment Opportunities' },
    footer: { ready: 'Ready to elevate your space?', sub: 'Get in touch to discuss your next project or learn more about our developments.', contactUs: 'Contact us', quickLinks: 'Quick Links', followUs: 'Follow Us' },
    contact: { title: 'Get in Touch', intro: 'Reach out for inquiries about our projects or to discuss your next development.', office: 'Office', email: 'Email', firstName: 'First name', lastName: 'Last name', message: 'Message', send: 'Send message', thanks: 'Thank you.', received: "We've received your message and will be in touch shortly." },
    faq: { title: 'FAQ' },
  },
  ar: {
    nav: { home: 'الرئيسية', portfolio: 'المشاريع', about: 'من نحن', whyWaten: 'لماذا واتن', team: 'الفريق', contact: 'تواصل', faq: 'الأسئلة الشائعة', redesign: 'نظرة عامة على التصميم' },
    hero: { headline: 'المساحات الحضرية،', elevated: 'مُرْتَفَعَة.', subline: 'مشاريع سكنية وتجارية راقية في المملكة', intro: 'واتن العقارية تقدم عقارات مصممة بعناية عبر المملكة — بالشفافية والجودة والابتكار في صميم عملنا.', explore: 'استكشف المشاريع', cta: 'تواصل معنا لفرص الاستثمار' },
    footer: { ready: 'هل أنت مستعد لرفع مساحتك؟', sub: 'تواصل معنا لمناقشة مشروعك القادم أو التعرف على تطويراتنا.', contactUs: 'تواصل معنا', quickLinks: 'روابط سريعة', followUs: 'تابعنا' },
    contact: { title: 'تواصل معنا', intro: 'تواصل معنا للاستفسار عن مشاريعنا أو لمناقشة تطويرك القادم.', office: 'المكتب', email: 'البريد الإلكتروني', firstName: 'الاسم الأول', lastName: 'اسم العائلة', message: 'الرسالة', send: 'إرسال الرسالة', thanks: 'شكراً لك.', received: 'تم استلام رسالتك وسنتواصل معك قريباً.' },
    faq: { title: 'الأسئلة الشائعة' },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage === 'undefined') return 'en';
    return localStorage.getItem('waten-lang') || 'en';
  });

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem('waten-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  function t(path) {
    const keys = path.split('.');
    let obj = translations[lang];
    for (const k of keys) {
      obj = obj?.[k];
    }
    return obj ?? path;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
