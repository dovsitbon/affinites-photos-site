"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useLocale } from "@/components/providers";
import { ArrowIcon } from "@/components/icons";
import { SLOTS } from "@/lib/booking";
import { TYPES } from "@/lib/tarifs";
import { formatDay, nextOpenDays } from "@/lib/shop";
import { href } from "@/lib/routes";

/**
 * Barre de réservation sous le hero : type de séance, date, créneau.
 * Elle ne réserve rien : elle ouvre le formulaire, prérempli (?t=bebe&j=2026-11-12&c=matin).
 */
export function BookingBar({ className = "" }: { className?: string }) {
  const { lang, d } = useLocale();
  const router = useRouter();
  const id = useId();
  const [type, setType] = useState("");
  const [day, setDay] = useState("");
  const [slot, setSlot] = useState("");
  const [days, setDays] = useState<{ iso: string; day: number }[]>([]);

  // Jours calculés dans le navigateur : la page est statique, la date du jour ne l'est pas.
  // eslint-disable-next-line react-hooks/set-state-in-effect -- date du jour, connue seulement côté client
  useEffect(() => setDays(nextOpenDays(24)), []);

  const b = d.bar;
  const f = d.booking.fields;
  const cell = "flex flex-col bg-paper px-5 pt-3 pb-2";
  const select = "-mx-1 min-h-10 cursor-pointer bg-paper px-1 text-[1rem] text-ink outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink";
  return (
    <form
      aria-label={b.label}
      onSubmit={(e) => {
        e.preventDefault();
        const q = new URLSearchParams();
        if (type) q.set("t", type);
        if (day) q.set("j", day);
        if (slot) q.set("c", slot);
        const s = q.toString();
        router.push(`${href(lang, "rdv")}${s ? `?${s}` : ""}`);
      }}
      className={`grid gap-px border border-line bg-line shadow-[0_18px_40px_-28px_rgba(34,34,34,0.35)] sm:grid-cols-3 lg:grid-cols-[1.2fr_1fr_1fr_auto] ${className}`}
    >
      <label htmlFor={`${id}-t`} className={cell}>
        <span className="eyebrow !text-[0.625rem] !text-muted">{b.type}</span>
        <select id={`${id}-t`} value={type} onChange={(e) => setType(e.target.value)} className={select}>
          <option value="">{b.typeAny}</option>
          {TYPES.filter((t) => t !== "autre").map((t) => (
            <option key={t} value={t}>
              {f.types[t as keyof typeof f.types]}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor={`${id}-d`} className={cell}>
        <span className="eyebrow !text-[0.625rem] !text-muted">{b.day}</span>
        <select id={`${id}-d`} value={day} onChange={(e) => setDay(e.target.value)} className={select}>
          <option value="">{b.dayAny}</option>
          {days.map((x) => (
            <option key={x.iso} value={x.iso}>
              {formatDay(x.iso, lang, true)}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor={`${id}-c`} className={cell}>
        <span className="eyebrow !text-[0.625rem] !text-muted">{b.slot}</span>
        <select id={`${id}-c`} value={slot} onChange={(e) => setSlot(e.target.value)} className={select}>
          <option value="">{b.slotAny}</option>
          {SLOTS.map((s) => (
            <option key={s} value={s}>
              {f.slotList[s]}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn-solid !min-h-16 gap-3 !px-8 sm:col-span-3 lg:col-span-1">
        {b.submit} <ArrowIcon />
      </button>
    </form>
  );
}
