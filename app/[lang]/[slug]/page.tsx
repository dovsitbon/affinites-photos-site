import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import { getDict, isLocale, locales, type Dict, type Locale } from "@/lib/i18n";
import type { SlotId } from "@/lib/media";
import { href, PAGES, pageOf, type PageId } from "@/lib/routes";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { ogLocale } from "@/lib/locales";
import { BookCta, Faq, Frame, PhoneLink, Rating } from "@/components/Blocks";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";
import { OpenStatus } from "@/components/OpenStatus";
import { ApertureMark } from "@/components/Logo";
import { PinIcon } from "@/components/icons";

export const dynamicParams = false;

const WRAP = "mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-10";

export function generateStaticParams() {
  return locales.flatMap((lang) => Object.values(PAGES).map((s) => ({ lang, slug: s[lang] })));
}

function metaOf(id: PageId, d: Dict) {
  if (id === "legal") return { title: d.legal.metaTitle, description: d.meta.description };
  if (id === "rdv") return { title: `${d.booking.title} | ${site.name}`, description: d.booking.lead };
  const p = d.pages[id];
  return { title: p.metaTitle, description: p.metaDescription };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const id = pageOf(lang, slug);
  if (!id) return {};
  const d = getDict(lang);
  const m = metaOf(id, d);
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: href(lang, id),
      languages: { ...Object.fromEntries(locales.map((l) => [l, href(l, id)])), "x-default": href("fr", id) },
    },
    openGraph: { type: "website", url: href(lang, id), siteName: site.name, title: m.title, description: m.description, locale: ogLocale[lang], images: [{ url: "/og.jpg", width: 1200, height: 630, alt: d.meta.ogAlt }] },
    robots: id === "legal" ? { index: false, follow: true } : undefined,
  };
}

function PageHero({ eyebrow, title, intro, slot, tone, d, children }: { eyebrow: string; title: string; intro: string; slot: SlotId; tone: "pearl" | "rose"; d: Dict; children?: React.ReactNode }) {
  return (
    <section className={`${WRAP} grid items-center gap-10 pt-10 pb-16 md:grid-cols-[1.1fr_1fr] lg:gap-20 lg:pt-16 lg:pb-24`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-4 text-[clamp(2.7rem,6vw,4.8rem)]">{title}</h1>
        <p className="lead mt-6 max-w-xl">{intro}</p>
        {children && <div className="mt-9">{children}</div>}
      </div>
      <Frame slot={slot} d={d} tone={tone} priority sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/3] md:aspect-[4/5]" />
    </section>
  );
}

