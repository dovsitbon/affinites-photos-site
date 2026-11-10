// Prépare les photos du studio pour le web.
//   1. Déposer les photos (JPG, PNG, HEIC converti en JPG) dans assets/<dossier>/ :
//        hero/  identite/  bebe-famille/  portraits/  studio/  facade/
//      (les originaux bruts, ex. récupérés sur Google Maps, vont dans assets/raw/ et ne sont pas publiés)
//   2. npm run media
//      → public/media/<dossier>/<nom>.jpg (2000 px max pour hero, 1400 px sinon) et data/media-sizes.json
//      → public/og.jpg refait à partir de la première photo de hero/, s'il y en a une
//   3. Indiquer le chemin dans data/photos.json, ex. "hero": "/media/hero/vitrine.jpg"
// next/image sert ensuite AVIF/WebP à la bonne taille.
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["hero", "identite", "bebe-famille", "portraits", "studio", "facade"];
const slug = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const sizes = {};
let count = 0;
let firstHero = null;
for (const dir of DIRS) {
  const src = path.join(ROOT, "assets", dir);
  await mkdir(src, { recursive: true });
  const files = (await readdir(src)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
  if (!files.length) continue;
  await mkdir(path.join(ROOT, "public/media", dir), { recursive: true });
  for (const f of files) {
    const name = slug(f.replace(/\.\w+$/, ""));
    const max = dir === "hero" ? 2000 : 1400;
    const info = await sharp(path.join(src, f))
      .rotate()
      .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(path.join(ROOT, "public/media", dir, `${name}.jpg`));
    sizes[`/media/${dir}/${name}.jpg`] = [info.width, info.height];
    if (dir === "hero" && !firstHero) firstHero = path.join(src, f);
    count++;
  }
}

if (firstHero) await sharp(firstHero).rotate().resize(1200, 630, { fit: "cover", position: "attention" }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(ROOT, "public/og.jpg"));

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(count ? `${count} photo(s) prête(s). Renseigner les emplacements dans data/photos.json :` : "Aucune photo dans assets/ pour l'instant : le site garde ses cadres « viseur ».");
for (const k of Object.keys(sizes)) console.log("  ", k);
