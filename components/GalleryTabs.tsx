"use client";

import { useId, useState, type ReactNode } from "react";

/** Galerie par type de séance : des onglets, un panneau visible à la fois (les panneaux sont rendus côté serveur). */
export function GalleryTabs({ label, tabs }: { label: string; tabs: { id: string; label: string; panel: ReactNode }[] }) {
  const uid = useId();
  const [active, setActive] = useState(tabs[0].id);

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const i = tabs.findIndex((t) => t.id === active);
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const t = tabs[(next + tabs.length) % tabs.length];
    setActive(t.id);
    document.getElementById(`${uid}-tab-${t.id}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label={label} onKeyDown={onKey} className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t.id} id={`${uid}-tab-${t.id}`} type="button" role="tab" aria-selected={active === t.id} aria-controls={`${uid}-panel-${t.id}`} tabIndex={active === t.id ? 0 : -1} onClick={() => setActive(t.id)} className="chip">
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.id} id={`${uid}-panel-${t.id}`} role="tabpanel" aria-labelledby={`${uid}-tab-${t.id}`} hidden={active !== t.id} className="fade-in mt-8">
          {t.panel}
        </div>
      ))}
    </div>
  );
}
