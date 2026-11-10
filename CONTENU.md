# Affinités Photos : contenu du site

Tous les textes du site, en français et en anglais, pour relecture. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; tarifs, horaires, annonces, avis et photos dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.

Rien n'a été inventé côté chiffres : les prix restent vides (« tarif au studio ») tant que le studio ne les a pas donnés. La note Google (4,7/5, 180 avis) est celle indiquée le 2026-11-10. Aucun avis n'est cité : le site reprend seulement les thèmes qui reviennent (photos d'identité, prix, accueil, photos de bébé, service colis).

Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md).

## Titre du hero : 3 options

| | Français | English |
|---|---|---|
| **A (en ligne)** | Le studio photo *du quartier* | The neighbourhood *photo studio* |
| B | Vos plus beaux souvenirs *commencent ici* | Your best memories *start here* |
| C | Identité, bébé, famille : *un seul studio* | ID, baby, family: *one studio* |

Pour changer : `hero.title` dans `locales/fr.json` et `locales/en.json` (les mots entre `<em>` passent en italique).

## Trouvé en ligne (sources publiques)

- **Façade** : photo de la fiche Google Maps (hero, bloc identité, galerie « Le magasin »). L'enseigne réelle est rouge à lettres blanches : ce rouge sert d'accent sur le site.
- **Page Facebook** du studio : e-mail affinites.photos@fcvnet.net, coques et jouets personnalisés, cabanon au marché de Noël (2017).
- **Carte de visite** (photo Facebook) : développement argentique, tirage numérique, portrait, reportage, photo sur toile, livre album, cadres, albums, objets personnalisés. Elle indique d'anciens horaires (lundi 14 h – 19 h, mardi au samedi 9 h – 19 h) : à trancher avec ceux de Google.
- **Annuaires** : photos d'identité pour carte d'identité, passeport, visas, permis de conduire e-photo (ANTS), argentique développé sur place.
- **Registres publics** : AFFINITES PHOTOS, SCIC, SIRET 514 088 376 00017.
- **Vitrine** : autocollants CB / Visa / Mastercard sur la porte ; affiche « photos sur toile à partir de 25 € » (photo ancienne, prix non repris).
- **Photos d'illustration** : toutes les images hors façade et coque sont libres de droits (Unsplash, voir CREDITS.md), à remplacer par les photos du studio.

## À confirmer avec le studio

Ces points sont affichés sur le site mais reposent sur des suppositions raisonnables ; ils sont à valider avant de communiquer l'adresse du site.

- Photos d'identité **sans rendez-vous** et **conformes ANTS** (bandeau, hero, FAQ, page identité).
- **e-photo ANTS** avec code et signature (permis de conduire) : le studio la propose-t-il ?
- **Horaires** : mardi – vendredi 9 h 30 – 19 h, samedi 9 h 30 – 18 h (`data/horaires.json`, pied de page, FAQ).
- **Liste des prestations** (`data/tarifs.json`) : séances naissance, grossesse, famille, portrait professionnel, formats étrangers, encadrement.
- **Délais** : identité « sur place, en quelques minutes » ; le reste « précisé à la commande ».
- **Service colis** (point relais) : tuile « Services » et thèmes des avis.
- **Moyens de paiement** : la FAQ renvoie pour l'instant au téléphone.
- **Accès et stationnement** : texte générique (`infos.accessText`).
- **Déroulé des séances** bébé (choix des images au studio, réservation avant la naissance).

## Tarifs (`data/tarifs.json`)

### Photo d'identité / ID photos

| Prestation | Délai | Prix « à partir de » |
|---|---|---|
| **Photos d'identité aux normes (carte d'identité, passeport, titre de séjour)**<br>*Compliant ID photos (identity card, passport, residence permit)* | sur place, en quelques minutes (à confirmer) | à remplir |
| **e-photo ANTS avec code et signature numérique (permis de conduire)**<br>*ANTS e-photo with code and digital signature (driving licence)* | sur place, en quelques minutes (à confirmer) | à remplir |
| **Formats étrangers (visa, passeport d'un autre pays)**<br>*Foreign formats (visas, other countries' passports)* | sur place (à confirmer) | à remplir |
| **Photo d'identité bébé et enfant**<br>*Baby and child ID photo* | sur place (à confirmer) | à remplir |

### Bébé & naissance / Baby & newborn

| Prestation | Délai | Prix « à partir de » |
|---|---|---|
| **Séance naissance au studio**<br>*Newborn session at the studio* | précisé à la commande | à remplir |
| **Séance bébé (premiers mois, premier anniversaire)**<br>*Baby session (first months, first birthday)* | précisé à la commande | à remplir |
| **Séance grossesse**<br>*Maternity session* | précisé à la commande | à remplir |

### Famille / Family

| Prestation | Délai | Prix « à partir de » |
|---|---|---|
| **Séance famille au studio**<br>*Family session at the studio* | précisé à la commande | à remplir |
| **Séance enfants, frères et sœurs**<br>*Children and siblings session* | précisé à la commande | à remplir |

### Portrait / Portrait

| Prestation | Délai | Prix « à partir de » |
|---|---|---|
| **Portrait au studio**<br>*Studio portrait* | précisé à la commande | à remplir |
| **Portrait professionnel (CV, LinkedIn, site)**<br>*Professional headshot (CV, LinkedIn, website)* | précisé à la commande | à remplir |
| **Reportage**<br>*Event photography* | précisé à la commande | à remplir |

### Tirages & agrandissements / Prints & enlargements

| Prestation | Délai | Prix « à partir de » |
|---|---|---|
| **Tirage numérique depuis téléphone, clé USB ou carte**<br>*Digital prints from phone, USB stick or card* | précisé à la commande | à remplir |
| **Développement argentique sur place**<br>*Film developing on site* | précisé à la commande | à remplir |
| **Agrandissement**<br>*Enlargement* | précisé à la commande | à remplir |
| **Photo sur toile d'après vos photos**<br>*Canvas print from your photos* | précisé à la commande | à remplir |
| **Livre album**<br>*Photo book* | précisé à la commande | à remplir |
| **Cadres et albums**<br>*Frames and albums* | précisé à la commande | à remplir |
| **Objets personnalisés (coques de téléphone, mugs, jouets)**<br>*Personalised items (phone cases, mugs, toys)* | précisé à la commande | à remplir |

