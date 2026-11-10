import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { formatDay } from "@/lib/shop";
import { isType } from "@/lib/tarifs";

export const SLOTS = ["matin", "midi", "apres-midi", "fin"] as const;
export type Slot = (typeof SLOTS)[number];
export const isSlot = (v: unknown): v is Slot => (SLOTS as readonly unknown[]).includes(v);

export type Booking = {
  type: string;
  date: string;
  slot: Slot | "";
  people: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const emptyBooking = (): Booking => ({ type: "", date: "", slot: "", people: "", name: "", phone: "", email: "", message: "" });

export const isPhone = (v: string) => /^[+\d][\d\s\-().]{7,19}$/.test(v.trim());
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Nettoie une demande reçue côté serveur ; null si l'essentiel manque. */
export function parseBooking(v: unknown): Booking | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  const q: Booking = {
    type: isType(o.type) ? o.type : "",
    date: ISO.test(str(o.date, 10)) ? str(o.date, 10) : "",
    slot: isSlot(o.slot) ? o.slot : "",
    people: /^\d{1,2}$/.test(str(o.people, 2)) ? str(o.people, 2) : "",
    name: str(o.name, 120),
    phone: str(o.phone, 30),
    email: str(o.email, 160),
    message: str(o.message, 1500),
  };
  if (!q.type || !q.name || !isPhone(q.phone)) return null;
  if (q.email && !isEmail(q.email)) q.email = "";
  return q;
}

/** Récapitulatif lisible (e-mail au studio, confirmation au client), dans une langue donnée. */
export function bookingMessage(q: Booking, lang: Locale, d: Dict, opts: { title?: boolean } = {}) {
  const m = d.booking.message;
  const f = d.booking.fields;
  const c = lang === "fr" ? " :" : ":";
  const line = (label: string, value: string) => (value ? `${label}${c} ${value}` : "");
  const blocks = [
    opts.title === false ? [] : [`*${m.title}*`],
    [line(m.type, f.types[q.type as keyof typeof f.types] ?? q.type), line(m.date, q.date ? formatDay(q.date, lang) : ""), line(m.slot, q.slot ? f.slotList[q.slot] : ""), line(m.people, q.people)],
    [line(m.name, q.name), line(m.phone, q.phone), line(m.email, q.email), line(m.message, q.message)],
  ];
  return blocks
    .map((x) => x.filter(Boolean).join("\n"))
    .filter(Boolean)
    .join("\n\n");
}
