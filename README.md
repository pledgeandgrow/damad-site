# DAMAD

Site web professionnel pour DAMAD - Spécialiste en installation, maintenance et dépannage d'ascenseurs.

## 🚀 Technologies Utilisées

- Next.js 13+ (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Supabase (Backend)
- Framer Motion (Animations)
- React Icons

## 🛠️ Prérequis

- Node.js 18+
- npm ou yarn
- Compte Supabase
- Compte Vercel (pour le déploiement)

## 🚀 Démarrage Local

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/votre-utilisateur/damad-ascenseurs.git
   cd damad-ascenseurs
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configurer les variables d'environnement**
   - Copier le fichier `env.example` vers `.env.local`
   - Remplir les variables d'environnement nécessaires

4. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Ouvrir dans le navigateur**
   - Allez sur [http://localhost:3000](http://localhost:3000)

## 🚀 Déploiement sur Vercel

### Préparation

1. **Vérifier la configuration**
   - Assurez-vous que votre projet est bien configuré avec les fichiers suivants :
     - `next.config.js`
     - `vercel.json`
     - `.vercelignore`

2. **Variables d'environnement**
   - Configurez toutes les variables d'environnement requises dans les paramètres de votre projet Vercel

### Déploiement Automatique (Recommandé)

1. **Connectez votre dépôt GitHub/GitLab**
   - Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
   - Cliquez sur "New Project"
   - Importez votre dépôt GitHub/GitLab

2. **Configuration du Projet**
   - Framework: Next.js
   - Root Directory: `/` (par défaut)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Variables d'Environnement**
   - Ajoutez toutes les variables nécessaires depuis votre `.env.local`

4. **Déployer**
   - Cliquez sur "Deploy"

### Déploiement Manuel

1. **Installez Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Connectez-vous à Vercel**
   ```bash
   vercel login
   ```

3. **Déployez**
   ```bash
   vercel
   ```

4. **Suivez les instructions** à l'écran

## 🔧 Configuration Avancée

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```
# Next.js
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app

# Supabase
NEXT_PUBLIC_SUPABASE_URL=votre-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-clef-anon-supabase

# Contact
CONTACT_FORM_RECIPIENT=votre-email@example.com
```

### Scripts Utiles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm start` - Démarre le serveur de production (après le build)
- `npm run lint` - Exécute ESLint
- `npm run export` - Exporte l'application pour un déploiement statique

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

Pour toute question ou support, veuillez contacter [votre-email@example.com](mailto:votre-email@example.com)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
