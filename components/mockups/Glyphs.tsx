/** Decorative illustrations for the three product cards. */

export function ParcelGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <defs>
        <linearGradient id="pg-top" x1="0" x2="1">
          <stop offset="0" stopColor="#f2c79a" />
          <stop offset="1" stopColor="#e9b27c" />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="335" rx="130" ry="18" fill="#17252b" opacity="0.12" />
      {/* box */}
      <path d="M200 110 320 165 200 220 80 165Z" fill="url(#pg-top)" />
      <path d="M80 165 200 220v110L80 275Z" fill="#d79a5f" />
      <path d="M320 165 200 220v110l120-55Z" fill="#c3864d" />
      {/* tape */}
      <path d="M140 137 260 192v18L140 155Z" fill="#fff4e9" opacity="0.85" />
      <path d="M200 220v110" stroke="#b37540" strokeWidth="2" />
      {/* label */}
      <path d="M232 250l60-27v34l-60 27Z" fill="#fff" />
      <path d="M244 258l36-16M244 268l24-11" stroke="#17252b" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      {/* arrow */}
      <g transform="translate(270 60)">
        <circle r="34" fill="#f56b22" />
        <path d="M-12 12 12-12M-6-12h18v18" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

export function RouteGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <path d="M40 330C120 330 110 220 200 220S300 90 360 70" fill="none" stroke="#faf8f4" strokeOpacity="0.14" strokeWidth="46" strokeLinecap="round" />
      <path d="M40 330C120 330 110 220 200 220S300 90 360 70" fill="none" stroke="#faf8f4" strokeOpacity="0.55" strokeWidth="2.5" strokeDasharray="4 12" strokeLinecap="round" />
      <g transform="translate(40 330)">
        <circle r="14" fill="#faf8f4" />
        <circle r="6" fill="#17252b" />
      </g>
      <g transform="translate(360 70)">
        <circle r="22" fill="#f56b22" opacity="0.25" />
        <circle r="12" fill="#f56b22" />
      </g>
      {/* parcel riding the route */}
      <g transform="translate(200 220) rotate(-18)">
        <rect x="-26" y="-22" width="52" height="44" rx="6" fill="#ff9c4d" />
        <path d="M-26-4h52" stroke="#17252b" strokeOpacity="0.25" strokeWidth="3" />
        <path d="M0-22v18" stroke="#fff4e9" strokeWidth="6" />
      </g>
      <text x="62" y="372" fill="#faf8f4" fillOpacity="0.6" fontFamily="monospace" fontSize="14" letterSpacing="2">LEKKI</text>
      <text x="290" y="42" fill="#faf8f4" fillOpacity="0.6" fontFamily="monospace" fontSize="14" letterSpacing="2">IKEJA</text>
    </svg>
  );
}

export function GrowGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <rect x="50" y="70" width="220" height="64" rx="22" fill="#ffffff" fillOpacity="0.16" />
      <rect x="72" y="94" width="120" height="8" rx="4" fill="#fff" fillOpacity="0.7" />
      <rect x="72" y="110" width="80" height="8" rx="4" fill="#fff" fillOpacity="0.4" />
      <rect x="130" y="158" width="220" height="64" rx="22" fill="#ffffff" />
      <rect x="152" y="182" width="140" height="8" rx="4" fill="#3e4095" fillOpacity="0.8" />
      <rect x="152" y="198" width="96" height="8" rx="4" fill="#3e4095" fillOpacity="0.35" />
      {/* order card */}
      <rect x="70" y="246" width="250" height="100" rx="24" fill="#2c2e72" />
      <rect x="94" y="270" width="90" height="8" rx="4" fill="#fff" fillOpacity="0.5" />
      <rect x="94" y="290" width="140" height="12" rx="6" fill="#fff" />
      <rect x="236" y="300" width="64" height="30" rx="15" fill="#f56b22" />
      <path d="M257 315l6 6 12-12" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* sparkle */}
      <path d="M330 60l8 22 22 8-22 8-8 22-8-22-22-8 22-8Z" fill="#ff9c4d" />
    </svg>
  );
}
