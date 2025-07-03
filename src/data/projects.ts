import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rénovation complète d\'ascenseur résidentiel',
    category: 'Résidentiel',
    description: 'Modernisation complète d\'un ascenseur dans un immeuble résidentiel du 16ème arrondissement de Paris.',
    fullDescription: 'Nous avons réalisé une rénovation complète de l\'ascenseur principal de la résidence Les Jardins de Passy. Les travaux comprenaient le remplacement de la cabine, des portes palières, de la motorisation et du système de commande.',
    image: '/images/realisations/residence-1.jpg',
    images: [
      '/images/realisations/residence-1.jpg',
      '/images/realisations/residence-2.jpg',
      '/images/realisations/residence-3.jpg',
    ],
    client: 'Résidence Les Jardins de Passy',
    year: '2024',
    location: 'Paris 16',
    duration: '8 semaines',
    features: [
      'Remplacement complet de la cabine',
      'Nouveaux systèmes de sécurité',
      'Éclairage LED éco-énergétique',
      'Système d\'appel moderne',
      'Conformité aux normes en vigueur'
    ],
    challenge: 'Minimiser les perturbations pour les résidents pendant les travaux, tout en respectant un calendrier serré.',
    solution: 'Travail par étapes avec maintien d\'un ascenseur en service et communication régulière avec les résidents.'
  },
  {
    id: 2,
    title: 'Installation d\'ascenseur de charge',
    category: 'Industriel',
    description: 'Installation d\'un ascenseur industriel de forte capacité pour une usine de production.',
    fullDescription: 'Conception et installation d\'un ascenseur industriel capable de supporter des charges jusqu\'à 5000 kg pour une usine de production automobile.',
    image: '/images/realisations/industriel-1.jpg',
    images: [
      '/images/realisations/industriel-1.jpg',
      '/images/realisations/industriel-2.jpg',
    ],
    client: 'Groupe Industriel LVM',
    year: '2023',
    location: 'Lyon',
    duration: '12 semaines',
    features: [
      'Capacité de charge : 5000 kg',
      'Portes palières automatiques',
      'Système de sécurité renforcé',
      'Commande à distance',
      'Conforme aux normes industrielles'
    ],
    challenge: 'Adapter l\'installation aux contraintes spécifiques d\'un environnement industriel avec des exigences de sécurité élevées.',
    solution: 'Conception sur mesure avec des matériaux industriels et des systèmes de sécurité redondants.'
  },
  {
    id: 3,
    title: 'Ascenseur de luxe sur mesure',
    category: 'Particulier',
    description: 'Conception et installation d\'un ascenseur privatif haut de gamme dans une demeure d\'exception.',
    fullDescription: 'Réalisation d\'un ascenseur sur mesure pour une résidence privée de luxe, intégrant des matériaux nobles et des finitions personnalisées.',
    image: '/images/realisations/particulier-1.jpg',
    images: [
      '/images/realisations/particulier-1.jpg',
      '/images/realisations/particulier-2.jpg',
    ],
    client: 'Particulier',
    year: '2024',
    location: 'Neuilly-sur-Seine',
    duration: '10 semaines',
    features: [
      'Cabine en verre avec vue panoramique',
      'Revêtement en bois massif',
      'Éclairage LED personnalisable',
      'Système silencieux',
      'Télécommande sans fil'
    ],
    challenge: 'Créer une solution d\'ascenseur élégante qui s\'intègre parfaitement dans une demeure de luxe tout en respectant les contraintes techniques.',
    solution: 'Collaboration étroite avec l\'architecte d\'intérieur pour une intégration harmonieuse et utilisation de matériaux haut de gamme.'
  },
  {
    id: 4,
    title: 'Modernisation d\'ascenseur commercial',
    category: 'Commercial',
    description: 'Mise aux normes et modernisation d\'ascenseurs dans un centre commercial de grande envergure.',
    fullDescription: 'Modernisation complète de 6 ascenseurs dans un centre commercial fréquenté, avec amélioration des performances et de l\'accessibilité.',
    image: '/images/realisations/commercial-1.jpg',
    images: [
      '/images/realisations/commercial-1.jpg',
      '/images/realisations/commercial-2.jpg',
    ],
    client: 'Centre Commercial Les Quatre Temps',
    year: '2023',
    location: 'La Défense',
    duration: '16 semaines',
    features: [
      'Mise aux normes PMR',
      'Affichage numérique',
      'Système de gestion de trafic intelligent',
      'Éclairage à LED éco-énergétique',
      'Interface utilisateur tactile'
    ],
    challenge: 'Minimiser l\'impact sur l\'exploitation du centre commercial pendant les travaux de modernisation.',
    solution: 'Planification des travaux en dehors des heures d\'affluence et travail par lots pour maintenir toujours plusieurs ascenseurs en service.'
  },
  {
    id: 5,
    title: 'Ascenseur extérieur panoramique',
    category: 'Commercial',
    description: 'Installation d\'un ascenseur extérieur avec vue panoramique pour un hôtel de luxe.',
    fullDescription: 'Conception et installation d\'un ascenseur extérieur offrant une vue imprenable sur la ville pour un hôtel 5 étoiles.',
    image: '/images/realisations/panoramic-1.jpg',
    images: [
      '/images/realisations/panoramic-1.jpg',
      '/images/realisations/panoramic-2.jpg',
    ],
    client: 'Hôtel Panorama',
    year: '2024',
    location: 'Nice',
    duration: '14 semaines',
    features: [
      'Structure en verre trempé',
      'Résistance aux intempéries',
      'Éclairage nocturne intégré',
      'Ventilation naturelle',
      'Sécurité renforcée'
    ],
    challenge: 'Créer une structure à la fois esthétique et résistante aux conditions météorologiques tout en offrant une expérience utilisateur exceptionnelle.',
    solution: 'Utilisation de matériaux spéciaux traités contre les UV et la corrosion, avec un système de nettoyage intégré pour maintenir la transparence du verre.'
  },
  {
    id: 6,
    title: 'Ascenseur pour bâtiment historique',
    category: 'Résidentiel',
    description: 'Installation discrète d\'un ascenseur dans un immeuble haussmannien classé.',
    fullDescription: 'Installation d\'un ascenseur respectant les contraintes architecturales d\'un immeuble haussmannien classé, préservant le patrimoine tout en apportant du confort moderne.',
    image: '/images/realisations/historique-1.jpg',
    images: [
      '/images/realisations/historique-1.jpg',
      '/images/realisations/historique-2.jpg',
    ],
    client: 'Copropriété Saint-Germain',
    year: '2023',
    location: 'Paris 6',
    duration: '18 semaines',
    features: [
      'Design sur mesure',
      'Matériaux traditionnels',
      'Intégration discrète',
      'Sécurité renforcée',
      'Confort silencieux'
    ],
    challenge: 'Respecter les contraintes de conservation du patrimoine tout en intégrant une solution d\'ascenseur moderne et fonctionnelle.',
    solution: 'Collaboration avec les architectes des Bâtiments de France pour une solution sur mesure qui préserve l\'esthétique du bâtiment.'
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}
