// Icônes au trait fin, dessinées pour le site (1,25 px, bouts arrondis).
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const PhoneIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h3.2l1.6 4-2 1.3a10 10 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.8 1.8 0 0 1-1.9 1.8C10.4 20.3 3.7 13.6 3.2 5.9A1.8 1.8 0 0 1 5 4Z" />
  </svg>
);
export const ArrowIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={`${className} rtl:-scale-x-100`} {...base}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
);
export const CloseIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const PinIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const StarIcon = ({ className = "size-3.5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="m12 3.2 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z" />
  </svg>
);

// Les 4 pictos de la bande de services (trait 1 px, grille 32).
const big = { ...base, strokeWidth: 1 };
/** Photo d'identité : un portrait cadré, avec ses repères. */
export const IdIcon = ({ className = "size-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...big}>
    <rect x="7" y="4" width="18" height="24" />
    <circle cx="16" cy="13" r="3.6" />
    <path d="M10.5 24c.6-3.4 2.7-5.2 5.5-5.2s4.9 1.8 5.5 5.2M3 9h2M3 23h2M27 9h2M27 23h2" />
  </svg>
);
/** Avec ou sans rendez-vous : une porte entrouverte et un calendrier fondus en un agenda simple. */
export const CalendarIcon = ({ className = "size-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...big}>
    <rect x="5" y="7" width="22" height="20" />
    <path d="M5 12.5h22M11 4v5M21 4v5M11.5 20l3 3 6-6.5" />
  </svg>
);
/** Tirages : deux photos superposées. */
export const PrintIcon = ({ className = "size-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...big}>
    <rect x="9" y="5" width="18" height="15" transform="rotate(6 18 12.5)" />
    <rect x="5" y="11" width="18" height="16" />
    <path d="m5 23 5.5-5 4 3.5 3-2.5 5.5 4.5" />
    <circle cx="17.5" cy="15.5" r="1.3" />
  </svg>
);
/** Téléphone, version large. */
export const CallIcon = ({ className = "size-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...big}>
    <path d="M7 5h4.4l2.2 5.6-2.8 1.8a14 14 0 0 0 8.8 8.8l1.8-2.8 5.6 2.2V25a2.4 2.4 0 0 1-2.6 2.4C14 26.700 5.300 18 4.600 7.600A2.400 2.400 0 0 1 7 5Z" />
  </svg>
);
