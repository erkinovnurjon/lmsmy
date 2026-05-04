/**
 * Vertical decorative pattern for the Hero background.
 * Hand-crafted circuit-board / data-flow motif.
 */
export default function HeroDecor() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-full w-[480px] opacity-[0.22] sm:w-[560px] lg:w-[680px]"
      viewBox="0 0 680 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0" />
          <stop offset="15%" stopColor="#16a34a" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
          <stop offset="85%" stopColor="#16a34a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nw" x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="20%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0.7" />
          <stop offset="80%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Main vertical trunk lines ── */}
      <path d="M340,0 V900" stroke="url(#nw)" strokeWidth="0.6" />
      <path d="M440,0 V900" stroke="url(#nw)" strokeWidth="0.4" />
      <path d="M240,0 V900" stroke="url(#nw)" strokeWidth="0.4" />
      <path d="M540,0 V900" stroke="url(#nw)" strokeWidth="0.3" strokeDasharray="8 16" />
      <path d="M140,0 V900" stroke="url(#nw)" strokeWidth="0.3" strokeDasharray="8 16" />

      {/* ── Horizontal cross-bars ── */}
      {[90, 200, 310, 420, 530, 640, 750, 850].map((y) => (
        <path
          key={`h-${y}`}
          d={`M80,${y} H600`}
          stroke="url(#nw)"
          strokeWidth="0.35"
          strokeDasharray="3 9"
        />
      ))}

      {/* ── Branch paths flowing from trunk ── */}
      {/* Left branches */}
      <path d="M340,120 L240,160 L240,240 L140,280" stroke="url(#ng)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M340,310 L200,350 L200,430" stroke="url(#ng)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M340,530 L180,580 L180,660 L100,700" stroke="url(#ng)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M340,700 L240,730 L240,800" stroke="url(#ng)" strokeWidth="0.6" strokeLinecap="round" />

      {/* Right branches */}
      <path d="M340,160 L440,200 L440,290 L540,330" stroke="url(#ng)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M340,420 L480,460 L480,540" stroke="url(#ng)" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M340,600 L500,640 L500,720 L580,760" stroke="url(#ng)" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M340,800 L440,830" stroke="url(#ng)" strokeWidth="0.6" strokeLinecap="round" />

      {/* ── Diagonal connectors ── */}
      <path d="M240,240 L340,310" stroke="url(#ng)" strokeWidth="0.5" strokeDasharray="4 6" />
      <path d="M440,290 L340,420" stroke="url(#ng)" strokeWidth="0.5" strokeDasharray="4 6" />
      <path d="M200,430 L340,530" stroke="url(#ng)" strokeWidth="0.5" strokeDasharray="4 6" />
      <path d="M480,540 L340,600" stroke="url(#ng)" strokeWidth="0.5" strokeDasharray="4 6" />

      {/* ── Junction nodes — large ── */}
      {[
        [340, 120], [340, 310], [340, 420], [340, 530], [340, 600], [340, 700], [340, 800],
      ].map(([cx, cy]) => (
        <g key={`n-${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="10" fill="#16a34a" opacity="0.06" />
          <circle cx={cx} cy={cy} r="4" fill="none" stroke="url(#ng)" strokeWidth="0.8" />
          <circle cx={cx} cy={cy} r="1.8" fill="#16a34a" opacity="0.7" />
        </g>
      ))}

      {/* ── Branch end nodes ── */}
      {[
        [140, 280], [200, 430], [180, 660], [100, 700], [240, 800],
        [540, 330], [480, 540], [500, 720], [580, 760], [440, 830],
        [240, 160], [440, 200],
      ].map(([cx, cy]) => (
        <g key={`e-${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="7" fill="#16a34a" opacity="0.04" />
          <circle cx={cx} cy={cy} r="3" fill="none" stroke="url(#ng)" strokeWidth="0.6" />
          <circle cx={cx} cy={cy} r="1.2" fill="white" opacity="0.5" />
        </g>
      ))}

      {/* ── Corner bend nodes ── */}
      {[
        [240, 240], [440, 290], [480, 460], [500, 640],
        [180, 580], [240, 730],
      ].map(([cx, cy]) => (
        <g key={`b-${cx}-${cy}`}>
          <rect x={cx - 4} y={cy - 4} width="8" height="8" rx="2" fill="none" stroke="url(#ng)" strokeWidth="0.6" />
          <circle cx={cx} cy={cy} r="1.5" fill="#22d3ee" opacity="0.5" />
        </g>
      ))}

      {/* ── Tiny decorative chips (rectangles) on trunk ── */}
      {[170, 260, 370, 470, 560, 660, 760].map((y) => (
        <rect
          key={`chip-${y}`}
          x="334"
          y={y}
          width="12"
          height="6"
          rx="1.5"
          fill="none"
          stroke="url(#ng)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}

      {/* ── Data dots flowing along trunk ── */}
      {[100, 190, 350, 480, 620, 720, 840].map((y, i) => (
        <circle
          key={`d-${y}`}
          cx="340"
          cy={y}
          r={i % 2 === 0 ? 1 : 0.8}
          fill="white"
          opacity="0.3"
        />
      ))}

      {/* ── Small satellite dots scattered ── */}
      {[
        [300, 140], [380, 180], [280, 340], [400, 380],
        [160, 400], [520, 460], [220, 560], [460, 580],
        [120, 640], [560, 680], [280, 750], [420, 770],
        [380, 850], [300, 880],
      ].map(([cx, cy], i) => (
        <circle
          key={`s-${i}`}
          cx={cx}
          cy={cy}
          r="1"
          fill="white"
          opacity={0.15 + (i % 3) * 0.1}
        />
      ))}
    </svg>
  );
}
