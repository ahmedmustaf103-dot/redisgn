import { useState } from 'react';

const WATEN_EMAIL = 'Hello@waten.com';
const WATEN_ADDRESS = 'Office 22 9 Sercon Building, Musa Ibn Nusair St., Olaya, Riyadh';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="uppercase tracking-[0.2em] text-waten-muted text-sm font-medium mb-4">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-medium leading-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-muted text-lg mb-8">
              Reach out for inquiries about our projects or to discuss your next development.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-charcoal mb-1">Office</p>
                <p className="text-muted">{WATEN_ADDRESS}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-charcoal mb-1">Email</p>
                <a href={`mailto:${WATEN_EMAIL}`} className="text-waten-accent hover:underline">
                  {WATEN_EMAIL}
                </a>
              </div>
            </div>
          </div>
          <div>
            {submitted ? (
              <div className="p-8 bg-waten-card border border-waten-stone text-center">
                <p className="font-serif text-xl text-charcoal mb-2">Thank you.</p>
                <p className="text-muted">
                  We've received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-waten-bg border border-stone-300 focus:border-waten-ink focus:ring-1 focus:ring-waten-ink outline-none transition-colors resize-none"
                    placeholder="Your message or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-waten-accent text-white font-medium hover:bg-waten-ink transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
