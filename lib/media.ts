import sizes from "@/data/media-sizes.json";
import photos from "@/data/photos.json";

export type Img = { src: string; width: number; height: number };
export type SlotId = keyof typeof photos.slots;

/** Photo d'un emplacement (data/photos.json), avec ses dimensions réelles ; null tant que l'emplacement est vide. */
export function slotImg(slot: SlotId): Img | null {
  const path = (photos.slots as Record<string, string | null>)[slot];
  if (!path) return null;
  const s = (sizes as Record<string, number[]>)[path];
  if (!s) throw new Error(`Image inconnue : ${path} (lancer npm run media)`);
  return { src: path, width: s[0], height: s[1] };
}
