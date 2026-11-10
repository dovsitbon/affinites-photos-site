import Image from "next/image";
import Link from "next/link";
import site from "@/data/site.json";
import { fill, type Dict, type Locale } from "@/lib/i18n";
import { slotImg, type SlotId } from "@/lib/media";
import { hourLabel, upcomingClosures, weekRows } from "@/lib/shop";
import { href } from "@/lib/routes";
import { intlLocale } from "@/lib/locales";
import { Reveal } from "@/components/Reveal";
import { OpenStatus } from "@/components/OpenStatus";
import { ApertureMark } from "@/components/Logo";
import { PhoneIcon, PinIcon, StarIcon } from "@/components/icons";

const TONES = { pearl: "bg-pearl", soft: "bg-pearl-soft", rose: "bg-rose-soft" } as const;

/**
 * Cadre photo. Si l'emplacement est rempli (data/photos.json), affiche la vraie photo ;
 * sinon un cadre « viseur » : aplat doux, repères d'angle, diaphragme au trait et légende de la photo attendue.
 * Le conteneur fixe le format (aspect-*), le cadre le remplit.
 */
export function Frame({ slot, d, sizes, className = "", tone = "pearl", priority = false, big = false }: { slot: SlotId; d: Dict; sizes: string; className?: string; tone?: keyof typeof TONES; priority?: boolean; big?: boolean }) {
  const i = slotImg(slot);
  const label = d.slots[slot];
  if (i) {
    return (
      <div className={`shine ${TONES[tone]} ${className}`}>
        <Image src={i.src} width={i.width} height={i.height} alt={label} sizes={sizes} priority={priority} quality={80} className="size-full object-cover" />
      </div>
    );
  }
  return (
    <div role="img" aria-label={`${d.frame.soon} : ${label}`} className={`shine ${TONES[tone]} ${className}`}>
      <span className="viewfinder" aria-hidden="true" />
      <span className="absolute inset-0 grid place-items-center text-ink/45" aria-hidden="true">
        <ApertureMark className={`frame-mark ${big ? "size-28 lg:size-40" : "size-12"}`} strokeWidth={big ? 0.22 : 0.5} />
      </span>
      {/* Dans le hero, la légende passe en haut : la barre de réservation recouvre le bas du cadre */}
      <span className={`absolute inset-x-0 px-[clamp(1.25rem,7%,2.5rem)] text-[0.6875rem] leading-snug tracking-[0.04em] text-muted ${big ? "top-0 pt-[clamp(1.25rem,7%,2.5rem)] lg:px-14 lg:pt-14" : "bottom-0 pb-[clamp(1.25rem,7%,2.5rem)]"}`} aria-hidden="true">
        <span className="block text-[0.625rem] tracking-[0.22em] text-ink/70 uppercase">{d.frame.soon}</span>
        {label}
      </span>
    </div>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false, id }: { eyebrow: string; title: string; lead?: string; center?: boolean; id?: string }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="display mt-4 text-[clamp(2.2rem,5vw,3.5rem)]">
        {title}
      </h2>
      {lead && <p className="lead mt-5">{lead}</p>}
    </Reveal>
  );
}

/** Note Google (4,7/5, 180 avis), avec la date du relevé. */
export function Rating({ lang, d, className = "" }: { lang: Locale; d: Dict; className?: string }) {
  const r = site.rating;
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(r.value);
  const date = new Intl.DateTimeFormat(intlLocale[lang], { month: "long", year: "numeric" }).format(new Date(r.asOf));
  return (
    <a href={site.maps} target="_blank" rel="noopener" className={`inline-flex items-center gap-2 ${className}`} title={fill(d.rating.asOf, { date })}>
      <span className="flex text-gold" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span>
        {fill(d.rating.label, { value })} · {fill(d.rating.count, { count: r.count })}
      </span>
    </a>
  );
}

export function PhoneLink({ className = "", label }: { className?: string; label?: string }) {
  return (
    <a href={`tel:${site.tel}`} className={className}>
      <PhoneIcon /> {label ?? site.phone}
    </a>
  );
}

/** Horaires de la semaine (data/horaires.json) et fermetures à venir. */
export function HoursTable({ lang, d }: { lang: Locale; d: Dict }) {
  const rows = weekRows();
  const today = new Date().toISOString().slice(0, 10);
  const closures = upcomingClosures(today);
  return (
    <div>
      <table className="w-full text-[0.9375rem]">
        <tbody>
          {rows.map((r) => (
            <tr key={r.day} className="border-b border-line/70 last:border-0">
              <th scope="row" className="py-2 text-start font-light first-letter:uppercase">
                {d.days[r.day]}
              </th>
              <td className={`py-2 text-end tabular-nums ${r.ranges ? "" : "text-muted"}`}>{r.ranges ? r.ranges.map(([a, b]) => `${hourLabel(a, lang)} – ${hourLabel(b, lang)}`).join(", ") : d.infos.closedDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {closures.length > 0 && (
        <p className="mt-4 text-[0.875rem] text-muted">
          {d.infos.closures}
          {lang === "fr" ? " : " : ": "}
          {closures
            .map((c) => {
              const f = new Intl.DateTimeFormat(intlLocale[lang], { day: "numeric", month: "long", timeZone: "UTC" });
              const from = f.format(new Date(c.from));
              return `${c.label[lang]} (${c.from === c.to ? from : `${from} – ${f.format(new Date(c.to))}`})`;
            })
            .join(", ")}
        </p>
      )}
    </div>
  );
}

/** Infos pratiques : adresse, carte, horaires, accès, téléphone. */
export function InfosBlock({ lang, d }: { lang: Locale; d: Dict }) {
  const i = d.infos;
  return (
    <section id="infos" aria-labelledby="infos-title" className="border-t border-line">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-28">
        <div>
          <SectionHead eyebrow={i.eyebrow} title={i.title} id="infos-title" />
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">{i.address}</dt>
              <dd className="mt-3 leading-relaxed">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
                <br />
                <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-2 inline-flex items-center gap-1.5 text-[0.9375rem]">
                  <PinIcon /> {i.route}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{i.phone}</dt>
              <dd className="mt-3">
                <PhoneLink className="display inline-flex items-center gap-2 text-[1.7rem]" />
                <div className="mt-2 text-[0.875rem] text-muted">
                  <OpenStatus />
                </div>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">{i.hours}</dt>
              <dd className="mt-3">
                <HoursTable lang={lang} d={d} />
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">{i.access}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{i.accessText}</dd>
            </div>
          </dl>
        </div>
        <Reveal className="min-h-[22rem] overflow-hidden bg-pearl lg:min-h-0">
          <iframe title={i.mapTitle} src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full min-h-[22rem] border-0 grayscale-[0.6]" />
        </Reveal>
      </div>
    </section>
  );
}

export function Faq({ d, className = "" }: { d: Dict; className?: string }) {
  return (
    <section aria-labelledby="faq-title" className={`mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${className}`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHead eyebrow={d.faq.eyebrow} title={d.faq.title} id="faq-title" />
        <div className="divide-y divide-line border-y border-line">
          {d.faq.items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.0625rem] font-normal [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="display text-[1.6rem] leading-none text-red-ink transition-transform duration-500 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Appel à l'action « Réserver une séance / Appeler ». */
export function BookCta({ lang, d, label, query = "" }: { lang: Locale; d: Dict; label?: string; query?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <Link href={`${href(lang, "rdv")}${query}`} className="btn-solid">
        {label ?? d.nav.book}
      </Link>
      <PhoneLink className="inline-flex items-center gap-2 text-[1.0625rem]" />
    </div>
  );
}
