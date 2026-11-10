"use client";

import { useEffect, useState } from "react";
import { APERTURE_LONG } from "@/components/Logo";

const KEY = "affinites-intro";

/**
 * Ouverture (1,2 s, une fois par session), tout en CSS (globals.css) :
 * fond blanc, un diaphragme au trait noir se ferme puis s'ouvre, un léger flash blanc,
 * « AFFINITÉS PHOTOS » apparaît, puis fondu sur le hero.
 * Ignorée si l'utilisateur préfère réduire les animations (script en tête du layout).
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  const finish = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
    document.documentElement.classList.add("intro-seen");
  };

  useEffect(() => {
    const t = setTimeout(finish, 1200);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center text-ink">
      <div className="relative grid place-items-center">
        <svg viewBox="-11 -11 22 22" className="size-24" fill="none" stroke="currentColor" strokeWidth="0.32" strokeLinecap="round" aria-hidden="true">
          <defs>
            <clipPath id="intro-iris">
              <circle r="10" />
            </clipPath>
          </defs>
          <circle r="10" />
          <g clipPath="url(#intro-iris)">
            <path className="intro-blades" d={APERTURE_LONG} vectorEffect="non-scaling-stroke" strokeWidth="1.2" />
          </g>
        </svg>
        <span className="intro-flash" aria-hidden="true" />
        <p className="intro-name absolute font-[family-name:var(--font-cormorant)] text-[1.9rem] leading-none font-light tracking-[0.3em] whitespace-nowrap ps-[0.3em] sm:text-[2.3rem]" translate="no" aria-hidden="true">
          AFFINITÉS PHOTOS
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          finish();
          setGone(true);
        }}
        className="nav-link absolute end-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
