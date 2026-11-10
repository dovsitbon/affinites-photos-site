import Link from "next/link";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import avis from "@/data/avis.json";
import { fill, getDict, isLocale, type Dict, type Locale } from "@/lib/i18n";
import { intlLocale, type L10n } from "@/lib/locales";
import type { SlotId } from "@/lib/media";
import { href, type PageId } from "@/lib/routes";
import { categories } from "@/lib/tarifs";
import { money } from "@/lib/shop";
import { faqJsonLd } from "@/lib/jsonld";
import { BookCta, Faq, Frame, InfosBlock, Rating, SectionHead } from "@/components/Blocks";
import { BookingBar } from "@/components/BookingBar";
import { GalleryTabs } from "@/components/GalleryTabs";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, CalendarIcon, CallIcon, IdIcon, PrintIcon } from "@/components/icons";

const WRAP = "mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-10";

type Tone = "pearl" | "soft" | "rose";
const TILES: { id: keyof Dict["tiles"]["items"]; slot: SlotId; tone: Tone; page: PageId | "home"; hash?: string }[] = [
  { id: "identite", slot: "tile-identite", tone: "pearl", page: "identite" },
  { id: "bebe", slot: "tile-bebe", tone: "rose", page: "bebe" },
  { id: "famille", slot: "tile-famille", tone: "soft", page: "home", hash: "seances" },
  { id: "portrait", slot: "tile-portrait", tone: "soft", page: "home", hash: "seances" },
  { id: "tirages", slot: "tile-tirages", tone: "pearl", page: "home", hash: "tirages" },
  { id: "services", slot: "tile-services", tone: "rose", page: "home", hash: "infos" },
];

const priceOf = (lang: Locale, d: Dict, price: number | null) => (price != null ? fill(d.prices.from, { price: money(price, lang) }) : null);

function Hero({ lang, d }: { lang: Locale; d: Dict }) {
  const h = d.hero;
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="grid items-center lg:min-h-[calc(100svh-14rem)] lg:grid-cols-[1fr_1.35fr]">
        <Frame slot="hero" d={d} big priority sizes="(min-width:1024px) 56vw, 100vw" className="order-1 aspect-[3/2] lg:order-2 lg:me-10 xl:me-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]" />
        <div className="order-2 flex flex-col justify-center px-5 pt-10 pb-12 sm:px-8 lg:order-1 lg:px-10 lg:py-14 xl:ps-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <p className="eyebrow rise">{h.eyebrow}</p>
          <h1 id="hero-title" className="display rise mt-5 max-w-[12ch] text-[clamp(3rem,6.6vw,5.8rem)] [animation-delay:0.08s]" dangerouslySetInnerHTML={{ __html: h.title }} />
          <p className="lead rise mt-6 max-w-md [animation-delay:0.16s]">{h.lead}</p>
          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:0.24s]">
            <Link href={href(lang, "rdv")} className="btn-solid">
              {h.book}
            </Link>
            <Link href={href(lang, "identite")} className="btn-line text-ink">
              {h.identite}
            </Link>
          </div>
          <div className="rise mt-7 flex flex-col gap-2 text-[0.875rem] text-muted [animation-delay:0.32s] sm:flex-row sm:flex-wrap sm:gap-x-6">
            <Rating lang={lang} d={d} className="hover:text-ink" />
            <OpenStatus />
          </div>
        </div>
      </div>
      <div className={WRAP}>
        <div className="relative z-10">
          <BookingBar />
        </div>
      </div>
    </section>
  );
}

