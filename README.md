# Pack Formations PRO — Tunnel de vente

Landing page (tunnel de vente) statique pour le **Pack Formations PRO** :
5 formations digitales (Photoshop, CapCut, SEO, Création de site avec l'IA,
Community Management) réunies en un seul pack.

Déployée sur Render à l'URL `https://ads-g8aa.onrender.com/`.
Boutique / checkout : `https://aswpwbza.mychariow.com/prd_ibsrs9oi`.

## Contenu

- `index.html` — la page de vente (structure : hero, programme des 5 formations,
  ce qui est inclus, public cible, offre 3 500 FCFA, FAQ, CTA finale).
- `style.css` — design premium (noir + `#820000`).
- `favicon.svg` — icône (toque de diplômé).

## Image du produit

Un emplacement est réservé dans le hero. Déposez simplement le fichier
**`product.png`** à la racine du dossier : il remplacera automatiquement le
cadre « Image du produit ». (Le `<img>` a un `onerror` qui masque l'image tant
qu'elle n'existe pas et laisse le placeholder visible.)

## Mettre à jour

Modifiez `index.html` / `style.css`, puis redéployez (push GitHub → Render se
met à jour automatiquement).

## Contact / vente

Toutes les CTA pointent vers la boutique Chariow : `https://aswpwbza.mychariow.com/prd_ibsrs9oi`.
