// components.jsx — visual primitives shared across sections.

const { useState, useEffect, useRef, useMemo } = React;

// ─── Editorial placeholder image ──────────────────────────────────────────────
// Soft-toned warm gradient with diagonal stripes + a tiny mono caption. Used in
// place of real café photos so the layout is honest about what's missing.
function EditorialPlaceholder({ label, hue = 24, sat = 28, dark = false, aspect = "4 / 5", caption, style = {} }) {
  const bg1 = `oklch(${dark ? 0.32 : 0.78} ${sat / 100 * 0.06} ${hue})`;
  const bg2 = `oklch(${dark ? 0.22 : 0.88} ${sat / 100 * 0.04} ${hue + 10})`;
  const stripe = `oklch(${dark ? 0.38 : 0.72} ${sat / 100 * 0.05} ${hue}) `;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: aspect,
        background: `linear-gradient(135deg, ${bg1}, ${bg2})`,
        overflow: "hidden",
        ...style,
      }}
    >
      {/* fine diagonal stripes */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `repeating-linear-gradient(135deg, ${stripe} 0 1px, transparent 1px 14px)`,
        opacity: 0.55,
        mixBlendMode: dark ? "screen" : "multiply",
      }} />
      {/* grain */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "radial-gradient(rgba(0,0,0,.18) 1px, transparent 1.2px)",
        backgroundSize: "3px 3px",
        opacity: 0.07,
      }} />
      {/* corner caption */}
      {caption !== false && (
        <div style={{
          position: "absolute", left: 12, bottom: 10,
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,.75)" : "rgba(40,28,20,.55)",
        }}>
          {caption || `IMG · ${label || "photo"}`}
        </div>
      )}
      {/* center label */}
      {label && caption !== false && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "Fraunces, ui-serif, Georgia, serif",
          fontWeight: 400, fontStyle: "italic",
          fontSize: "clamp(18px, 3vw, 28px)",
          color: dark ? "rgba(255,255,255,.55)" : "rgba(40,28,20,.32)",
          letterSpacing: "-.01em",
          textAlign: "center", padding: 16,
        }}>
          {label}
        </div>
      )}
    </div>
  );
}

// ─── Tag pill ─────────────────────────────────────────────────────────────────
function Tag({ children, accent }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      fontSize: 11, fontWeight: 500, letterSpacing: ".01em",
      padding: "3px 9px",
      borderRadius: 999,
      border: "0.5px solid var(--line)",
      background: "var(--surface-2)",
      color: "var(--ink-2)",
    }}>
      <span style={{
        width: 5, height: 5, borderRadius: 999,
        background: accent || "var(--accent)",
      }} />
      {children}
    </span>
  );
}

// ─── Star rating ──────────────────────────────────────────────────────────────
function Stars({ value = 0, size = 14, gap = 1.5 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const fill = i < full ? "full" : (i === full && half ? "half" : "empty");
    stars.push(
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" style={{ display: "block" }}>
        <defs>
          <linearGradient id={`star-${i}-${fill}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M12 2.5l2.9 6.1 6.6.7-4.9 4.6 1.4 6.6L12 17.3l-6 3.2 1.4-6.6L2.5 9.3l6.6-.7L12 2.5z"
          fill={fill === "full" ? "currentColor" : fill === "half" ? `url(#star-${i}-${fill})` : "none"}
          stroke="currentColor"
          strokeWidth={fill === "empty" ? 1.4 : 0}
        />
      </svg>
    );
  }
  return <span style={{ display: "inline-flex", gap, color: "var(--accent)" }}>{stars}</span>;
}

// ─── Logomark ─────────────────────────────────────────────────────────────────
function Logo({ dark, size = 44 }) {
  return (
    <a href="#" onClick={(e)=>e.preventDefault()} aria-label="Cash Café" style={{
      display: "inline-flex", alignItems: "center", textDecoration: "none",
    }}>
      <span className="brand-mark" style={{ width: size, height: size }}>
        <img src="assets/cash-cafe-logo.png" alt="Cash Café" width={size} height={size}/>
      </span>
    </a>
  );
}

// ─── Inline icons (no external lib) ───────────────────────────────────────────
const Icon = {
  search: (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>,
  pin:    (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>,
  arrow:  (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  bookmark:(p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h12v17l-6-4-6 4z"/></svg>,
  phone:  (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"/></svg>,
  clock:  (p) => <svg viewBox="0 0 24 24" width={p.s||16} height={p.s||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  play:   (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="currentColor"><path d="M7 5l12 7-12 7z"/></svg>,
  pause:  (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>,
  next:   (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="currentColor"><path d="M5 5l11 7-11 7z"/><rect x="17" y="5" width="2" height="14"/></svg>,
  prev:   (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="currentColor"><path d="M19 5L8 12l11 7z"/><rect x="5" y="5" width="2" height="14"/></svg>,
  close:  (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  ext:    (p) => <svg viewBox="0 0 24 24" width={p.s||12} height={p.s||12} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M19 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h5"/></svg>,
  globe:  (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>,
  speaker:(p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 010 6"/></svg>,
  share:  (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>,
  heart:  (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 5.6a5.4 5.4 0 0 0-7.6 0L12 6.7l-1.2-1.1a5.4 5.4 0 1 0-7.6 7.6l1.2 1.1L12 22l7.6-7.6 1.2-1.1a5.4 5.4 0 0 0 0-7.7z"/></svg>,
  book:   (p) => <svg viewBox="0 0 24 24" width={p.s||14} height={p.s||14} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h12a3 3 0 013 3v13H7a3 3 0 01-3-3V4z"/><path d="M4 17h15"/></svg>,
};

Object.assign(window, { EditorialPlaceholder, Tag, Stars, Logo, Icon });
