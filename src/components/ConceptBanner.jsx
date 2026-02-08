import { useState } from 'react';

// Set to null to hide the banner (e.g. if Waten adopts the site).
const SHOW_BANNER = true;

export default function ConceptBanner() {
  const [hidden, setHidden] = useState(false);

  if (!SHOW_BANNER || hidden) return null;

  return (
    <div
      className="relative z-[100] bg-waten-accent text-white text-center py-2 px-4 text-sm"
      role="banner"
    >
      <span>
        This is a <strong>concept redesign</strong> — not the official Waten site. Built to show how a refreshed structure could support your brand.
      </span>
      <button
        type="button"
        onClick={() => setHidden(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded"
        aria-label="Dismiss banner"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
