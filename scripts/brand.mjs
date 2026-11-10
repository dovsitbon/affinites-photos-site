// Fichiers de marque générés à partir du même diaphragme que le logo du site :
//   public/logo.svg, app/icon.svg (favicon), app/apple-icon.png, public/og.jpg (image de partage par défaut).
//   npm run brand
// Dès qu'une vraie photo est dans assets/hero/, `npm run media` remplace og.jpg par cette photo.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const APERTURE = "M0 -4.4L9.91 1.32M3.81 -2.2L3.81 9.25M3.81 2.2L-6.1 7.92M0 4.4L-9.91 -1.32M-3.81 2.2L-3.81 -9.25M-3.81 -2.2L6.1 -7.92";
const mark = (stroke, w) => `<g fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round"><circle r="10"/><path d="${APERTURE}"/></g>`;

const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 64" role="img" aria-label="Affinités Photos, Amiens">
  <g transform="translate(26 32) scale(2.1)">${mark("#222222", 0.5)}</g>
  <text x="64" y="37" fill="#222222" font-family="'Cormorant Garamond', Georgia, serif" font-weight="300" font-size="31" letter-spacing="8.06">AFFINITÉS</text>
  <text x="65.5" y="56" fill="#222222" font-family="Jost, 'Helvetica Neue', Arial, sans-serif" font-size="9.5" letter-spacing="3.99">PHOTOS · AMIENS</text>
</svg>
`;
await writeFile(path.join(ROOT, "public/logo.svg"), logo);

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#222222"/><g transform="translate(32 32) scale(2.1)">${mark("#E9C9C1", 1.1)}</g></svg>
`;
await writeFile(path.join(ROOT, "app/icon.svg"), icon);

const apple = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect width="180" height="180" fill="#222222"/><g transform="translate(90 90) scale(5.4)">${mark("#E9C9C1", 0.9)}</g></svg>`;
await sharp(Buffer.from(apple)).png().toFile(path.join(ROOT, "app/apple-icon.png"));

// Image de partage 1200 × 630 : fond gris perle, repères de viseur, diaphragme, nom du studio.
const corner = (x, y, sx, sy) => `<path d="M${x} ${y + 44 * sy}V${y}H${x + 44 * sx}" fill="none" stroke="#222222" stroke-opacity=".4" stroke-width="1.5"/>`;
const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#EDEBE8"/>
  ${corner(48, 48, 1, 1)}${corner(1152, 48, -1, 1)}${corner(48, 582, 1, -1)}${corner(1152, 582, -1, -1)}
  <g transform="translate(600 208) scale(6.2)">${mark("#222222", 0.3)}</g>
  <text x="614" y="398" text-anchor="middle" fill="#222222" font-family="Georgia, 'Times New Roman', serif" font-size="74" letter-spacing="26">AFFINITÉS</text>
  <text x="606" y="452" text-anchor="middle" fill="#7A6130" font-family="'Segoe UI', Arial, sans-serif" font-size="21" letter-spacing="11">PHOTOS · AMIENS</text>
  <text x="600" y="530" text-anchor="middle" fill="#5C5955" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="29">Photos d'identité, bébé, famille, portrait, tirages</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(ROOT, "public/og.jpg"));
console.log("logo.svg, icon.svg, apple-icon.png, og.jpg générés");
