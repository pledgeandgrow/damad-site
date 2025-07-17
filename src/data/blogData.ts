import { BlogPost } from '@/components/blog/BlogPostCard';
import { Category } from '@/components/blog/BlogCategories';

export const blogCategories: Category[] = [
  { id: 'all', name: 'Tous', count: 9 },
  { id: 'maintenance', name: 'Maintenance', count: 3 },
  { id: 'installation', name: 'Installation', count: 2 },
  { id: 'modernisation', name: 'Modernisation', count: 2 },
  { id: 'securite', name: 'Sécurité', count: 1 },
  { id: 'reglementation', name: 'Réglementation', count: 1 },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'comment-choisir-le-bon-ascenseur-pour-votre-immeuble',
    title: 'Comment choisir le bon ascenseur pour votre immeuble',
    excerpt: 'Découvrez les critères essentiels pour sélectionner l\'ascenseur le plus adapté à votre bâtiment et à vos besoins spécifiques.',
    coverImage: '/images/blog/ascenseur-immeuble.jpg',
    category: { id: 'installation', name: 'Installation' },
    publishedAt: '2025-06-15',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    slug: 'les-nouvelles-normes-de-securite-pour-les-ascenseurs-en-2025',
    title: 'Les nouvelles normes de sécurité pour les ascenseurs en 2025',
    excerpt: 'Un aperçu des dernières réglementations en matière de sécurité des ascenseurs et comment s\'y conformer.',
    coverImage: '/images/blog/securite-ascenseur.jpg',
    category: { id: 'reglementation', name: 'Réglementation' },
    publishedAt: '2025-05-28',
    readTime: 6,
    featured: true
  },
  {
    id: '3',
    slug: 'maintenance-preventive-prolonger-la-duree-de-vie-de-votre-ascenseur',
    title: 'Maintenance préventive : prolonger la durée de vie de votre ascenseur',
    excerpt: 'Les bonnes pratiques de maintenance préventive pour optimiser la longévité et la fiabilité de votre installation.',
    coverImage: '/images/blog/maintenance-ascenseur.jpg',
    category: { id: 'maintenance', name: 'Maintenance' },
    publishedAt: '2025-05-10',
    readTime: 7,
    featured: true
  },
  {
    id: '4',
    slug: 'modernisation-vs-remplacement-que-choisir-pour-votre-ascenseur',
    title: 'Modernisation vs. remplacement : que choisir pour votre ascenseur',
    excerpt: 'Analyse comparative des avantages et inconvénients entre la modernisation d\'un ascenseur existant et son remplacement complet.',
    coverImage: '/images/blog/modernisation-ascenseur.jpg',
    category: { id: 'modernisation', name: 'Modernisation' },
    publishedAt: '2025-04-22',
    readTime: 9
  },
  {
    id: '5',
    slug: 'les-technologies-innovantes-dans-le-secteur-des-ascenseurs',
    title: 'Les technologies innovantes dans le secteur des ascenseurs',
    excerpt: 'Découvrez les dernières innovations technologiques qui révolutionnent l\'industrie des ascenseurs et améliorent l\'expérience utilisateur.',
    coverImage: '/images/blog/technologie-ascenseur.jpg',
    category: { id: 'installation', name: 'Installation' },
    publishedAt: '2025-04-05',
    readTime: 5
  },
  {
    id: '6',
    slug: 'guide-complet-pour-la-maintenance-de-votre-ascenseur',
    title: 'Guide complet pour la maintenance de votre ascenseur',
    excerpt: 'Tout ce que vous devez savoir sur l\'entretien régulier de votre ascenseur pour garantir sa sécurité et sa performance.',
    coverImage: '/images/blog/guide-maintenance.jpg',
    category: { id: 'maintenance', name: 'Maintenance' },
    publishedAt: '2025-03-18',
    readTime: 10
  },
  {
    id: '7',
    slug: 'comment-reduire-la-consommation-energetique-de-votre-ascenseur',
    title: 'Comment réduire la consommation énergétique de votre ascenseur',
    excerpt: 'Conseils pratiques pour optimiser l\'efficacité énergétique de votre ascenseur et réduire son impact environnemental.',
    coverImage: '/images/blog/energie-ascenseur.jpg',
    category: { id: 'modernisation', name: 'Modernisation' },
    publishedAt: '2025-03-02',
    readTime: 6
  },
  {
    id: '8',
    slug: 'que-faire-en-cas-de-panne-dascenseur',
    title: 'Que faire en cas de panne d\'ascenseur',
    excerpt: 'Les étapes à suivre et les précautions à prendre lorsque votre ascenseur tombe en panne pour assurer la sécurité des utilisateurs.',
    coverImage: '/images/blog/panne-ascenseur.jpg',
    category: { id: 'securite', name: 'Sécurité' },
    publishedAt: '2025-02-15',
    readTime: 4
  },
  {
    id: '9',
    slug: 'les-avantages-dun-contrat-de-maintenance-pour-votre-ascenseur',
    title: 'Les avantages d\'un contrat de maintenance pour votre ascenseur',
    excerpt: 'Pourquoi souscrire à un contrat de maintenance et comment choisir celui qui convient le mieux à vos besoins.',
    coverImage: '/images/blog/contrat-maintenance.jpg',
    category: { id: 'maintenance', name: 'Maintenance' },
    publishedAt: '2025-01-30',
    readTime: 7
  }
];
