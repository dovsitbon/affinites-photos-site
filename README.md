# Affinités Photos

Site vitrine et demande de séance du studio Affinités Photos, 5 rue de la Hotoie, 80000 Amiens. Next.js (App Router), Tailwind 4, Motion. Français par défaut, anglais (`/fr`, `/en`).

## Modifier le contenu

| Quoi | Où |
|---|---|
| Textes | `locales/fr.json`, `locales/en.json` |
| Tarifs et délais | `data/tarifs.json` |
| Horaires, fermetures | `data/horaires.json` |
| Bandeau d'annonces | `data/annonces.json` |
| Avis clients (vrais avis uniquement) | `data/avis.json` |
| Coordonnées, note Google, mentions | `data/site.json` |
| Photos | `assets/<dossier>/` → `npm run media` → `data/photos.json` |

Tant qu'un emplacement de `data/photos.json` vaut `null`, le site affiche un cadre « viseur » avec la légende de la photo attendue.

## Commandes

```bash
npm run dev         # site en local
npm run media       # prépare les photos déposées dans assets/
npm run brand       # logo.svg, favicon, image de partage
npm run affichette  # public/affichette-affinites-photos-a5.pdf (QR code)
npm run contenu     # CONTENU.md, tous les textes pour validation
```

## Formulaire

`/api/booking` envoie la demande par e-mail (Resend) au studio et une confirmation au client. Variables Vercel à renseigner : `RESEND_API_KEY`, `BOOKING_NOTIFY_EMAIL`, `RESEND_FROM`. Sans elles, la demande s'affiche comme reçue et le site invite le client à appeler.
