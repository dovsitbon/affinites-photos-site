"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import site from "@/data/site.json";
import { useLocale } from "@/components/providers";
import { PhoneIcon } from "@/components/icons";
import { emptyBooking, isEmail, isPhone, isSlot, SLOTS, type Booking } from "@/lib/booking";
import { isType, TYPES } from "@/lib/tarifs";
import { parisNow } from "@/lib/shop";

type Errors = Partial<Record<"type" | "name" | "phone" | "email" | "generic", string>>;
type Done = { notified: boolean; confirmed: boolean };

function Fieldset({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-8">
      <legend className="display float-left w-full text-[1.9rem]">{legend}</legend>
      <div className="clear-left space-y-7 pt-6">{children}</div>
    </fieldset>
  );
}

function Chip({ name, checked, onChange, children }: { name: string; checked: boolean; onChange: () => void; children: ReactNode }) {
  return (
    <label className="chip">
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      {children}
    </label>
  );
}

/**
 * Demande de séance : type, date et créneau souhaités, nombre de personnes, nom, téléphone, e-mail, message.
 * Envoi à /api/booking (e-mail au studio + confirmation au client via Resend). Le studio rappelle pour confirmer.
 */
export function BookingForm() {
  const { lang, d } = useLocale();
  const uid = useId();
  const reduce = useReducedMotion();
  const f = d.booking.fields;
  const [q, setQ] = useState<Booking>(emptyBooking);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<Done | null>(null);
  const [minDate, setMinDate] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  // Préremplissage depuis la barre de réservation ou un lien (?t=bebe&j=2026-11-12&c=matin)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("t");
    const j = params.get("j");
    const c = params.get("c");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- paramètres d'URL, lisibles seulement côté client
    setMinDate(parisNow().iso);
    setQ((v) => ({
      ...v,
      type: isType(t) ? t : v.type,
      date: j && /^\d{4}-\d{2}-\d{2}$/.test(j) ? j : v.date,
      slot: isSlot(c) ? c : v.slot,
    }));
  }, []);

  const set = <K extends keyof Booking>(k: K, v: Booking[K]) => setQ((x) => ({ ...x, [k]: v }));
  const err = d.booking.errors;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!q.type) next.type = err.type;
    if (!q.name.trim()) next.name = err.name;
    if (!isPhone(q.phone)) next.phone = err.phone;
    if (q.email && !isEmail(q.email)) next.email = err.email;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      const box = document.querySelector<HTMLElement>(`[data-err="${first}"]`);
      box?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      box?.querySelector<HTMLElement>("input")?.focus({ preventScroll: true });
      return;
    }
    setSending(true);
    try {
      const r = await fetch("/api/booking", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ lang, data: q }) });
      const json = (await r.json()) as { ok: boolean } & Done;
      if (!r.ok || !json.ok) throw new Error();
      setDone({ notified: json.notified, confirmed: json.confirmed });
      topRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } catch {
      setErrors({ generic: err.generic });
    } finally {
      setSending(false);
    }
  }

  const fade = reduce ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const } };
  const s = d.booking.success;
  const errText = "mt-2 text-[0.875rem] text-[#a3402c]";

  return (
    <div ref={topRef} className="scroll-mt-32">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div key="done" {...fade} role="status" className="border border-line bg-pearl-soft p-8 sm:p-10">
            <p className="display text-[clamp(2rem,4vw,2.6rem)]">{s.title}</p>
            <p className="lead mt-4">{s.text}</p>
            {done.confirmed && <p className="mt-3 text-muted">{s.email}</p>}
            {!done.notified && (
              <div className="mt-6 border-t border-line pt-6">
                <p>{s.notNotified}</p>
                <a href={`tel:${site.tel}`} className="btn-solid mt-4">
                  <PhoneIcon /> {site.phone}
                </a>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setDone(null);
                setQ(emptyBooking());
              }}
              className="link-line mt-8 inline-block text-[0.9375rem]"
            >
              {s.again}
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" {...fade} onSubmit={submit} noValidate className="space-y-12">
            <Fieldset legend={d.booking.sections.type}>
              <div data-err="type" role="radiogroup" aria-label={f.type}>
                <p className="label">{f.type}</p>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map((t) => (
                    <Chip key={t} name="type" checked={q.type === t} onChange={() => set("type", t)}>
                      {f.types[t as keyof typeof f.types]}
                    </Chip>
                  ))}
                </div>
                {q.type === "identite" && <p className="mt-3 max-w-xl text-[0.9375rem] text-muted">{d.booking.walkIn}</p>}
                {errors.type && (
                  <p role="alert" className={errText}>
                    {errors.type}
                  </p>
                )}
              </div>
              <div className="max-w-[12rem]">
                <label htmlFor={`${uid}-pp`} className="label">
                  {f.people}
                </label>
                <input id={`${uid}-pp`} name="people" type="number" inputMode="numeric" min={1} max={30} value={q.people} onChange={(e) => set("people", e.target.value.replace(/\D/g, "").slice(0, 2))} className="field" />
              </div>
            </Fieldset>

            <Fieldset legend={d.booking.sections.when}>
              <div className="max-w-xs">
                <label htmlFor={`${uid}-date`} className="label">
                  {f.date} <span className="text-muted">{f.dateHint}</span>
                </label>
                <input id={`${uid}-date`} name="date" type="date" min={minDate} value={q.date} onChange={(e) => set("date", e.target.value)} className="field" />
              </div>
              <div role="radiogroup" aria-label={f.slot}>
                <p className="label">{f.slot}</p>
                <div className="flex flex-wrap gap-2">
                  {SLOTS.map((sl) => (
                    <Chip key={sl} name="slot" checked={q.slot === sl} onChange={() => set("slot", sl)}>
                      {f.slotList[sl]}
                    </Chip>
                  ))}
                </div>
              </div>
            </Fieldset>

            <Fieldset legend={d.booking.sections.contact}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div data-err="name">
                  <label htmlFor={`${uid}-n`} className="label">
                    {f.name}
                  </label>
                  <input id={`${uid}-n`} name="name" autoComplete="name" value={q.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${uid}-n-e` : undefined} className="field" />
                  {errors.name && (
                    <p id={`${uid}-n-e`} className={errText}>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div data-err="phone">
                  <label htmlFor={`${uid}-p`} className="label">
                    {f.phone}
                  </label>
                  <input id={`${uid}-p`} name="phone" type="tel" autoComplete="tel" inputMode="tel" value={q.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${uid}-p-e` : undefined} className="field" />
                  {errors.phone && (
                    <p id={`${uid}-p-e`} className={errText}>
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div data-err="email" className="sm:col-span-2">
                  <label htmlFor={`${uid}-e`} className="label">
                    {f.email} <span className="text-muted">{f.emailHint}</span>
                  </label>
                  <input id={`${uid}-e`} name="email" type="email" autoComplete="email" spellCheck={false} value={q.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${uid}-e-e` : undefined} className="field" />
                  {errors.email && (
                    <p id={`${uid}-e-e`} className={errText}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor={`${uid}-m`} className="label">
                  {f.message}
                </label>
                <textarea id={`${uid}-m`} name="message" rows={4} value={q.message} onChange={(e) => set("message", e.target.value)} placeholder={f.messagePh} className="field resize-y" />
              </div>
            </Fieldset>

            <div className="border-t border-line pt-8">
              {errors.generic && (
                <p role="alert" className="mb-4 text-[#a3402c]">
                  {errors.generic}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <button type="submit" disabled={sending} className="btn-solid min-w-56 disabled:opacity-60">
                  {sending ? d.booking.sending : d.booking.submit}
                </button>
                <a href={`tel:${site.tel}`} className="btn-line text-ink">
                  <PhoneIcon /> {d.nav.call}
                </a>
              </div>
              <p className="mt-4 max-w-xl text-[0.8125rem] text-muted">{d.booking.privacy}</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
