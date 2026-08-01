# Page de téléchargement — Détecteur de Pixels

Ce dossier contient la landing page statique de téléchargement du logiciel
**Détecteur de Pixels**, déployée sur Render à l'URL
`https://ads-g8aa.onrender.com/`.

## Contenu

- `index.html` / `style.css` / `favicon.svg` — la page elle-même
- `DetecteurPixels-Setup.exe` — l'installateur Windows téléchargeable
  directement depuis les boutons de la page

## Mettre à jour l'installateur

Quand une nouvelle version du logiciel est prête :
1. Remplace `DetecteurPixels-Setup.exe` par le nouveau build.
2. Redéploie ce dossier sur Render (push GitHub ou déploiement manuel selon
   ta configuration).
3. Dis-le à Claude pour qu'il mette à jour l'Edge Function `dp-version` avec
   le nouveau numéro de version, afin que l'appli notifie automatiquement
   les utilisateurs de la mise à jour disponible.

## Contact

`princefreto@gmail.com` (déjà affiché sur la page).

## Tutoriel vidéo

Un emplacement est prévu sur la page (section "📺 Tutoriel vidéo") pour
intégrer la vidéo YouTube dès qu'elle est prête — donne le lien et il sera
inséré en lecteur responsive à cet endroit.
