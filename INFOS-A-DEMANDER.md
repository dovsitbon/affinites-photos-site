# Affinités Photos : infos à demander au studio

À récupérer lors du passage au 5 rue de la Hotoie. Chaque réponse a sa place dans le site (indiquée à droite).

## Le studio

| À demander | Où ça va |
|---|---|
| Son prénom, son parcours, depuis quand le studio existe | nouveau bloc « Le studio » sur l'accueil + `locales/*.json` |
| Le logo d'origine (fichier), ou à défaut une photo nette de l'enseigne | `components/Logo.tsx`, `scripts/brand.mjs` |
| SIRET, raison sociale, nom du responsable | `data/site.json` → `legal` (mentions légales) |
| L'e-mail qui recevra les demandes de séance | variable Vercel `BOOKING_NOTIFY_EMAIL` + `data/site.json` → `email` |
| Un portable pour WhatsApp (le 03 22 91 60 34 est un fixe) | `data/site.json` → `whatsapp` (bouton à activer) |

## Prestations et prix

| À demander | Où ça va |
|---|---|
| La liste exacte des prestations et tous les prix | `data/tarifs.json` (`price`, « à partir de » si le prix varie) |
| Les délais : tirages, agrandissements, photos de séance | `data/tarifs.json` (`delay`) |
| Ce que comprend chaque séance (durée, nombre de photos, tirages inclus) | comparateur des 3 séances, `locales/*.json` → `compare` |
| Les moyens de paiement acceptés | FAQ, `locales/*.json` → `faq.items.4` |

## Photo d'identité

| À demander | Où ça va |
|---|---|
| Avec ou sans rendez-vous ? | bandeau (`data/annonces.json`), hero, FAQ, page identité |
| Le studio est-il agréé pour l'e-photo ANTS (code + signature) ? | page identité, tarifs |
| Formats étrangers proposés (visas, passeports d'autres pays) | page identité, tarifs |

## Services

| À demander | Où ça va |
|---|---|
| Le service colis : quel réseau (Mondial Relay, Relais Colis, Pickup…), dépôt et retrait ? | tuile « Services », FAQ |
| Autres services : photocopies, encadrement, cadeaux photo, transfert de films… | tuile « Services », tarifs |

## Horaires et accès

| À demander | Où ça va |
|---|---|
| Les horaires exacts (pause du midi ? lundi ?) | `data/horaires.json` + `footer.days` et FAQ dans `locales/*.json` |
| Les fermetures à venir (congés, jours fériés) | `data/horaires.json` → `closures`, `data/annonces.json` |
| Où se garer, quel arrêt de bus | `locales/*.json` → `infos.accessText` |

## Photos à prendre sur place

À déposer dans `assets/<dossier>/`, puis `npm run media` et `data/photos.json`. Ne pas mettre en avant les visages des clients ; photos de séances uniquement avec l'accord écrit des familles.

| Dossier | Photos |
|---|---|
| `assets/facade/` | la vitrine et l'enseigne, de face et de trois quarts, par beau temps |
| `assets/hero/` | la plus belle vue du studio (grand format horizontal ou vertical) |
| `assets/studio/` | l'intérieur, le comptoir, le coin prise de vue, l'équipe (avec son accord) |
| `assets/identite/` | la prise d'une photo d'identité (de dos ou en détail), une planche prête |
| `assets/bebe-famille/` | décor et accessoires de séance, détails (mains, pieds), séances avec accord |
| `assets/portraits/` | portraits réalisés au studio, avec accord |

## Avis

| À demander | Où ça va |
|---|---|
| Son accord pour reprendre 3 avis Google, et lesquels | `data/avis.json` |
