# Guide d'utilisation et de Déploiement — Landing Page "SaaS Scolaire"

Ce dossier contient une landing page professionnelle, moderne et responsive, optimisée pour convertir vos prospects d'Afrique de l'Ouest et vendre votre formation de SaaS Scolaire.

---

## 🛠️ Configuration Actuelle

Vos liens réels ont déjà été intégrés avec succès dans le code de la landing page :
*   **Lien d'inscription à la formation** : [https://wcxedfia.mychariow.shop/prd_pvcwt3ek/checkout](https://wcxedfia.mychariow.shop/prd_pvcwt3ek/checkout) (configuré dans tous les boutons).
*   **Vidéo explicative (YouTube Short)** : [https://youtube.com/shorts/ueEQGYHTebI](https://youtube.com/shorts/ueEQGYHTebI) (configurée en lecteur responsive dynamique).

Tout est prêt, aucune modification supplémentaire n'est requise. Vous pouvez lancer le déploiement directement.

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
