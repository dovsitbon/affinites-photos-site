import data from "@/data/tarifs.json";
import type { L10n } from "@/lib/locales";

export type Item = { id: string; name: L10n; price: number | null; delay: L10n | null };
export type Category = { id: string; name: L10n; items: Item[] };

export const categories = data.categories as Category[];

/** Types de demande du formulaire : les catégories de tarifs, plus « autre ». */
export const TYPES = [...categories.map((c) => c.id), "autre"] as const;
export const isType = (v: unknown): v is string => typeof v === "string" && (TYPES as readonly string[]).includes(v);
