/**
 * Logo typographique d'Affinités Photos, en attendant le fichier d'origine (ou une photo nette de l'enseigne) :
 * un petit diaphragme au trait, « AFFINITÉS » en capitales fines, « PHOTOS · AMIENS » en petit.
 * Prend la couleur du texte (currentColor). Pour le remplacer : changer ce composant et public/logo.svg.
 */
// Diaphragme à 6 lames dans un cercle de rayon 10 (tracé calculé une fois, voir README).
export const APERTURE = "M0 -4.4L9.91 1.32M3.81 -2.2L3.81 9.25M3.81 2.2L-6.1 7.92M0 4.4L-9.91 -1.32M-3.81 2.2L-3.81 -9.25M-3.81 -2.2L6.1 -7.92";
// Mêmes lames, prolongées très loin : l'intro les resserre (scale) sans qu'elles quittent le cercle.
export const APERTURE_LONG = "M0 -4.4L348.3 196.69M3.81 -2.2L3.81 399.98M3.81 2.2L-344.49 203.29M0 4.4L-348.3 -196.69M-3.81 2.2L-3.81 -399.98M-3.81 -2.2L344.49 -203.29";

export function ApertureMark({ className = "size-6", strokeWidth = 0.9 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="-11 -11 22 22" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" aria-hidden="true">
      <circle r="10" />
      <path d={APERTURE} />
    </svg>
  );
}

export function Logo({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 304 64" className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <g transform="translate(26 32) scale(2.1)" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round">
        <circle r="10" />
        <path d={APERTURE} />
      </g>
      <text x="64" y="37" fill="currentColor" style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 31, letterSpacing: "0.26em" }}>
        AFFINITÉS
      </text>
      <text x="65.5" y="56" fill="currentColor" style={{ fontFamily: "var(--font-jost), Jost, 'Helvetica Neue', Arial, sans-serif", fontWeight: 400, fontSize: 9.5, letterSpacing: "0.42em" }}>
        PHOTOS · AMIENS
      </text>
    </svg>
  );
}
