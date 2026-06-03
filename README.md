# Guide d'utilisation et de Déploiement — Landing Page "SaaS Scolaire"

Ce dossier contient une landing page professionnelle, moderne et responsive, optimisée pour convertir vos prospects d'Afrique de l'Ouest et vendre votre formation de SaaS Scolaire.

---

## 🛠️ Configuration Initiale (Avant Déploiement)

### 1. Remplacer le lien de la formation
Ouvrez le fichier `index.html` et remplacez l'adresse temporaire `https://FORMATION-LINK-HERE.com` par votre propre lien de redirection de formation (Lien d'achat, de paiement, de groupe WhatsApp/Telegram ou autre).
Il y a 3 occurrences dans le fichier :
*   Ligne 31 : Le bouton Hero (`id="hero-cta"`)
*   Ligne 173 : Le bouton final en bas de page
*   Ligne 180 : Le bouton flottant mobile (`id="sticky-cta-bar"`)

### 2. Ajouter votre vidéo de présentation
Ouvrez le fichier `index.html` à la ligne 49 et insérez le lien de votre vidéo dans l'attribut `src` de la balise `<source>`.

---

## 📹 Comment héberger votre vidéo de présentation gratuitement ?

Pour maintenir la landing page 100% gratuite à faire tourner, voici les deux meilleures méthodes pour héberger votre vidéo explicative :

### Option A : Hébergement Supabase (Recommandé - Sans Publicité & 100% Pro)
Puisque vous avez déjà un projet Supabase pour la plateforme scolaire, profitez de son stockage gratuit (jusqu'à 1 Go) :
1.  Connectez-vous à votre tableau de bord **Supabase**.
2.  Allez dans l'onglet **Storage** (Stockage).
3.  Créez un nouveau Bucket nommé `videos` et configurez-le en **Public** (très important pour que la vidéo se charge sur le site).
4.  Téléversez votre vidéo au format `.mp4` (ex: `presentation.mp4`).
5.  Une fois téléversée, cliquez sur le fichier et copiez l'**URL publique** (Get URL).
6.  Collez cette URL dans votre `index.html` à la ligne 49 :
    ```html
    <source src="https://votre-url-supabase/storage/v1/object/public/videos/presentation.mp4" type="video/mp4">
    ```

### Option B : YouTube (Ultra-simple, bande passante illimitée)
1.  Téléversez votre vidéo sur YouTube.
2.  Configurez la visibilité en **Non répertoriée** (Unlisted) pour qu'elle ne soit visible que sur votre site et pas sur votre chaîne publique.
3.  Copiez le code d'intégration (Embed code).
4.  Remplacez le bloc `<video>` dans `index.html` par l'iframe YouTube fourni. Exemple :
    ```html
    <iframe src="https://www.youtube.com/embed/VOTRE_ID_VIDEO?rel=0&autoplay=0" allowfullscreen></iframe>
    ```
    *Note : le style CSS se chargera de le rendre responsive automatiquement.*

---

## 🚀 Comment déployer la landing page gratuitement sur Render ?

Render offre un hébergement de sites statiques rapide, mondial et **totalement gratuit**.

### Étape 1 : Pousser les fichiers sur votre dépôt GitHub
Si ce n'est pas encore fait, ajoutez les fichiers du dossier `Ads` à votre dépôt git et poussez-les sur GitHub :
```bash
git add Ads/
git commit -m "🚀 Ajout de la landing page Ads"
git push origin main
```

### Étape 2 : Créer le service statique sur Render
1.  Connectez-vous sur **[Render.com](https://render.com/)**.
2.  Cliquez sur **New +** (Nouveau) et sélectionnez **Static Site** (Site statique).
3.  Connectez votre dépôt GitHub.
4.  Configurez les champs suivants :
    *   **Name** : Saisissez le nom de votre choix (ex: `formation-saas-scolaire`).
    *   **Branch** : `main` (ou votre branche principale).
    *   **Root Directory** : Saisissez **`Ads`** (Ceci est très important : cela indique à Render de ne déployer que le sous-dossier contenant la landing page, sans toucher au reste de votre code).
    *   **Build Command** : Laissez vide.
    *   **Publish Directory** : Saisissez **`.`** (ou laissez vide pour publier la racine du sous-dossier `Ads`).
5.  Cliquez sur **Create Static Site**.

Render va compiler et déployer la landing page en quelques secondes. Vous obtiendrez une URL gratuite et sécurisée en HTTPS du type `https://formation-saas-scolaire.onrender.com`.