## Horaires (`data/horaires.json`) — à confirmer

- lundi : fermé
- mardi : 09:30 – 19:00
- mercredi : 09:30 – 19:00
- jeudi : 09:30 – 19:00
- vendredi : 09:30 – 19:00
- samedi : 09:30 – 18:00
- dimanche : fermé

Fermetures exceptionnelles : Noël (2026-12-25), Jour de l'an (2027-01-01).

## Bandeau d'annonces (`data/annonces.json`)

- **2026-01-01 → 2030-12-31** : Photos d'identité conformes ANTS, sans rendez-vous, aux heures d'ouverture. *(ID photos to official French (ANTS) standards, no appointment needed during opening hours.)* — lien « En savoir plus »
- **2026-12-22 → 2027-01-01** : Le studio est fermé le 25 décembre et le 1er janvier. Très belles fêtes à vous. *(The studio is closed on 25 December and 1 January. Happy holidays.)* — lien « Voir les horaires »

## Avis (`data/avis.json`)

À REMPLIR avec de vrais avis clients (avis Google repris avec l'accord du studio). Aucun avis inventé : tant que la liste est vide, le site n'affiche que la note et les thèmes.

## Textes du site

Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation du studio.

### meta

| Clé | Français | English | |
|---|---|---|---|
| `meta.title` | Photographe et photos d'identité à Amiens | Affinités Photos | Photographer and ID photos in Amiens | Affinités Photos | |
| `meta.description` | Studio photo au 5 rue de la Hotoie à Amiens : photos d'identité conformes ANTS, séances bébé, famille et portrait, tirages, développement argentique. Noté 4,7/5 sur Google. | Photo studio at 5 rue de la Hotoie, Amiens: ANTS-compliant ID photos, baby, family and portrait sessions, prints and film developing. Rated 4.7/5 on Google. | |
| `meta.ogAlt` | Affinités Photos, studio photo rue de la Hotoie à Amiens | Affinités Photos, photo studio on rue de la Hotoie in Amiens | |
| `meta.topics.0` | photo d'identité | ID photos | |
| `meta.topics.1` | e-photo ANTS | ANTS e-photo | |
| `meta.topics.2` | photographie de naissance | newborn photography | |
| `meta.topics.3` | photographie de bébé | baby photography | |
| `meta.topics.4` | portrait de famille | family portraits | |
| `meta.topics.5` | portrait en studio | studio portraits | |
| `meta.topics.6` | tirage photo | photo printing | |
| `meta.topics.7` | agrandissement photo | photo enlargements | |
| `meta.topics.8` | développement argentique | film developing | |
| `meta.topics.9` | photo sur toile | canvas prints | |

### nav

| Clé | Français | English | |
|---|---|---|---|
| `nav.identite` | Photo d'identité | ID photos | |
| `nav.seances` | Séances | Sessions | |
| `nav.tirages` | Tirages | Prints | |
| `nav.tarifs` | Tarifs | Prices | |
| `nav.infos` | Infos | Visit | |
| `nav.book` | Réserver une séance | Book a session | |
| `nav.call` | Appeler | Call | |
| `nav.menu` | Menu | Menu | |
| `nav.close` | Fermer le menu | Close menu | |
| `nav.home` | Affinités Photos, accueil | Affinités Photos, home | |
| `nav.skip` | Aller au contenu | Skip to content | |
| `nav.lang` | Langue | Language | |

### announce

| Clé | Français | English | |
|---|---|---|---|
| `announce.close` | Fermer le bandeau | Close banner | |

### intro

| Clé | Français | English | |
|---|---|---|---|
| `intro.skip` | Passer | Skip | |

### frame

| Clé | Français | English | |
|---|---|---|---|
| `frame.soon` | Photo à venir | Photo coming soon | |

### hero

| Clé | Français | English | |
|---|---|---|---|
| `hero.eyebrow` | Studio photo · rue de la Hotoie, Amiens | Photo studio · rue de la Hotoie, Amiens | |
| `hero.title` | Le studio photo *du quartier* | The neighbourhood *photo studio* | |
| `hero.lead` | Une photo d'identité acceptée du premier coup, les premiers jours d'un bébé, une famille réunie le temps d'une séance. On prend le temps de bien faire, et on vous accueille avec le sourire. | An ID photo that gets accepted first time, a baby's first days, a whole family together for one session. We take the time to get it right, and you'll always be welcomed with a smile. | |
| `hero.book` | Réserver une séance | Book a session | |
| `hero.identite` | Photo d'identité | ID photos | |

### rating

| Clé | Français | English | |
|---|---|---|---|
| `rating.label` | {value}/5 sur Google | {value}/5 on Google | |
| `rating.count` | {count} avis | {count} reviews | |
| `rating.asOf` | Note relevée sur Google en {date} | Google rating as of {date} | |

### status

| Clé | Français | English | |
|---|---|---|---|
| `status.open` | Ouvert maintenant | Open now | |
| `status.until` | jusqu'à {time} | until {time} | |
| `status.closed` | Fermé | Closed | |
| `status.reopens` | réouverture {day} à {time} | reopens {day} at {time} | |
| `status.today` | aujourd'hui | today | |
| `status.tomorrow` | demain | tomorrow | |

### bar

| Clé | Français | English | |
|---|---|---|---|
| `bar.label` | Demander une séance | Request a session | |
| `bar.type` | Type de séance | Session type | |
| `bar.typeAny` | À choisir | Choose | |
| `bar.day` | Date souhaitée | Preferred date | |
| `bar.dayAny` | Peu importe | Any day | |
| `bar.slot` | Créneau | Time of day | |
| `bar.slotAny` | Peu importe | Any time | |
| `bar.submit` | Réserver | Book | |

### tiles

| Clé | Français | English | |
|---|---|---|---|
| `tiles.eyebrow` | Ce que nous faisons | What we do | |
| `tiles.title` | De la photo d'identité au portrait de famille | From ID photos to family portraits | |
| `tiles.items.identite.title` | Photo d'identité | ID photos | |
| `tiles.items.identite.text` | Aux normes pour vos papiers, prête en quelques minutes. | Compliant for your documents, ready in a few minutes. | |
| `tiles.items.bebe.title` | Bébé et naissance | Baby and newborn | |
| `tiles.items.bebe.text` | Des séances calmes, au rythme de votre enfant. | Calm sessions, at your child's pace. | |
| `tiles.items.famille.title` | Famille | Family | |
| `tiles.items.famille.text` | Parents, enfants, grands-parents : tout le monde sur la photo. | Parents, children, grandparents: everyone in the picture. | |
| `tiles.items.portrait.title` | Portrait | Portrait | |
| `tiles.items.portrait.text` | Pour vous, pour un CV, pour offrir. | For yourself, for a CV, or as a gift. | |
| `tiles.items.tirages.title` | Tirages et agrandissements | Prints and enlargements | |
| `tiles.items.tirages.text` | Numérique ou argentique, en petit format, en grand ou sur toile. | Digital or film, small, enlarged or on canvas. | |
| `tiles.items.services.title` | Argentique et objets photo | Film and photo gifts | **à valider (service colis)** |
| `tiles.items.services.text` | Développement sur place, coques, mugs et cadeaux personnalisés. | Developing on site, phone cases, mugs and personalised gifts. | **à valider (service colis)** |

### strip

| Clé | Français | English | |
|---|---|---|---|
| `strip.title` | L'essentiel | The essentials | **à valider** |
| `strip.items.0.title` | Identité conforme ANTS | ANTS-compliant ID photos | **à valider** |
| `strip.items.0.text` | Format, fond et cadrage vérifiés avant de vous remettre la photo. | Size, background and framing checked before we hand them over. | **à valider** |
| `strip.items.1.title` | Avec ou sans rendez-vous | With or without booking | **à valider** |
| `strip.items.1.text` | L'identité se fait sur place ; les séances se réservent. | ID photos are walk-in; sessions are booked ahead. | **à valider** |
| `strip.items.2.title` | Tirages et argentique | Prints and film | **à valider** |
| `strip.items.2.text` | Depuis votre téléphone ou vos pellicules, développées sur place. | From your phone or your film rolls, developed on site. | **à valider** |
| `strip.items.3.title` | 03 22 91 60 34 | 03 22 91 60 34 | **à valider** |
| `strip.items.3.text` | Une question ? Le plus simple est d'appeler le studio. | Got a question? Calling the studio is the quickest way. | **à valider** |

### prices

| Clé | Français | English | |
|---|---|---|---|
| `prices.eyebrow` | Tarifs | Prices | |
| `prices.title` | Les tarifs du studio | Studio prices | |
| `prices.lead` | Des prix clairs, affichés ici comme au comptoir. Quand un prix dépend du format ou de la formule, nous indiquons le prix de départ. | Clear prices, shown here just as they are at the counter. When a price depends on the size or the package, we give the starting price. | |
| `prices.note` | Tarifs en cours de mise à jour : pour un prix précis, appelez le studio. | Prices are being updated: for an exact price, please call the studio. | |
| `prices.from` | à partir de {price} | from {price} | |
| `prices.onRequest` | tarif au studio | price at the studio | |
| `prices.cols.service` | Prestation | Service | |
| `prices.cols.price` | Prix | Price | |
| `prices.cols.delay` | Délai | Turnaround | |
| `prices.delayNone` | précisé à la commande | confirmed when you order | |
| `prices.book` | Réserver | Book | |

### compare

| Clé | Français | English | |
|---|---|---|---|
| `compare.eyebrow` | Les séances | Sessions | **à valider (déroulé des séances)** |
| `compare.title` | Trois séances, côte à côte | Three sessions, side by side | **à valider (déroulé des séances)** |
| `compare.lead` | Pour vous aider à choisir. Les détails se décident ensemble, au téléphone ou au studio, avant le jour de la séance. | To help you choose. We settle the details together, by phone or at the studio, before the day of the session. | **à valider (déroulé des séances)** |
| `compare.rows.who` | Pour qui | Who it's for | **à valider (déroulé des séances)** |
| `compare.rows.when` | Le bon moment | The right moment | **à valider (déroulé des séances)** |
| `compare.rows.how` | Comment ça se passe | How it goes | **à valider (déroulé des séances)** |
| `compare.rows.price` | Prix | Price | **à valider (déroulé des séances)** |
| `compare.offers.0.id` | bebe | bebe | **à valider (déroulé des séances)** |
| `compare.offers.0.name` | Bébé et naissance | Baby and newborn | **à valider (déroulé des séances)** |
| `compare.offers.0.who` | Les nouveau-nés, les bébés et leurs parents. | Newborns, babies and their parents. | **à valider (déroulé des séances)** |
| `compare.offers.0.when` | Dans les premières semaines pour une séance naissance ; à tout âge ensuite. | In the first few weeks for a newborn session; at any age after that. | **à valider (déroulé des séances)** |
| `compare.offers.0.how` | On suit le rythme de l'enfant : pauses, biberon, câlins. Rien ne presse. | We follow the baby's pace: breaks, a feed, a cuddle. There's no rush. | **à valider (déroulé des séances)** |
| `compare.offers.1.id` | famille | famille | **à valider (déroulé des séances)** |
| `compare.offers.1.name` | Famille | Family | **à valider (déroulé des séances)** |
| `compare.offers.1.who` | Parents et enfants, frères et sœurs, plusieurs générations. | Parents and children, siblings, several generations. | **à valider (déroulé des séances)** |
| `compare.offers.1.when` | Un anniversaire, des retrouvailles, ou simplement l'envie d'une belle photo ensemble. | A birthday, a reunion, or simply wanting a lovely photo together. | **à valider (déroulé des séances)** |
| `compare.offers.1.how` | Des photos de groupe, puis quelques portraits de chacun si vous le souhaitez. | Group shots first, then a few individual portraits if you'd like. | **à valider (déroulé des séances)** |
| `compare.offers.2.id` | portrait | portrait | **à valider (déroulé des séances)** |
| `compare.offers.2.name` | Portrait | Portrait | **à valider (déroulé des séances)** |
| `compare.offers.2.who` | Une personne seule, un couple, un professionnel. | One person, a couple, a professional. | **à valider (déroulé des séances)** |
| `compare.offers.2.when` | Pour un CV, un profil en ligne, un cadeau ou un souvenir. | For a CV, an online profile, a gift or a keepsake. | **à valider (déroulé des séances)** |
| `compare.offers.2.how` | Quelques essais pour vous mettre à l'aise, puis on choisit les meilleures images. | A few test shots to put you at ease, then we pick the best images. | **à valider (déroulé des séances)** |
| `compare.cta` | Réserver cette séance | Book this session | **à valider (déroulé des séances)** |

### gallery

| Clé | Français | English | |
|---|---|---|---|
| `gallery.eyebrow` | Galerie | Gallery | |
| `gallery.title` | Quelques images | A few pictures | |
| `gallery.lead` | Photos d'illustration pour l'instant : les photos de séances du studio seront publiées ici avec l'accord des familles. | Illustrative photos for now: the studio's own session photos will be published here with the families' consent. | |
| `gallery.tabs.bebe` | Bébé et naissance | Baby and newborn | |
| `gallery.tabs.famille` | Famille | Family | |
| `gallery.tabs.portrait` | Portrait | Portrait | |
| `gallery.tabs.studio` | Le magasin | The shop | |
| `gallery.tablist` | Type de séance | Session type | |

### blocks

| Clé | Français | English | |
|---|---|---|---|
| `blocks.identite.eyebrow` | Photo d'identité | ID photos | **à valider** |
| `blocks.identite.title` | Rapide, et conforme du premier coup | Quick, and compliant first time | **à valider** |
| `blocks.identite.text` | Carte d'identité, passeport, permis, titre de séjour, visa : nous cadrons et vérifions chaque photo selon les normes officielles avant de vous la remettre. Vous repartez avec en quelques minutes. | Identity card, passport, driving licence, residence permit, visa: we frame and check every photo against the official standards before handing it over. You leave with it a few minutes later. | **à valider** |
| `blocks.identite.cta` | Venir sans rendez-vous | Walk in, no booking | **à valider** |
| `blocks.seances.eyebrow` | Bébé et famille | Baby and family | **à valider** |
| `blocks.seances.title` | Des séances douces, sans se presser | Gentle sessions, never rushed | **à valider** |
| `blocks.seances.text` | Un nouveau-né qui dort, un premier anniversaire, trois générations sur la même image. Au studio, on prend le temps qu'il faut pour que chacun soit à l'aise, les plus petits d'abord. | A sleeping newborn, a first birthday, three generations in one picture. At the studio we take whatever time it takes for everyone to feel at ease, the little ones first. | **à valider** |
| `blocks.seances.cta` | Réserver une séance | Book a session | **à valider** |
| `blocks.tirages.eyebrow` | Tirages et cadeaux | Prints and gifts | **à valider** |
| `blocks.tirages.title` | Vos photos méritent mieux qu'un écran | Your photos deserve more than a screen | **à valider** |
| `blocks.tirages.text` | Apportez votre téléphone, une clé USB ou vos pellicules : nous développons et tirons vos photos sur place, en petit format, en agrandissement ou sur toile, avec des cadres, des livres albums et des objets personnalisés pour les offrir. | Bring your phone, a USB stick or your film rolls: we develop and print your photos on site, small, enlarged or on canvas, with frames, photo books and personalised items to give as gifts. | **à valider** |
| `blocks.tirages.cta` | Voir les tarifs | See prices | **à valider** |

### reviews

| Clé | Français | English | |
|---|---|---|---|
| `reviews.eyebrow` | Avis Google | Google reviews | |
| `reviews.title` | Ce que nos clients retiennent | What our customers remember | |
| `reviews.themes.0` | Les photos d'identité | ID photos | |
| `reviews.themes.1` | Des prix justes | Fair prices | |
| `reviews.themes.2` | Un accueil souriant | A warm welcome | |
| `reviews.themes.3` | Les photos de bébé | Baby photos | |
| `reviews.themes.4` | Le service colis | The parcel service | |
| `reviews.cta` | Lire les avis sur Google | Read the reviews on Google | |

### tips

| Clé | Français | English | |
|---|---|---|---|
| `tips.eyebrow` | Conseils | Advice | |
| `tips.title` | Avant votre photo d'identité | Before your ID photo | |
| `tips.lead` | Quatre choses à savoir pour que la photo soit acceptée, et que vous vous plaisiez dessus. | Four things to know so the photo is accepted, and so you like how you look in it. | |
| `tips.items.0.title` | Le visage dégagé | Keep your face clear | |
| `tips.items.0.text` | Tête nue, front et yeux bien visibles. Pensez à relever une mèche ou à attacher vos cheveux s'ils tombent sur le visage. | Head uncovered, forehead and eyes fully visible. Tuck back or tie up any hair that falls across your face. | |
| `tips.items.1.title` | Une expression neutre | A neutral expression | |
| `tips.items.1.text` | Bouche fermée, regard droit vers l'objectif. Ce n'est pas le moment du grand sourire, mais on peut avoir l'air détendu. | Mouth closed, looking straight at the lens. It's not the moment for a big smile, but you can still look relaxed. | |
| `tips.items.2.title` | Les lunettes, plutôt non | Glasses: better without | |
| `tips.items.2.text` | Elles sont tolérées sans reflets ni verres teintés. Le plus sûr reste de les retirer le temps de la photo. | They're allowed if there are no reflections or tinted lenses. The safest option is to take them off for the photo. | |
| `tips.items.3.title` | Une photo récente | A recent photo | |
| `tips.items.3.text` | Elle doit dater de moins de six mois et vous ressembler. Une photo ancienne peut faire refuser le dossier. | It must be less than six months old and look like you. An old photo can get the application rejected. | |

### infos

| Clé | Français | English | |
|---|---|---|---|
| `infos.eyebrow` | Infos pratiques | Visit | |
| `infos.title` | Nous trouver | Find us | |
| `infos.address` | Adresse | Address | |
| `infos.route` | Itinéraire | Directions | |
| `infos.phone` | Téléphone | Phone | |
| `infos.hours` | Horaires | Opening hours | |
| `infos.access` | Accès et stationnement | Getting here and parking | |
| `infos.accessText` | Le studio se trouve rue de la Hotoie, à quelques minutes à pied du centre-ville d'Amiens. Stationnement dans la rue et les rues voisines. | The studio is on rue de la Hotoie, a few minutes' walk from Amiens city centre. Parking is available on the street and in neighbouring streets. | **à valider (accès, stationnement)** |
| `infos.closedDay` | fermé | closed | |
| `infos.closures` | Fermetures à venir | Upcoming closures | |
| `infos.mapTitle` | Carte : Affinités Photos, 5 rue de la Hotoie, Amiens | Map: Affinités Photos, 5 rue de la Hotoie, Amiens | |

### faq

| Clé | Français | English | |
|---|---|---|---|
| `faq.eyebrow` | Questions fréquentes | Frequently asked questions | |
| `faq.title` | Avant de venir | Before you come | |
| `faq.items.0.q` | Faut-il prendre rendez-vous pour une photo d'identité ? | Do I need an appointment for an ID photo? | **à valider (sans rendez-vous)** |
| `faq.items.0.a` | Non. Les photos d'identité se font sans rendez-vous, pendant les heures d'ouverture du studio : du mardi au vendredi de 9 h 30 à 19 h, le samedi de 9 h 30 à 18 h. Les séances bébé, famille et portrait, elles, se réservent. | No. ID photos are walk-in during the studio's opening hours: Tuesday to Friday 9:30am to 7pm, Saturday 9:30am to 6pm. Baby, family and portrait sessions are booked ahead. | **à valider (sans rendez-vous)** |
| `faq.items.1.q` | Vos photos d'identité sont-elles acceptées pour un passeport ou une carte d'identité ? | Are your ID photos accepted for a French passport or identity card? | **à valider (conformité, e-photo)** |
| `faq.items.1.a` | Oui. Les photos sont réalisées selon les normes officielles françaises (format 35 × 45 mm, fond clair uni, visage de face, expression neutre) et vérifiées avant de vous être remises. Pour une demande de permis de conduire en ligne, demandez une e-photo avec code et signature numérique. | Yes. Photos are taken to the official French standards (35 × 45 mm, plain light background, face-on, neutral expression) and checked before we hand them over. For an online driving-licence application, ask for an e-photo with a code and digital signature. | **à valider (conformité, e-photo)** |
| `faq.items.2.q` | Quels sont les horaires du studio ? | What are the studio's opening hours? | |
| `faq.items.2.a` | Affinités Photos est ouvert du mardi au vendredi de 9 h 30 à 19 h et le samedi de 9 h 30 à 18 h. Le studio est fermé le dimanche et le lundi. | Affinités Photos is open Tuesday to Friday from 9:30am to 7pm and Saturday from 9:30am to 6pm. The studio is closed on Sunday and Monday. | |
| `faq.items.3.q` | En combien de temps ai-je mes photos ? | How quickly will I get my photos? | **à valider (délais)** |
| `faq.items.3.a` | Une photo d'identité est prête sur place, en quelques minutes. Pour les tirages, les agrandissements et les photos de séance, le délai vous est indiqué au moment de la commande. | An ID photo is ready on the spot, in a few minutes. For prints, enlargements and session photos, we tell you the turnaround when you order. | **à valider (délais)** |
| `faq.items.4.q` | Quels moyens de paiement acceptez-vous ? | Which payment methods do you accept? | **à remplir (moyens de paiement)** |
| `faq.items.4.a` | Le règlement se fait au studio. Si vous avez un doute sur un moyen de paiement, appelez-nous au 03 22 91 60 34 avant de venir. | Payment is made at the studio. If you're unsure about a payment method, call us on 03 22 91 60 34 before you come. | **à remplir (moyens de paiement)** |
| `faq.items.5.q` | Où se trouve le studio et où se garer ? | Where is the studio and where can I park? | **à valider (stationnement)** |
| `faq.items.5.a` | Au 5 rue de la Hotoie, 80000 Amiens, à quelques minutes à pied du centre-ville. On peut stationner dans la rue et dans les rues voisines. | At 5 rue de la Hotoie, 80000 Amiens, a few minutes' walk from the city centre. You can park on the street and in neighbouring streets. | **à valider (stationnement)** |

### footer

| Clé | Français | English | |
|---|---|---|---|
| `footer.tagline` | Studio photo à Amiens : photos d'identité, séances bébé, famille et portrait, tirages et développement argentique. | Photo studio in Amiens: ID photos, baby, family and portrait sessions, prints and film developing. | |
| `footer.contact` | Contact | Contact | |
| `footer.pages` | Le site | The site | |
| `footer.days` | Mardi – vendredi : 9 h 30 – 19 h<br>Samedi : 9 h 30 – 18 h | Tuesday – Friday: 9:30am – 7pm<br>Saturday: 9:30am – 6pm | **à valider (horaires)** |
| `footer.closed` | Fermé dimanche et lundi | Closed Sunday and Monday | |
| `footer.rights` | Affinités Photos. Tous droits réservés. | Affinités Photos. All rights reserved. | |
| `footer.legal` | Mentions légales | Legal notice | |

### booking

| Clé | Français | English | |
|---|---|---|---|
| `booking.eyebrow` | Réservation | Booking | |
| `booking.title` | Réserver une séance | Book a session | |
| `booking.lead` | Dites-nous ce que vous souhaitez et quand vous êtes disponible. Le studio vous rappelle pour confirmer le jour et l'heure : rien n'est réservé tant que nous ne vous avons pas eu au téléphone. | Tell us what you'd like and when you're free. The studio calls you back to confirm the day and time: nothing is booked until we've spoken on the phone. | |
| `booking.preferCall` | Vous préférez appeler ? | Rather call? | |
| `booking.walkIn` | Pour une photo d'identité, pas besoin de réserver : venez directement aux heures d'ouverture. | For an ID photo there's no need to book: just come in during opening hours. | |
| `booking.sections.type` | Votre demande | Your request | |
| `booking.sections.when` | Quand ? | When? | |
| `booking.sections.contact` | Vos coordonnées | Your details | |
| `booking.fields.type` | Type de séance | Session type | |
| `booking.fields.types.identite` | Photo d'identité | ID photo | |
| `booking.fields.types.bebe` | Bébé ou naissance | Baby or newborn | |
| `booking.fields.types.famille` | Famille | Family | |
| `booking.fields.types.portrait` | Portrait | Portrait | |
| `booking.fields.types.tirages` | Tirages, agrandissement | Prints, enlargement | |
| `booking.fields.types.autre` | Autre demande | Something else | |
| `booking.fields.people` | Nombre de personnes | Number of people | |
| `booking.fields.date` | Date souhaitée | Preferred date | |
| `booking.fields.dateHint` | (facultatif) | (optional) | |
| `booking.fields.slot` | Créneau souhaité | Preferred time of day | |
| `booking.fields.slotList.matin` | Matin (9 h 30 – 12 h) | Morning (9:30am – 12pm) | |
| `booking.fields.slotList.midi` | Midi (12 h – 14 h) | Lunchtime (12pm – 2pm) | |
| `booking.fields.slotList.apres-midi` | Après-midi (14 h – 17 h) | Afternoon (2pm – 5pm) | |
| `booking.fields.slotList.fin` | Fin de journée (après 17 h) | Late afternoon (after 5pm) | |
| `booking.fields.name` | Nom et prénom | Full name | |
| `booking.fields.phone` | Téléphone | Phone | |
| `booking.fields.email` | E-mail | Email | |
| `booking.fields.emailHint` | (facultatif, pour recevoir un récapitulatif) | (optional, to receive a summary) | |
| `booking.fields.message` | Message | Message | |
| `booking.fields.messagePh` | Âge du bébé, occasion, question… | Baby's age, the occasion, a question… | |
| `booking.errors.type` | Choisissez un type de séance. | Please choose a session type. | |
| `booking.errors.name` | Indiquez votre nom. | Please enter your name. | |
| `booking.errors.phone` | Indiquez un numéro de téléphone valide, pour que nous puissions vous rappeler. | Please enter a valid phone number so we can call you back. | |
| `booking.errors.email` | Cette adresse e-mail ne semble pas valide. | This email address doesn't look valid. | |
| `booking.errors.generic` | L'envoi n'a pas abouti. Réessayez, ou appelez le studio. | Your request couldn't be sent. Please try again, or call the studio. | |
| `booking.submit` | Envoyer ma demande | Send my request | |
| `booking.sending` | Envoi… | Sending… | |
| `booking.privacy` | Vos coordonnées servent uniquement à traiter votre demande. Elles ne sont ni revendues ni utilisées pour de la publicité. | Your details are only used to handle your request. They are never sold or used for advertising. | |
| `booking.success.title` | Demande envoyée, merci. | Request sent, thank you. | |
| `booking.success.text` | Le studio vous rappelle dès que possible, aux heures d'ouverture, pour confirmer le jour et l'heure. | The studio will call you back as soon as possible, during opening hours, to confirm the day and time. | |
| `booking.success.email` | Un récapitulatif vient de vous être envoyé par e-mail. | A summary has just been emailed to you. | |
| `booking.success.notNotified` | Pour être sûr que votre demande nous parvienne vite, vous pouvez aussi nous appeler : | To make sure your request reaches us quickly, you can also call us: | |
| `booking.success.again` | Faire une autre demande | Make another request | |
| `booking.message.title` | Demande de séance | Session request | |
| `booking.message.type` | Type de séance | Session type | |
| `booking.message.date` | Date souhaitée | Preferred date | |
| `booking.message.slot` | Créneau | Time of day | |
| `booking.message.people` | Nombre de personnes | Number of people | |
| `booking.message.name` | Nom | Name | |
| `booking.message.phone` | Téléphone | Phone | |
| `booking.message.email` | E-mail | Email | |
| `booking.message.message` | Message | Message | |
| `booking.email.subject` | Demande de séance | Session request | |
| `booking.email.confirmSubject` | Votre demande chez Affinités Photos | Your request at Affinités Photos | |
| `booking.email.confirmIntro` | Bonjour {name},<br><br>Nous avons bien reçu votre demande. Le studio vous rappelle pour confirmer le jour et l'heure. Voici ce que vous nous avez indiqué : | Hello {name},<br><br>We've received your request. The studio will call you back to confirm the day and time. Here is what you told us: | |
| `booking.email.confirmOutro` | À très bientôt,<br>Affinités Photos<br>5 rue de la Hotoie, 80000 Amiens<br>03 22 91 60 34 | See you soon,<br>Affinités Photos<br>5 rue de la Hotoie, 80000 Amiens, France<br>+33 3 22 91 60 34 | |

### pages

| Clé | Français | English | |
|---|---|---|---|
| `pages.identite.metaTitle` | Photo d'identité à Amiens, conforme ANTS | Affinités Photos | ID photos in Amiens, ANTS-compliant | Affinités Photos | |
| `pages.identite.metaDescription` | Photos d'identité à Amiens, sans rendez-vous : carte d'identité, passeport, permis (e-photo ANTS), titre de séjour, visa. Prêtes en quelques minutes, 5 rue de la Hotoie. | Walk-in ID photos in Amiens: French identity card, passport, driving licence (ANTS e-photo), residence permit, visas. Ready in a few minutes at 5 rue de la Hotoie. | |
| `pages.identite.eyebrow` | Photo d'identité à Amiens | ID photos in Amiens | |
| `pages.identite.title` | Photo d'identité à Amiens | ID photos in Amiens | |
| `pages.identite.intro` | Affinités Photos réalise vos photos d'identité au 5 rue de la Hotoie, sans rendez-vous, du mardi au samedi. Chaque photo est cadrée et vérifiée selon les normes officielles avant de vous être remise : vous repartez avec en quelques minutes. | Affinités Photos takes your ID photos at 5 rue de la Hotoie, with no appointment, Tuesday to Saturday. Every photo is framed and checked against the official standards before we hand it over: you leave with it a few minutes later. | |
| `pages.identite.cta` | Venir sans rendez-vous | Walk in, no booking | |
| `pages.identite.sections.0.title` | Pour quels documents ? | For which documents? | **à valider (documents, e-photo)** |
| `pages.identite.sections.0.text` | Carte nationale d'identité, passeport, permis de conduire, titre de séjour, carte Vitale, carte de transport, et les formats demandés par d'autres pays pour un visa ou un passeport étranger. | French identity card, passport, driving licence, residence permit, health card, travel pass, and the formats other countries require for a visa or a foreign passport. | **à valider (documents, e-photo)** |
| `pages.identite.sections.1.title` | L'e-photo pour le permis | The e-photo for driving licences | **à valider (documents, e-photo)** |
| `pages.identite.sections.1.text` | Pour une demande de permis de conduire en ligne sur le site de l'ANTS, il faut une photo numérique avec un code et votre signature. Demandez une e-photo : le code est valable six mois. | To apply for a French driving licence online on the ANTS website, you need a digital photo with a code and your signature. Ask for an e-photo: the code is valid for six months. | **à valider (documents, e-photo)** |
| `pages.identite.sections.2.title` | Bébés et enfants | Babies and children | **à valider (documents, e-photo)** |
| `pages.identite.sections.2.text` | Les règles sont un peu plus souples pour les tout-petits, mais la photo reste délicate à réussir. On prend le temps, et on recommence autant qu'il faut. | The rules are a little more relaxed for the very young, but the photo is still tricky to get right. We take our time and try again as often as needed. | **à valider (documents, e-photo)** |
| `pages.identite.rulesTitle` | Ce que demande l'administration | What the French administration requires | |
| `pages.identite.rulesLead` | Les règles officielles d'une photo d'identité française, en bref. | The official rules for a French ID photo, in short. | |
| `pages.identite.rules.0.k` | Format | Size | |
| `pages.identite.rules.0.v` | 35 mm de large sur 45 mm de haut | 35 mm wide by 45 mm high | |
| `pages.identite.rules.1.k` | Visage | Face | |
| `pages.identite.rules.1.v` | De face, de 32 à 36 mm du menton au sommet du crâne | Face-on, 32 to 36 mm from chin to crown | |
| `pages.identite.rules.2.k` | Fond | Background | |
| `pages.identite.rules.2.v` | Uni et clair (gris ou bleu clair), jamais blanc | Plain and light (light grey or blue), never white | |
| `pages.identite.rules.3.k` | Expression | Expression | |
| `pages.identite.rules.3.v` | Neutre, bouche fermée, yeux ouverts | Neutral, mouth closed, eyes open | |
| `pages.identite.rules.4.k` | Tête | Head | |
| `pages.identite.rules.4.v` | Nue, sans couvre-chef, foulard ni serre-tête | Uncovered: no hat, scarf or headband | |
| `pages.identite.rules.5.k` | Ancienneté | Age of photo | |
| `pages.identite.rules.5.v` | Moins de six mois | Less than six months | |
| `pages.identite.howTitle` | Comment ça se passe | How it works | |
| `pages.identite.how.0.title` | Vous venez quand vous voulez | Come when it suits you | |
| `pages.identite.how.0.text` | Sans rendez-vous, aux heures d'ouverture. Dites-nous pour quel document est la photo. | No appointment, during opening hours. Tell us which document the photo is for. | |
| `pages.identite.how.1.title` | On fait la photo | We take the photo | |
| `pages.identite.how.1.text` | Quelques essais si besoin, jusqu'à ce que la photo soit conforme, et qu'elle vous convienne. | A few tries if needed, until the photo is compliant, and you're happy with it. | |
| `pages.identite.how.2.title` | Vous repartez avec | You leave with it | |
| `pages.identite.how.2.text` | Vos photos imprimées, ou votre e-photo avec son code, en quelques minutes. | Your printed photos, or your e-photo with its code, in a few minutes. | |
| `pages.identite.related` | Les prix des photos d'identité sont dans | ID photo prices are listed in | |
| `pages.identite.tips` | Nos conseils avant la photo | Our advice before the photo | |
| `pages.bebe.metaTitle` | Photographe bébé et naissance à Amiens | Affinités Photos | Baby and newborn photographer in Amiens | Affinités Photos | **à valider (déroulé des séances bébé)** |
| `pages.bebe.metaDescription` | Séances photo bébé, naissance, grossesse et famille à Amiens, au studio Affinités Photos, 5 rue de la Hotoie. Des séances douces, au rythme de l'enfant. Réservation en ligne ou par téléphone. | Baby, newborn, maternity and family photo sessions in Amiens at the Affinités Photos studio, 5 rue de la Hotoie. Gentle sessions at your child's pace. Book online or by phone. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.eyebrow` | Photographe bébé à Amiens | Baby photographer in Amiens | **à valider (déroulé des séances bébé)** |
| `pages.bebe.title` | Photographe bébé et naissance à Amiens | Baby and newborn photographer in Amiens | **à valider (déroulé des séances bébé)** |
| `pages.bebe.intro` | Affinités Photos accueille les nouveau-nés, les bébés et leurs familles dans son studio du 5 rue de la Hotoie, à Amiens. Des séances calmes, où l'on suit le rythme de l'enfant, pour garder une trace de ces premiers mois qui passent si vite. | Affinités Photos welcomes newborns, babies and their families at its studio at 5 rue de la Hotoie, Amiens. Calm sessions that follow the child's pace, to keep a record of those first months that go by so fast. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.cta` | Réserver une séance bébé | Book a baby session | **à valider (déroulé des séances bébé)** |
| `pages.bebe.process.title` | Le déroulé d'une séance | How a session goes | **à valider (déroulé des séances bébé)** |
| `pages.bebe.process.steps.0.title` | On en parle avant | We talk beforehand | **à valider (déroulé des séances bébé)** |
| `pages.bebe.process.steps.0.text` | Par téléphone ou au studio : l'âge du bébé, vos envies, qui sera sur les photos. On fixe ensemble le jour et l'heure. | By phone or at the studio: the baby's age, what you have in mind, who will be in the photos. We set the day and time together. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.process.steps.1.title` | Le jour de la séance | On the day | **à valider (déroulé des séances bébé)** |
| `pages.bebe.process.steps.1.text` | Vous arrivez sans stress. On s'arrête pour un biberon, une tétée, un câlin, aussi souvent qu'il le faut. | You arrive with no pressure. We stop for a bottle, a feed or a cuddle as often as needed. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.process.steps.2.title` | Vous choisissez vos images | You choose your images | **à valider (déroulé des séances bébé)** |
| `pages.bebe.process.steps.2.text` | Nous vous présentons les photos, et vous choisissez celles que vous gardez, en tirages ou en agrandissements. | We show you the photos and you choose the ones you keep, as prints or enlargements. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.sections.0.title` | Naissance | Newborn | **à valider (déroulé des séances bébé)** |
| `pages.bebe.sections.0.text` | Les premières semaines sont le meilleur moment : le bébé dort beaucoup et se laisse installer en douceur. Pensez à réserver avant la naissance, on ajuste la date ensuite. | The first few weeks are the best time: babies sleep a lot and can be settled gently. Book before the birth if you can; we adjust the date afterwards. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.sections.1.title` | Les premiers mois | The first months | **à valider (déroulé des séances bébé)** |
| `pages.bebe.sections.1.text` | Le premier sourire, la position assise, le premier anniversaire : chaque étape se prête à une séance, seule ou en famille. | The first smile, sitting up, the first birthday: each stage suits a session, alone or with the family. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.sections.2.title` | Grossesse et famille | Maternity and family | **à valider (déroulé des séances bébé)** |
| `pages.bebe.sections.2.text` | Avant l'arrivée du bébé, ou tous ensemble quand il est là : les grands frères, les grandes sœurs et les grands-parents sont les bienvenus. | Before the baby arrives, or all together once they're here: big brothers, big sisters and grandparents are welcome. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.gallery` | Quelques images de séances | A few pictures from sessions | **à valider (déroulé des séances bébé)** |
| `pages.bebe.consent` | Photos d'illustration pour l'instant : les photos de séances du studio seront publiées ici avec l'accord des familles. | Illustrative photos for now: the studio's own session photos will be published here with the families' consent. | **à valider (déroulé des séances bébé)** |
| `pages.bebe.closing` | Les premiers mois ne reviennent pas. Les photos, elles, restent. | The first months don't come back. The photos stay. | **à valider (déroulé des séances bébé)** |

### legal

| Clé | Français | English | |
|---|---|---|---|
| `legal.metaTitle` | Mentions légales | Affinités Photos | Legal notice | Affinités Photos | |
| `legal.title` | Mentions légales | Legal notice | |
| `legal.pending` | Informations issues des registres publics, à confirmer avec le studio. | Details taken from public registers, to be confirmed with the studio. | |
| `legal.editor` | Éditeur du site | Publisher | |
| `legal.editorText` | AFFINITES PHOTOS, société coopérative d'intérêt collectif (SCIC), 5 rue de la Hotoie, 80000 Amiens. Téléphone : 03 22 91 60 34. E-mail : affinites.photos@fcvnet.net. | AFFINITES PHOTOS, a French cooperative company (SCIC), 5 rue de la Hotoie, 80000 Amiens, France. Phone: +33 3 22 91 60 34. Email: affinites.photos@fcvnet.net. | |
| `legal.host` | Hébergeur | Hosting | |
| `legal.data` | Données personnelles | Personal data | |
| `legal.dataText` | Les informations saisies dans le formulaire de réservation (nom, téléphone, e-mail, message) servent uniquement à traiter votre demande. Elles ne sont ni cédées ni utilisées à des fins publicitaires. Vous pouvez demander leur suppression en appelant le studio. Le site n'utilise pas de cookies publicitaires. | The information entered in the booking form (name, phone, email, message) is only used to handle your request. It is never passed on or used for advertising. You can ask for it to be deleted by calling the studio. The site uses no advertising cookies. | |
| `legal.photos` | Photos | Photos | |
| `legal.photosText` | La photo de la façade est celle de la fiche publique du commerce. Les autres images sont des photos d'illustration libres de droits (Unsplash), en attendant les photos du studio. Les photos de séances ne seront publiées qu'avec l'accord des personnes photographiées ou de leurs représentants légaux. | The shopfront photo comes from the shop's public listing. The other images are royalty-free illustrative photos (Unsplash), pending the studio's own photos. Session photos will only be published with the consent of the people photographed or their legal guardians. | |

## Emplacements photo (`data/photos.json`)

Le texte sert de légende tant que la photo manque, puis de texte alternatif une fois la photo en place (à ajuster selon la photo réelle).

| Emplacement | Français | English |
|---|---|---|
| hero | La façade d'Affinités Photos, 5 rue de la Hotoie à Amiens : enseigne rouge et vitrine de portraits | The Affinités Photos shopfront at 5 rue de la Hotoie, Amiens: red sign and a window full of portraits |
| tile-identite | Appareil photo reflex et son objectif | DSLR camera and its lens |
| tile-bebe | Petits pieds d'un nouveau-né sur un drap à pois roses | A newborn's tiny feet on a pink-dotted sheet |
| tile-famille | Mains d'une famille posées les unes sur les autres | A family's hands resting on top of each other |
| tile-portrait | Éclairage de studio et fauteuil de pose devant un fond blanc | Studio light and posing chair in front of a white backdrop |
| tile-tirages | Tirages photo étalés sur un drap blanc | Photo prints spread out on a white sheet |
| tile-services | Bande de pellicule photo argentique | A strip of photographic film |
| block-identite | La vitrine d'Affinités Photos, rue de la Hotoie | The Affinités Photos shop window, rue de la Hotoie |
| block-seances | Pieds d'un bébé dans un drap blanc | A baby's feet in a white sheet |
| block-tirages | Tirages photo en couleur posés sur une table | Colour photo prints laid on a table |
| bebe-1 | Pieds d'un nouveau-né emmitouflé dans une couverture blanche | A newborn's feet wrapped in a white blanket |
| bebe-2 | Main d'un bébé posée sur un drap | A baby's hand resting on a sheet |
| bebe-3 | Pieds d'un bébé dans un drap blanc | A baby's feet in a white sheet |
| famille-1 | Mains d'une famille posées les unes sur les autres | A family's hands resting on top of each other |
| famille-2 | Mains de trois générations réunies, en noir et blanc | Three generations' hands together, in black and white |
| famille-3 | Main d'un bébé dans la paume d'un adulte, en noir et blanc | A baby's hand in an adult's palm, in black and white |
| portrait-1 | Éclairage de studio et fauteuil de pose devant un fond blanc | Studio light and posing chair in front of a white backdrop |
| portrait-2 | Appareil photo sur son trépied | Camera on its tripod |
| portrait-3 | Appareil photo et objectifs vus de dessus | Camera and lenses seen from above |
| studio-1 | La façade d'Affinités Photos, 5 rue de la Hotoie à Amiens | The Affinités Photos shopfront at 5 rue de la Hotoie, Amiens |
| studio-2 | Détail de l'enseigne : le petit photographe blanc au-dessus de la vitrine | Sign detail: the little white photographer above the shop window |
| studio-3 | Coque de téléphone personnalisée avec une photo de paon | Personalised phone case printed with a peacock photo |
| page-identite | Appareil photo sur son trépied | Camera on its tripod |
| page-bebe | Main d'un adulte tenant la main d'un nouveau-né | An adult's hand holding a newborn's hand |