function Tiles({ lang, d }: { lang: Locale; d: Dict }) {
  return (
    <section aria-labelledby="tiles-title" className={`${WRAP} pt-20 pb-16 lg:pt-28 lg:pb-20`}>
      <SectionHead eyebrow={d.tiles.eyebrow} title={d.tiles.title} id="tiles-title" />
      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-6 lg:gap-y-14">
        {TILES.map((t, i) => {
          const it = d.tiles.items[t.id];
          return (
            <Reveal as="li" key={t.id} delay={(i % 3) * 0.06}>
              <Link href={href(lang, t.page, t.hash)} className="group block">
                <Frame slot={t.slot} d={d} tone={t.tone} sizes="(min-width:768px) 31vw, 48vw" className="aspect-[4/5] md:aspect-[5/4]" />
                <h3 className="display mt-4 flex items-center justify-between gap-2 text-[1.5rem] lg:text-[1.75rem]">
                  {it.title}
                  <ArrowIcon className="size-4 shrink-0 text-red-ink transition-transform duration-500 group-hover:translate-x-1" />
                </h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Strip({ d }: { d: Dict }) {
  const icons = [IdIcon, CalendarIcon, PrintIcon, CallIcon];
  return (
    <section aria-labelledby="strip-title" className={WRAP}>
      <h2 id="strip-title" className="sr-only">
        {d.strip.title}
      </h2>
      <ul className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
        {d.strip.items.map((it, i) => {
          const Icon = icons[i];
          const call = i === 3;
          const body = (
            <>
              <Icon className="size-9 text-red-ink" />
              <p className="mt-4 text-[1.0625rem] font-normal">{it.title}</p>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
            </>
          );
          return (
            <li key={it.title} className="border-line px-1 py-8 not-last:border-b sm:px-6 sm:odd:border-e lg:border-b-0 lg:not-last:border-e lg:first:ps-0">
              {call ? (
                <a href={`tel:${site.tel}`} className="block">
                  {body}
                </a>
              ) : (
                body
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Prices({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.prices;
  const allEmpty = categories.every((c) => c.items.every((s) => s.price == null));
  return (
    <section id="tarifs" aria-labelledby="tarifs-title" className="mt-20 bg-pearl-soft lg:mt-28">
      <div className={`${WRAP} grid gap-12 py-20 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:py-28`}>
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} id="tarifs-title" />
          {allEmpty && <p className="mt-6 text-[0.875rem] text-muted">{p.note}</p>}
          <div className="mt-8">
            <BookCta lang={lang} d={d} />
          </div>
        </div>
        <div className="space-y-14">
          {categories.map((c) => (
            <Reveal key={c.id}>
              <table className="w-full border-collapse text-start">
                <caption className="border-b border-ink/80 pb-3 text-start">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="display text-[1.9rem]">{c.name[lang]}</span>
                    <Link href={`${href(lang, "rdv")}?t=${c.id}`} className="link-line shrink-0 text-[0.8125rem] text-red-ink">
                      {p.book}
                    </Link>
                  </span>
                </caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">{p.cols.service}</th>
                    <th scope="col">{p.cols.delay}</th>
                    <th scope="col">{p.cols.price}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {c.items.map((s) => {
                    const delay = (s.delay as L10n | null)?.[lang] ?? p.delayNone;
                    return (
                      <tr key={s.id} className="align-baseline">
                        <th scope="row" className="py-3.5 pe-4 text-start text-[1rem] font-light">
                          {s.name[lang]}
                          <span className="mt-0.5 block text-[0.8125rem] text-muted sm:hidden">{delay}</span>
                        </th>
                        <td className="hidden w-[13rem] py-3.5 pe-4 text-[0.8125rem] text-muted sm:table-cell">{delay}</td>
                        <td className="w-[1%] py-3.5 text-end text-[0.9375rem] whitespace-nowrap tabular-nums">{priceOf(lang, d, s.price) ?? <span className="text-muted">{p.onRequest}</span>}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare({ lang, d }: { lang: Locale; d: Dict }) {
  const c = d.compare;
  const rows = ["who", "when", "how"] as const;
  return (
    <section id="seances" aria-labelledby="seances-title" className={`${WRAP} py-20 lg:py-28`}>
      <SectionHead eyebrow={c.eyebrow} title={c.title} lead={c.lead} id="seances-title" />
      <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:grid-rows-[repeat(6,auto)] lg:gap-x-0 lg:gap-y-0">
        {c.offers.map((o, i) => {
          const cat = categories.find((x) => x.id === o.id);
          const prices = (cat?.items ?? []).map((s) => s.price).filter((n): n is number => n != null);
          const price = prices.length ? priceOf(lang, d, Math.min(...prices)) : null;
          return (
            <Reveal key={o.id} delay={i * 0.08} className="grid border-t border-ink/80 lg:row-span-6 lg:grid-rows-subgrid lg:border-s lg:border-t-0 lg:border-line lg:px-8 lg:first:border-s-0 lg:first:ps-0 lg:last:pe-0">
              <h3 className="display pt-5 text-[2rem] lg:pt-0 lg:text-[2.3rem]">{o.name}</h3>
              {rows.map((r) => (
                <div key={r} className="mt-5 border-t border-line pt-4">
                  <p className="eyebrow !text-muted">{c.rows[r]}</p>
                  <p className="mt-2 leading-relaxed">{o[r]}</p>
                </div>
              ))}
              <div className="mt-5 border-t border-line pt-4">
                <p className="eyebrow !text-muted">{c.rows.price}</p>
                <p className="display mt-2 text-[1.5rem]">{price ?? <span className="text-muted">{d.prices.onRequest}</span>}</p>
              </div>
              <div className="mt-6">
                <Link href={`${href(lang, "rdv")}?t=${o.id}`} className="btn-line w-full text-ink sm:w-auto">
                  {c.cta}
                </Link>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Gallery({ d }: { d: Dict }) {
  const g = d.gallery;
  const sets: { id: keyof typeof g.tabs; slots: SlotId[]; tone: Tone }[] = [
    { id: "bebe", slots: ["bebe-1", "bebe-2", "bebe-3"], tone: "rose" },
    { id: "famille", slots: ["famille-1", "famille-2", "famille-3"], tone: "pearl" },
    { id: "portrait", slots: ["portrait-1", "portrait-2", "portrait-3"], tone: "soft" },
    { id: "studio", slots: ["studio-1", "studio-2", "studio-3"], tone: "pearl" },
  ];
  return (
    <section id="galerie" aria-labelledby="galerie-title" className="border-t border-line">
      <div className={`${WRAP} py-20 lg:py-28`}>
        <SectionHead eyebrow={g.eyebrow} title={g.title} lead={g.lead} id="galerie-title" />
        <div className="mt-10">
          <GalleryTabs
            label={g.tablist}
            tabs={sets.map((s) => ({
              id: s.id,
              label: g.tabs[s.id],
              panel: (
                <div className="grid grid-cols-2 gap-3 md:h-[30rem] md:grid-cols-[1.3fr_1fr_1fr] lg:h-[34rem] lg:gap-5">
                  {s.slots.map((slot, i) => (
                    <Frame key={slot} slot={slot} d={d} tone={s.tone} sizes="(min-width:768px) 34vw, 50vw" className={i === 0 ? "col-span-2 aspect-[3/2] md:col-span-1 md:aspect-auto md:h-full" : "aspect-[4/5] md:aspect-auto md:h-full"} />
                  ))}
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}

function Blocks({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.blocks;
  const items: { key: keyof typeof b; slot: SlotId; tone: Tone; to: string; id?: string }[] = [
    { key: "identite", slot: "block-identite", tone: "pearl", to: href(lang, "home", "infos") },
    { key: "seances", slot: "block-seances", tone: "rose", to: href(lang, "rdv") },
    { key: "tirages", slot: "block-tirages", tone: "soft", to: href(lang, "home", "tarifs"), id: "tirages" },
  ];
  return (
    <div className={`${WRAP} space-y-20 pb-20 lg:space-y-28 lg:pb-28`}>
      {items.map((it, i) => {
        const t = b[it.key];
        return (
          <section key={it.key} id={it.id} aria-labelledby={`block-${it.key}`} className="grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-24">
            <Reveal className={i % 2 ? "md:order-2" : ""}>
              <Frame slot={it.slot} d={d} tone={it.tone} sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/3] md:aspect-[5/6] lg:aspect-[4/3]" />
            </Reveal>
            <Reveal delay={0.08} className="max-w-xl">
              <p className="eyebrow">{t.eyebrow}</p>
              <h2 id={`block-${it.key}`} className="display mt-4 text-[clamp(2.1rem,4.4vw,3.2rem)]">
                {t.title}
              </h2>
              <p className="lead mt-5">{t.text}</p>
              <Link href={it.to} className={`mt-8 ${it.key === "seances" ? "btn-solid" : "btn-line text-ink"}`}>
                {t.cta}
              </Link>
            </Reveal>
          </section>
        );
      })}
    </div>
  );
}

function Reviews({ lang, d }: { lang: Locale; d: Dict }) {
  const r = d.reviews;
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(site.rating.value);
  const quotes = avis.items as { author: string; date: string; text: L10n }[];
  return (
    <section aria-labelledby="reviews-title" className="bg-rose-soft">
      <div className={`${WRAP} py-16 lg:py-24`}>
        <Reveal className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <div className="flex items-end gap-5">
            <p className="display text-[clamp(5rem,10vw,7.5rem)] leading-[0.8]">{value}</p>
            <div className="pb-1">
              <p className="eyebrow">{r.eyebrow}</p>
              <Rating lang={lang} d={d} className="mt-2 text-[0.875rem] text-muted hover:text-ink" />
            </div>
          </div>
          <div>
            <h2 id="reviews-title" className="display text-[clamp(1.8rem,3.4vw,2.4rem)]">
              {r.title}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[1.0625rem]">
              {r.themes.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="rule !w-4 !bg-ink/40" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-6 inline-block text-[0.9375rem]">
              {r.cta}
            </a>
          </div>
        </Reveal>
        {/* À REMPLIR avec de vrais avis clients : data/avis.json (avis Google repris avec l'accord du studio). Aucun avis inventé. */}
        {quotes.length > 0 && (
          <ul className="mt-14 grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-3">
            {quotes.slice(0, 3).map((q) => (
              <li key={q.author + q.date}>
                <blockquote className="display text-[1.4rem] leading-snug">« {q.text[lang]} »</blockquote>
                <p className="mt-3 text-[0.875rem] text-muted">{q.author}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Tips({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.tips;
  return (
    <section aria-labelledby="tips-title" className={`${WRAP} py-20 lg:py-28`}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} id="tips-title" />
        <Link href={href(lang, "identite")} className="link-line text-[0.9375rem]">
          {d.pages.identite.title}
        </Link>
      </div>
      <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((it, i) => (
          <Reveal as="li" key={it.title} delay={i * 0.06} className="bg-paper p-7 lg:p-8">
            <span className="display text-[2.4rem] leading-none text-red-ink">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-5 text-[1.0625rem] font-normal">{it.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(d.faq.items)) }} />
      <Hero lang={lang} d={d} />
      <Tiles lang={lang} d={d} />
      <Strip d={d} />
      <Prices lang={lang} d={d} />
      <Compare lang={lang} d={d} />
      <Gallery d={d} />
      <Blocks lang={lang} d={d} />
      <Reviews lang={lang} d={d} />
      <Tips lang={lang} d={d} />
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} className="border-t border-line" />
    </>
  );
}
