import { Resend } from "resend";
import site from "@/data/site.json";
import { bookingMessage, parseBooking } from "@/lib/booking";
import { fill, getDict, isLocale, type Locale } from "@/lib/i18n";

// Demande de séance → e-mails via Resend :
//  1. notification au studio, toujours en français (suivie de la version anglaise si le client a écrit en anglais) ;
//  2. confirmation au client, dans sa langue, s'il a donné son e-mail.
// Variables (Vercel → Settings → Environment Variables) :
//   RESEND_API_KEY        clé Resend
//   BOOKING_NOTIFY_EMAIL  adresse du studio qui reçoit les demandes
//   RESEND_FROM           expéditeur sur un domaine vérifié, ex. « Affinités Photos <reservation@affinites-photos.fr> »
// Sans domaine vérifié, Resend n'envoie qu'à l'adresse du compte (la confirmation client est alors ignorée).
// Tant que ces variables manquent, la réponse indique notified: false et le site invite le client à appeler.

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const html = (text: string) =>
  `<div style="background:#F6F5F3;padding:32px 24px"><div style="max-width:560px;margin:0 auto;background:#FFFFFF;padding:32px 28px;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#222222;white-space:pre-wrap"><div style="font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:#7A6130;margin-bottom:6px">Affinités Photos</div><div style="width:40px;height:1px;background:#C2A26A;margin-bottom:22px"></div>${escapeHtml(text).replace(/\*(.+?)\*/g, '<strong style="font-size:19px;font-weight:normal">$1</strong>')}</div></div>`;

export async function POST(req: Request) {
  let body: { lang?: unknown; data?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }
  const lang: Locale = typeof body.lang === "string" && isLocale(body.lang) ? body.lang : "fr";
  const q = parseBooking(body.data);
  if (!q) return Response.json({ ok: false }, { status: 400 });

  const fr = getDict("fr");
  const d = getDict(lang);
  const frText = bookingMessage(q, "fr", fr);
  const clientText = bookingMessage(q, lang, d, { title: false });
  const type = fr.booking.fields.types[q.type as keyof typeof fr.booking.fields.types] ?? q.type;
  const subject = `${fr.booking.email.subject} · ${type} · ${q.name}`;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_NOTIFY_EMAIL ?? site.email ?? undefined;
  if (!key || !to) return Response.json({ ok: true, notified: false, confirmed: false });

  const resend = new Resend(key);
  const from = process.env.RESEND_FROM ?? "Affinités Photos <onboarding@resend.dev>";
  const text = lang === "fr" ? frText : `${frText}\n\n— EN —\n\n${bookingMessage(q, lang, d)}`;

  let notified = false;
  let confirmed = false;
  try {
    const r = await resend.emails.send({ from, to, replyTo: q.email || undefined, subject, html: html(text), text });
    notified = !r.error;
  } catch {}

  if (q.email) {
    const e = d.booking.email;
    const msg = `${fill(e.confirmIntro, { name: q.name })}\n\n${clientText}\n\n${e.confirmOutro}`;
    try {
      const r = await resend.emails.send({ from, to: q.email, replyTo: to, subject: e.confirmSubject, html: html(msg), text: msg });
      confirmed = !r.error;
    } catch {}
  }
  return Response.json({ ok: true, notified, confirmed });
}