function ThreeCols({ items }: { items: { title: string; text: string }[] }) {
  return (
    <section className="border-y border-line bg-pearl-soft">
      <div className={`${WRAP} grid gap-12 py-16 md:grid-cols-3 lg:py-24`}>
        {items.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <span className="rule" aria-hidden="true" />
            <h2 className="display mt-5 text-[1.9rem]">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Steps({ title, steps }: { title: string; steps: { title: string; text: string }[] }) {
  return (
    <section className={`${WRAP} py-16 lg:py-24`}>
      <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{title}</h2>
      <ol className="mt-10 grid gap-10 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 0.08} className="border-t border-ink/80 pt-5">
            <span className="display text-[2.6rem] leading-none text-red-ink">{i + 1}</span>
            <h3 className="mt-3 text-[1.0625rem] font-normal">{s.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Identite({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.pages.identite;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} slot="page-identite" tone="pearl" d={d}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={href(lang, "home", "infos")} className="btn-solid">
            <PinIcon /> {p.cta}
          </Link>
          <PhoneLink className="inline-flex items-center gap-2 text-[1.0625rem]" />
        </div>
        <div className="mt-6 flex flex-col gap-2 text-[0.875rem] text-muted sm:flex-row sm:gap-x-6">
          <Rating lang={lang} d={d} className="hover:text-ink" />
          <OpenStatus />
        </div>
      </PageHero>
      <ThreeCols items={p.sections} />
      <section className={`${WRAP} grid gap-10 py-16 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:py-24`}>
        <div>
          <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{p.rulesTitle}</h2>
          <p className="lead mt-4">{p.rulesLead}</p>
        </div>
        <dl className="divide-y divide-line border-y border-line">
          {p.rules.map((r) => (
            <div key={r.k} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="eyebrow pt-1">{r.k}</dt>
              <dd className="text-[1.0625rem]">{r.v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <div className="border-t border-line">
        <Steps title={p.howTitle} steps={p.how} />
      </div>
      <section className="bg-pearl-soft">
        <div className={`${WRAP} py-16 lg:py-24`}>
          <h2 className="display text-[clamp(2rem,4vw,2.8rem)]">{p.tips}</h2>
          <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {d.tips.items.map((it, i) => (
              <li key={it.title} className="bg-paper p-7">
                <span className="display text-[2.2rem] leading-none text-red-ink">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-[1.0625rem] font-normal">{it.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-muted">
            {p.related}{" "}
            <Link href={href(lang, "home", "tarifs")} className="link-line text-ink">
              {d.prices.title.toLowerCase()}
            </Link>
            .
          </p>
        </div>
      </section>
      <Faq d={d} />
    </>
  );
}

function Bebe({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.pages.bebe;
  const slots: SlotId[] = ["bebe-1", "bebe-2", "bebe-3"];
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} slot="page-bebe" tone="rose" d={d}>
        <BookCta lang={lang} d={d} label={p.cta} query="?t=bebe" />
        <Rating lang={lang} d={d} className="mt-6 text-[0.875rem] text-muted hover:text-ink" />
      </PageHero>
      <ThreeCols items={p.sections} />
      <Steps title={p.process.title} steps={p.process.steps} />
      <section className={`${WRAP} pb-20 lg:pb-28`}>
        <h2 className="display text-[clamp(1.9rem,3.6vw,2.6rem)]">{p.gallery}</h2>
        <p className="mt-3 text-[0.9375rem] text-muted">{p.consent}</p>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5">
          {slots.map((slot, i) => (
            <Reveal key={slot} delay={i * 0.07} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <Frame slot={slot} d={d} tone={i === 1 ? "pearl" : "rose"} sizes="(min-width:768px) 31vw, 50vw" className={i === 0 ? "aspect-[3/2] md:aspect-[4/5]" : "aspect-[4/5]"} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-rose-soft">
        <div className={`${WRAP} flex flex-col items-center py-20 text-center`}>
          <ApertureMark className="size-10 text-ink/60" strokeWidth={0.5} />
          <p className="display mt-6 max-w-2xl text-[clamp(2rem,4vw,3rem)]">{p.closing}</p>
          <Link href={`${href(lang, "rdv")}?t=bebe`} className="btn-solid mt-10">
            {p.cta}
          </Link>
        </div>
      </section>
      <Faq d={d} />
    </>
  );
}

function Rdv({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.booking;
  return (
    <section className={`${WRAP} grid gap-12 pt-10 pb-20 lg:grid-cols-[1fr_20rem] lg:gap-16 lg:pt-16 lg:pb-28`}>
      <div className="max-w-3xl">
        <p className="eyebrow">{b.eyebrow}</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,6vw,4.2rem)]">{b.title}</h1>
        <p className="lead mt-5 max-w-2xl">{b.lead}</p>
        <div className="mt-12">
          <BookingForm />
        </div>
      </div>
      <aside className="h-fit space-y-6 lg:sticky lg:top-32">
        <div className="bg-pearl-soft p-6">
          <p className="display text-[1.6rem]">{b.preferCall}</p>
          <a href={`tel:${site.tel}`} className="btn-solid mt-5 w-full">
            {d.nav.call} · {site.phone}
          </a>
          <div className="mt-4 text-[0.875rem] text-muted">
            <OpenStatus />
          </div>
        </div>
        <div className="space-y-2 px-1 text-[0.875rem] text-muted">
          <Rating lang={lang} d={d} className="hover:text-ink" />
          <p>
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
          <p className="whitespace-pre-line">{d.footer.days}</p>
          <p className="pt-2">{b.walkIn}</p>
        </div>
      </aside>
    </section>
  );
}

function Legal({ d }: { d: Dict }) {
  const l = d.legal;
  const rows: [string, string][] = [
    [l.editor, `${l.editorText}${site.legal.siret ? ` SIRET : ${site.legal.siret}.` : ""}`],
    [l.host, site.legal.host],
    [l.data, l.dataText],
    [l.photos, l.photosText],
  ];
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
      <h1 className="display text-[clamp(2.4rem,5vw,3.6rem)]">{l.title}</h1>
      {!site.legal.siret && <p className="mt-4 text-[0.875rem] text-muted">{l.pending}</p>}
      <dl className="mt-10 space-y-8">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt className="eyebrow">{k}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const id = pageOf(lang, slug);
  if (!id) notFound();
  const d = getDict(lang);
  const m = metaOf(id, d);
  const crumbs = breadcrumbJsonLd(lang, m.title.split(" | ")[0], href(lang, id));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {id === "rdv" && <Rdv lang={lang} d={d} />}
      {id === "identite" && <Identite lang={lang} d={d} />}
      {id === "bebe" && <Bebe lang={lang} d={d} />}
      {id === "legal" && <Legal d={d} />}
    </>
  );
}
