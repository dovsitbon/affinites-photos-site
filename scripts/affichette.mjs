// Affichette A5 imprimable (PDF) avec QR code vers le site, à poser au comptoir ou en vitrine.
//   npm run affichette   →   public/affichette-affinites-photos-a5.pdf
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const url = `${site.url}/fr`;

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const WHITE = hex("#FFFFFF");
const PEARL = hex("#EDEBE8");
const ROSE = hex("#E9C9C1");
const INK = hex("#222222");
const GOLD = hex("#B3231F");
const MUTED = hex("#5C5955");
const LINE = hex("#E0DDD8");

const pdf = await PDFDocument.create();
pdf.setTitle("Affinités Photos : affichette A5");
pdf.setAuthor("Affinités Photos");
const W = 419.53;
const H = 595.28;
const page = pdf.addPage([W, H]);
const serif = await pdf.embedFont(StandardFonts.TimesRoman);
const serifI = await pdf.embedFont(StandardFonts.TimesRomanItalic);
const sans = await pdf.embedFont(StandardFonts.Helvetica);

page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: WHITE });

const center = (text, font, size, y, color = INK, spacing = 0) => {
  const width = font.widthOfTextAtSize(text, size) + spacing * (text.length - 1);
  if (!spacing) return page.drawText(text, { x: (W - width) / 2, y, size, font, color });
  let x = (W - width) / 2;
  for (const ch of text) {
    page.drawText(ch, { x, y, size, font, color });
    x += font.widthOfTextAtSize(ch, size) + spacing;
  }
};

// Bandeau du haut : aplat gris perle, repères de viseur, diaphragme au trait
const topH = 196;
page.drawRectangle({ x: 0, y: H - topH, width: W, height: topH, color: PEARL });
const m = 22;
const L = 20;
const c = hex("#8A8782");
for (const [x, y, sx, sy] of [
  [m, H - m, 1, -1],
  [W - m, H - m, -1, -1],
  [m, H - topH + m, 1, 1],
  [W - m, H - topH + m, -1, 1],
]) {
  page.drawLine({ start: { x, y }, end: { x: x + L * sx, y }, thickness: 0.6, color: c });
  page.drawLine({ start: { x, y }, end: { x, y: y + L * sy }, thickness: 0.6, color: c });
}
const APERTURE = "M0 -4.4L9.91 1.32M3.81 -2.2L3.81 9.25M3.81 2.2L-6.1 7.92M0 4.4L-9.91 -1.32M-3.81 2.2L-3.81 -9.25M-3.81 -2.2L6.1 -7.92";
const cx = W / 2;
const cy = H - topH / 2;
const S = 4.6;
page.drawCircle({ x: cx, y: cy, size: 10 * S, borderColor: INK, borderWidth: 0.8 });
page.drawSvgPath(APERTURE, { x: cx, y: cy, scale: S, borderColor: INK, borderWidth: 0.8 });

// La vraie façade par-dessus le bandeau, dès qu'elle existe dans public/media/hero/
try {
  const { default: sharp } = await import("sharp");
  const photo = await sharp(path.join(ROOT, "public/media/hero/facade.jpg")).resize(1260, 588, { fit: "cover", position: "centre" }).jpeg({ quality: 88 }).toBuffer();
  page.drawImage(await pdf.embedJpg(photo), { x: 0, y: H - topH, width: W, height: topH });
} catch {}

let y = H - topH - 46;
center("AFFINITÉS", serif, 30, y, INK, 7);
y -= 17;
center("PHOTOS · AMIENS", sans, 7.5, y, GOLD, 3.2);

y -= 36;
center("Réservez votre séance en ligne", serif, 20, y);
y -= 19;
center("bébé, naissance, famille, portrait : le studio vous rappelle", serifI, 12, y, MUTED);

// QR code
const qrPng = await QRCode.toBuffer(url, { margin: 0, width: 600, color: { dark: "#222222", light: "#FFFFFF" }, errorCorrectionLevel: "M" });
const qr = await pdf.embedPng(qrPng);
const qrS = 104;
y -= 20 + qrS;
page.drawRectangle({ x: (W - qrS) / 2 - 9, y: y - 9, width: qrS + 18, height: qrS + 18, borderColor: ROSE, borderWidth: 1.2 });
page.drawImage(qr, { x: (W - qrS) / 2, y, width: qrS, height: qrS });
y -= 25;
center(url.replace(/^https?:\/\//, ""), sans, 8.5, y, GOLD);

// Pied : infos pratiques
y -= 18;
page.drawLine({ start: { x: 60, y }, end: { x: W - 60, y }, thickness: 0.5, color: LINE });
y -= 17;
center("Photos d'identité  ·  tirages  ·  développement argentique", sans, 8.5, y);
y -= 13;
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city}  ·  ${site.phone}`, sans, 8.5, y);
y -= 13;
center("Du mardi au vendredi 9 h 30 – 19 h  ·  le samedi 9 h 30 – 18 h", sans, 8.5, y, MUTED);

const file = path.join(ROOT, "public/affichette-affinites-photos-a5.pdf");
await writeFile(file, await pdf.save());
console.log("affichette prête :", url);
