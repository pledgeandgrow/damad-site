# DAMAD Ascenseurs

Site web professionnel pour DAMAD - Spécialiste en installation, maintenance et dépannage d'ascenseurs, EPMR, monte-charges et équipements de mobilité verticale.

## 🚀 Technologies Utilisées

- **Next.js 15.3.4** (App Router)
- **React 19**
- **TypeScript 5.4.5**
- **Tailwind CSS 3.4.3**
- **Framer Motion 12.23.6** (Animations)
- **React Icons 5.5.0**
- **React Hook Form 7.59.0**
- **Supabase 2.50.4** (Backend - pour projets futurs)
- **Vercel Analytics**

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

## 🏗️ Structure du Projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── a-propos/          # Page À propos
│   ├── blog/              # Blog (3 articles)
│   ├── contact/           # Page de contact
│   ├── devis/             # Demande de devis
│   ├── legal/             # Pages légales (5 pages)
│   ├── realisations/      # Portfolio projets
│   ├── recrutement/       # Recrutement
│   ├── services/          # Services (7 pages)
│   └── support/           # Support client
├── components/            # Composants réutilisables
│   ├── about/             # Composants page À propos
│   ├── blog/              # Composants blog
│   ├── contact/           # Formulaires de contact
│   ├── devis/             # Formulaires de devis
│   ├── home/              # Composants page d'accueil
│   ├── layout/            # Navigation et footer
│   ├── projects/          # Galerie de projets
│   ├── recrutement/       # Composants recrutement
│   ├── services/          # Composants services
│   ├── support/           # Support et FAQ
│   └── ui/                # Composants UI génériques
├── data/                  # Données statiques
├── docs/                  # Documentation projet
├── hooks/                 # Hooks React personnalisés
├── lib/                   # Utilitaires
└── types/                 # Types TypeScript
```

## ✨ Fonctionnalités Principales

### 🏠 **Page d'Accueil**
- Hero section avec présentation de l'entreprise
- Services principaux en vedette
- Projets récents
- Témoignages clients
- Call-to-action pour devis

### 🔧 **Services (7 pages spécialisées)**
- **Hero section** avec présentation générale
- **ServiceIntro**: Expérience et installation & garantie
- **ServiceContrat**: Services et dépannage 7/7
- **ServiceMaintenance**: Contrats de maintenance détaillés
- Pages individuelles: Installation, Maintenance, Dépannage, Réparation, Modernisation, Contrôle Technique

### 👥 **Recrutement**
- **CompanyIntro**: Présentation de l'entreprise et valeurs
- **Hero section** avec message d'accueil
- **Bonnes raisons de nous rejoindre** (5 points clés)
- Offres d'emploi techniques
- Formulaire de candidature complet

### 🏢 **À Propos**
- Histoire de l'entreprise
- Équipe et expertise
- Valeurs et engagement qualité
- Certifications et partenaires

### 📁 **Réalisations**
- Galerie de projets avec filtres
- Cartes projet avec effet hover "Voir le projet"
- Détails techniques des installations
- Témoignages clients

### 📞 **Contact & Support**
- Formulaires de contact multiples
- Support client avec FAQ (15+ questions)
- Suivi de tickets de support
- Informations de contact complètes

### 📝 **Blog**
- Articles techniques et actualités
- Conseils maintenance
- Actualités réglementaires

## 🎨 Système de Design

### **Palette de Couleurs**
- **Couleur principale**: `#2b3343` (Bleu-gris foncé)
- **Couleur secondaire**: `#3d4759` (Bleu-gris moyen)
- **Couleur accent**: Bleu (variantes)
- **Arrière-plans**: Dégradés gris et blancs

### **Typographie**
- **Police principale**: Roboto (Google Fonts)
- **Hiérarchie**: H1-H6 avec tailles responsives
- **Poids**: Regular, Medium, Semibold, Bold

### **Composants UI**
- **Animations**: Framer Motion avec transitions fluides
- **Icônes**: React Icons (FA, Lucide)
- **Formulaires**: React Hook Form avec validation
- **Responsive**: Mobile-first avec Tailwind CSS
- **Accessibilité**: ARIA labels et navigation clavier

## 🔄 Améliorations Récentes

### **Services Page Enhancement**
- ✅ Nouveau `ServiceHero` avec présentation engageante
- ✅ `ServiceIntro` avec expérience et installation
- ✅ `ServiceContrat` avec services 7/7 détaillés
- ✅ `ServiceMaintenance` avec critères spécifiques
- ✅ Structure modulaire et réutilisable

### **Recrutement Section Refinement**
- ✅ `CompanyIntro` avec 2 points iconiques + paragraphe
- ✅ Suppression du contenu promotionnel excessif
- ✅ Texte hero personnalisé: "REJOINGNEZ DAMAD !"
- ✅ "Bonnes raisons de nous rejoindre" (5 points)
- ✅ Formulaire de candidature optimisé
- ✅ Offres d'emploi techniques uniquement

### **Modernisation Page Updates**
- ✅ Police Roboto appliquée globalement
- ✅ 5 cartes de fonctionnalités en ligne (desktop)
- ✅ Texte explicatif sous les cartes
- ✅ Nouveau contenu et CTA
- ✅ Design responsive optimisé

### **Navigation & UX**
- ✅ Navbar mise à jour: "À propos" en premier
- ✅ "Recrutement" ajouté avant "Contact"
- ✅ Suppression de "Accueil" du menu
- ✅ "Voir le projet" au hover sur les cartes
- ✅ Suppression du mot "gratuit" des devis

### **Support & FAQ Enhancement**
- ✅ 15+ questions FAQ avec recherche
- ✅ Système de tickets de support avancé
- ✅ Catégorisation et filtrage
- ✅ Interface utilisateur améliorée

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
