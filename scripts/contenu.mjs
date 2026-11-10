// Génère CONTENU.md : tous les textes du site en français et en anglais, les tarifs, les horaires,
// pour relecture et validation par le studio.   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const json = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));
const fr = await json("locales/fr.json");
const en = await json("locales/en.json");
const tarifs = await json("data/tarifs.json");
const annonces = await json("data/annonces.json");
const horaires = await json("data/horaires.json");
const site = await json("data/site.json");

const out = [];
const w = (s = "") => out.push(s);
const strip = (s) => s.replace(/<\/?em>/g, "*");

w("# Affinités Photos : contenu du site");
w();
w("Tous les textes du site, en français et en anglais, pour relecture. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; tarifs, horaires, annonces, avis et photos dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.");
w();
w(`Rien n'a été inventé côté chiffres : les prix restent vides (« tarif au studio ») tant que le studio ne les a pas donnés. La note Google (${String(site.rating.value).replace(".", ",")}/5, ${site.rating.count} avis) est celle indiquée le ${site.rating.asOf}. Aucun avis n'est cité : le site reprend seulement les thèmes qui reviennent (photos d'identité, prix, accueil, photos de bébé, service colis).`);
w();
w("Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md).");
w();

w("## Titre du hero : 3 options");
w();
w("| | Français | English |");
w("|---|---|---|");
w("| **A (en ligne)** | Le studio photo *du quartier* | The neighbourhood *photo studio* |");
w("| B | Vos plus beaux souvenirs *commencent ici* | Your best memories *start here* |");
w("| C | Identité, bébé, famille : *un seul studio* | ID, baby, family: *one studio* |");
w();
w("Pour changer : `hero.title` dans `locales/fr.json` et `locales/en.json` (les mots entre `<em>` passent en italique).");
w();

w("## Trouvé en ligne (sources publiques)");
w();
w("- **Façade** : photo de la fiche Google Maps (hero, bloc identité, galerie « Le magasin »). L'enseigne réelle est rouge à lettres blanches : ce rouge sert d'accent sur le site.");
w("- **Page Facebook** du studio : e-mail affinites.photos@fcvnet.net, coques et jouets personnalisés, cabanon au marché de Noël (2017).");
w("- **Carte de visite** (photo Facebook) : développement argentique, tirage numérique, portrait, reportage, photo sur toile, livre album, cadres, albums, objets personnalisés. Elle indique d'anciens horaires (lundi 14 h – 19 h, mardi au samedi 9 h – 19 h) : à trancher avec ceux de Google.");
w("- **Annuaires** : photos d'identité pour carte d'identité, passeport, visas, permis de conduire e-photo (ANTS), argentique développé sur place.");
w("- **Registres publics** : AFFINITES PHOTOS, SCIC, SIRET 514 088 376 00017.");
w("- **Vitrine** : autocollants CB / Visa / Mastercard sur la porte ; affiche « photos sur toile à partir de 25 € » (photo ancienne, prix non repris).");
w("- **Photos d'illustration** : toutes les images hors façade et coque sont libres de droits (Unsplash, voir CREDITS.md), à remplacer par les photos du studio.");
w();
w("## À confirmer avec le studio");
w();
w("Ces points sont affichés sur le site mais reposent sur des suppositions raisonnables ; ils sont à valider avant de communiquer l'adresse du site.");
w();
w("- Photos d'identité **sans rendez-vous** et **conformes ANTS** (bandeau, hero, FAQ, page identité).");
w("- **e-photo ANTS** avec code et signature (permis de conduire) : le studio la propose-t-il ?");
w("- **Horaires** : mardi – vendredi 9 h 30 – 19 h, samedi 9 h 30 – 18 h (`data/horaires.json`, pied de page, FAQ).");
w("- **Liste des prestations** (`data/tarifs.json`) : séances naissance, grossesse, famille, portrait professionnel, formats étrangers, encadrement.");
w("- **Délais** : identité « sur place, en quelques minutes » ; le reste « précisé à la commande ».");
w("- **Service colis** (point relais) : tuile « Services » et thèmes des avis.");
w("- **Moyens de paiement** : la FAQ renvoie pour l'instant au téléphone.");
w("- **Accès et stationnement** : texte générique (`infos.accessText`).");
w("- **Déroulé des séances** bébé (choix des images au studio, réservation avant la naissance).");
w();

