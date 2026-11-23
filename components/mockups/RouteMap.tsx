import clsx from "clsx";

/**
 * Stylised (not geographic) Lagos map. The orange route draws itself in
 * (CSS stroke transition) when a [data-reveal] ancestor scrolls into view.
 */
export function RouteMap({
  id,
  from,
  to,
  variant = "send",
  className,
}: {
  id: string;
  from: string;
  to: string;
  variant?: "send" | "go";
  className?: string;
}) {
  // A "U" around the phone (which covers the middle of the map), so the
  // route stays visible on both sides and dips behind the device.
  const d =
    variant === "send"
      ? "M78 96 C 40 250, 70 420, 110 540 S 300 650, 460 575 S 560 300, 522 96"
      : "M522 96 C 560 300, 520 470, 470 560 S 300 650, 130 580 S 40 300, 78 96";
  const start = variant === "send" ? [78, 96] : [522, 96];
  const end = variant === "send" ? [522, 96] : [78, 96];

  return (
    <svg viewBox="0 0 600 640" className={clsx("h-auto w-full", className)} aria-hidden>
      <defs>
        <pattern id={`${id}-grid`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0v40" fill="none" stroke="#17252b" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
        <clipPath id={`${id}-clip`}>
          <rect width="600" height="640" rx="40" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="600" height="640" fill="#f1ece1" />
        <rect width="600" height="640" fill={`url(#${id}-grid)`} />
        {/* Lagoon & coast */}
        <path d="M0 470 C 120 430, 210 520, 330 480 S 520 420, 600 450 V640 H0Z" fill="#d9e2df" />
        <path d="M0 560 C 150 540, 300 600, 600 560 V640 H0Z" fill="#c7d4d1" />
        {/* Arterial roads */}
        <g fill="none" stroke="#fff" strokeLinecap="round">
          <path d="M60 0 C 90 160, 40 300, 120 440" strokeWidth="14" />
          <path d="M0 210 C 200 190, 380 240, 600 200" strokeWidth="12" />
          <path d="M330 0 C 300 160, 380 300, 330 470" strokeWidth="12" />
          <path d="M600 330 C 480 340, 400 300, 250 330 S 80 360, 0 340" strokeWidth="10" />
        </g>
        {/* Districts */}
        <g fontFamily="var(--font-jetbrains), monospace" fontSize="11" letterSpacing="2" fill="#17252b" fillOpacity="0.35">
          <text x="380" y="90">OGBA</text>
          <text x="420" y="270">MARYLAND</text>
          <text x="40" y="290">GBAGADA</text>
          <text x="200" y="420">SURULERE</text>
          <text x="420" y="610">LEKKI</text>
          <text x="60" y="610">APAPA</text>
        </g>
        {/* Route */}
        <path d={d} fill="none" stroke="#17252b" strokeOpacity="0.12" strokeWidth="18" strokeLinecap="round" />
        <path data-draw pathLength={1} d={d} fill="none" stroke="#f56b22" strokeWidth="5" strokeLinecap="round" />
        {/* Pins */}
        <g transform={`translate(${start[0]} ${start[1]})`}>
          <circle r="20" fill="#17252b" fillOpacity="0.1" />
          <circle r="9" fill="#17252b" />
        </g>
        <g transform={`translate(${end[0]} ${end[1]})`}>
          <circle r="26" fill="#f56b22" fillOpacity="0.2" />
          <circle r="15" fill="#fff" stroke="#f56b22" strokeWidth="4" />
          <rect x="-6" y="-5" width="12" height="10" rx="2" fill="#f56b22" />
        </g>
      </g>
      {/* Labels sit on the open side of each pin so they never crop */}
      <g fontFamily="var(--font-inter), sans-serif" fontSize="15" fontWeight="600">
        <Label x={start[0]} y={start[1]} text={from} fill="#17252b" color="#faf8f4" />
        <Label x={end[0]} y={end[1]} text={to} fill="#f56b22" color="#fff" />
      </g>
    </svg>
  );
}

function Label({ x, y, text, fill, color }: { x: number; y: number; text: string; fill: string; color: string }) {
  const w = text.length * 9 + 16;
  const lx = Math.min(Math.max(x - w / 2, 10), 590 - w);
  const ly = y - 40;
  return (
    <g transform={`translate(${lx} ${ly})`}>
      <rect y="-17" width={w} height="28" rx="14" fill={fill} />
      <text x="8" y="2" fill={color}>
        {text}
      </text>
    </g>
  );
}