w("## Tarifs (`data/tarifs.json`)");
w();
for (const c of tarifs.categories) {
  w(`### ${c.name.fr} / ${c.name.en}`);
  w();
  w("| Prestation | Délai | Prix « à partir de » |");
  w("|---|---|---|");
  for (const s of c.items) w(`| **${s.name.fr}**<br>*${s.name.en}* | ${s.delay ? `${s.delay.fr} (à confirmer)` : "précisé à la commande"} | ${s.price == null ? "à remplir" : `${s.price} €`} |`);
  w();
}

w("## Horaires (`data/horaires.json`) — à confirmer");
w();
const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
for (const d of [1, 2, 3, 4, 5, 6, 0]) {
  const r = horaires.week[String(d)];
  w(`- ${days[d]} : ${r ? r.map(([a, b]) => `${a} – ${b}`).join(", ") : "fermé"}`);
}
w();
w(`Fermetures exceptionnelles : ${horaires.closures.map((c) => `${c.label.fr} (${c.from === c.to ? c.from : `${c.from} → ${c.to}`})`).join(", ")}.`);
w();

w("## Bandeau d'annonces (`data/annonces.json`)");
w();
for (const a of annonces.items) w(`- **${a.from} → ${a.to}** : ${a.text.fr} *(${a.text.en})* — lien « ${a.link.fr} »`);
w();

w("## Avis (`data/avis.json`)");
w();
w("À REMPLIR avec de vrais avis clients (avis Google repris avec l'accord du studio). Aucun avis inventé : tant que la liste est vide, le site n'affiche que la note et les thèmes.");
w();

w("## Textes du site");
w();
w("Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation du studio.");
w();
const flags = {
  "faq.items.0": "à valider (sans rendez-vous)",
  "faq.items.1": "à valider (conformité, e-photo)",
  "faq.items.3": "à valider (délais)",
  "faq.items.4": "à remplir (moyens de paiement)",
  "faq.items.5": "à valider (stationnement)",
  "tiles.items.services": "à valider (service colis)",
  "strip": "à valider",
  "compare": "à valider (déroulé des séances)",
  "blocks": "à valider",
  "infos.accessText": "à valider (accès, stationnement)",
  "pages.identite.sections": "à valider (documents, e-photo)",
  "pages.bebe": "à valider (déroulé des séances bébé)",
  "footer.days": "à valider (horaires)",
};
const flagOf = (key) => Object.entries(flags).find(([k]) => key === k || key.startsWith(`${k}.`))?.[1];

const SKIP = new Set(["slots", "days"]);
function walk(a, b, key = "") {
  if (typeof a === "string") {
    const f = flagOf(key);
    w(`| \`${key}\` | ${strip(a).replace(/\n/g, "<br>")} | ${strip(b ?? "").replace(/\n/g, "<br>")} |${f ? ` **${f}** |` : " |"}`);
    return;
  }
  if (Array.isArray(a)) return a.forEach((x, i) => walk(x, b?.[i], `${key}.${i}`));
  for (const k of Object.keys(a)) walk(a[k], b?.[k], key ? `${key}.${k}` : k);
}
for (const section of Object.keys(fr)) {
  if (SKIP.has(section)) continue;
  w(`### ${section}`);
  w();
  w("| Clé | Français | English | |");
  w("|---|---|---|---|");
  walk(fr[section], en[section], section);
  w();
}

w("## Emplacements photo (`data/photos.json`)");
w();
w("Le texte sert de légende tant que la photo manque, puis de texte alternatif une fois la photo en place (à ajuster selon la photo réelle).");
w();
w("| Emplacement | Français | English |");
w("|---|---|---|");
for (const k of Object.keys(fr.slots)) w(`| ${k} | ${fr.slots[k]} | ${en.slots[k]} |`);
w();

await writeFile(path.join(ROOT, "CONTENU.md"), out.join("\n"));
console.log("CONTENU.md écrit");
