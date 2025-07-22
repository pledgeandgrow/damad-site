import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Rénovation complète d\'ascenseur résidentiel',
    category: 'Résidentiel',
    description: 'Modernisation complète d\'un ascenseur dans un immeuble résidentiel du 16ème arrondissement de Paris.',
    fullDescription: 'Nous avons réalisé une rénovation complète de l\'ascenseur principal de la résidence Les Jardins de Passy. Les travaux comprenaient le remplacement de la cabine, des portes palières, de la motorisation et du système de commande.',
    image: '/images/projects/damad1.jpg',
    images: [
      '/images/projects/damad1.jpg',
      '/images/projects/damad2.jpg',
      '/images/projects/damad3.jpg',
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
    image: '/images/projects/damad7.jpg',
    images: [
      '/images/projects/damad7.jpg',
      '/images/projects/damad8.jpg',
      '/images/projects/damad9.jpg',
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
    image: '/images/projects/damad10.jpg',
    images: [
      '/images/projects/damad10.jpg',
      '/images/projects/damad11.jpg',
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
    image: '/images/projects/damad4.jpg',
    images: [
      '/images/projects/damad4.jpg',
      '/images/projects/damad5.jpg',
      '/images/projects/damad6.jpg',
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
    image: '/images/projects/damad12.jpg',
    images: [
      '/images/projects/damad12.jpg',
      '/images/projects/damad13.jpg',
      '/images/projects/damad1.jpg',
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
    image: '/images/projects/damad13.jpg',
    images: [
      '/images/projects/damad13.jpg',
      '/images/projects/damad12.jpg',
      '/images/projects/damad11.jpg',
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
  },
  {
    id: 7,
    title: 'Maintenance préventive système d\'ascenseur',
    category: 'Maintenance',
    description: 'Programme de maintenance préventive pour un complexe de bureaux avec 12 ascenseurs.',
    fullDescription: 'Mise en place d\'un programme de maintenance préventive complet pour un complexe de bureaux comprenant 12 ascenseurs à forte fréquentation. Notre intervention a permis de réduire les pannes de 85% et d\'augmenter la durée de vie des équipements.',
    image: '/images/projects/CONTACTEUR ET AUXILAIRE.jpg',
    images: [
      '/images/projects/CONTACTEUR ET AUXILAIRE.jpg',
      '/images/projects/LIMITEUR DE VISTESSE.jpg',
      '/images/projects/REMPLACMENT DE NEON.jpg',
    ],
    client: 'Tour Horizon Business Center',
    year: '2024',
    location: 'Paris La Défense',
    duration: 'Contrat annuel',
    features: [
      'Inspection mensuelle complète',
      'Analyse vibratoire préventive',
      'Remplacement programmé des pièces d\'usure',
      'Rapport détaillé après chaque intervention',
      'Assistance technique 24/7'
    ],
    challenge: 'Assurer une disponibilité maximale des ascenseurs dans un environnement professionnel à forte affluence tout en minimisant les interruptions de service.',
    solution: 'Développement d\'un programme de maintenance sur mesure avec interventions en dehors des heures de bureau et système de surveillance à distance pour une détection précoce des anomalies.'
  },
  {
    id: 8,
    title: 'Installation de monte-charge industriel',
    category: 'Industriel',
    description: 'Conception et installation d\'un système de monte-charge pour une usine agroalimentaire.',
    fullDescription: 'Réalisation d\'un monte-charge industriel sur mesure pour une usine de transformation alimentaire, permettant le transport de marchandises entre trois niveaux de production avec une capacité de charge de 2000 kg.',
    image: '/images/projects/MONTE-FUT-1.jpg',
    images: [
      '/images/projects/MONTE-FUT-1.jpg',
      '/images/projects/MONTE-FUT-1-2.jpg',
      '/images/projects/MONTE-FUT-1-2-3.jpg',
    ],
    client: 'Groupe Alimentaire Provence',
    year: '2023',
    location: 'Marseille',
    duration: '10 semaines',
    features: [
      'Capacité de charge : 2000 kg',
      'Acier inoxydable alimentaire',
      'Système de sécurité conforme HACCP',
      'Commandes simplifiées',
      'Maintenance facilitée'
    ],
    challenge: 'Concevoir un système répondant aux normes strictes de l\'industrie alimentaire tout en s\'adaptant à un espace restreint dans un bâtiment existant.',
    solution: 'Conception sur mesure avec des matériaux conformes aux normes alimentaires et optimisation de l\'espace disponible grâce à une étude approfondie du site.'
  },
  {
    id: 9,
    title: 'Rénovation système de contrôle d\'ascenseurs',
    category: 'Commercial',
    description: 'Modernisation du système de contrôle pour une batterie de 4 ascenseurs dans un immeuble de bureaux.',
    fullDescription: 'Remplacement complet du système de contrôle obsolète par une solution intelligente permettant une gestion optimisée du trafic pour 4 ascenseurs dans un immeuble de bureaux de 20 étages.',
    image: '/images/projects/ascenseurs manoeuvre.jpg',
    images: [
      '/images/projects/ascenseurs manoeuvre.jpg',
      '/images/projects/cable - bobine ascenseurs.jpg',
      '/images/projects/BOUTON BLEU.jpg',
    ],
    client: 'Immeuble Le Cristal',
    year: '2024',
    location: 'Lyon',
    duration: '6 semaines',
    features: [
      'Système de gestion de trafic intelligent',
      'Écrans tactiles aux paliers',
      'Reconnaissance faciale pour les étages sécurisés',
      'Économie d\'énergie jusqu\'à 40%',
      'Maintenance prédictive intégrée'
    ],
    challenge: 'Remplacer le système de contrôle sans interrompre complètement le service d\'ascenseurs dans un immeuble occupé à 100%.',
    solution: 'Mise en place d\'un plan de migration progressif permettant de maintenir au moins 2 ascenseurs en service à tout moment et travail en horaires décalés.'
  },
  {
    id: 10,
    title: 'Installation d\'ascenseur PMR',
    category: 'Public',
    description: 'Installation d\'un ascenseur accessible aux personnes à mobilité réduite dans un établissement scolaire.',
    fullDescription: 'Conception et installation d\'un ascenseur entièrement accessible aux personnes à mobilité réduite dans un lycée historique, permettant l\'accès à tous les étages conformément aux normes d\'accessibilité.',
    image: '/images/projects/affichage ascenseur etage.jpg',
    images: [
      '/images/projects/affichage ascenseur etage.jpg',
      '/images/projects/affichage ascenseur bonton ascenseurs.jpg',
      '/images/projects/ascenseur interieure.jpg',
    ],
    client: 'Lycée Victor Hugo',
    year: '2023',
    location: 'Bordeaux',
    duration: '14 semaines',
    features: [
      'Cabine spacieuse aux dimensions PMR',
      'Commandes à hauteur adaptée',
      'Signalisation sonore et visuelle',
      'Portes à ouverture prolongée',
      'Système d\'appel d\'urgence spécifique'
    ],
    challenge: 'Intégrer un ascenseur moderne dans un bâtiment historique classé tout en respectant l\'architecture d\'origine et les contraintes techniques.',
    solution: 'Collaboration avec les architectes du patrimoine pour une intégration discrète et utilisation d\'une structure autoportante minimisant les modifications structurelles du bâtiment.'
  },
  {
    id: 11,
    title: 'Remplacement de portes palières',
    category: 'Résidentiel',
    description: 'Remplacement des portes palières de 3 ascenseurs dans une résidence de standing.',
    fullDescription: 'Remplacement complet des portes palières de 3 ascenseurs sur 8 étages dans une résidence de standing, améliorant l\'esthétique, la sécurité et l\'isolation phonique.',
    image: '/images/projects/FERME PORTE.jpg',
    images: [
      '/images/projects/FERME PORTE.jpg',
      '/images/projects/FERME PORTE-1.jpg',
      '/images/projects/FERME PORTE-1-2.jpg',
    ],
    client: 'Résidence Les Terrasses du Parc',
    year: '2024',
    location: 'Nantes',
    duration: '5 semaines',
    features: [
      'Portes automatiques silencieuses',
      'Détection de présence avancée',
      'Design personnalisé par étage',
      'Isolation phonique renforcée',
      'Sécurité anti-pincement'
    ],
    challenge: 'Remplacer les portes palières sur 8 étages tout en minimisant les nuisances pour les résidents et en maintenant un accès aux étages.',
    solution: 'Organisation des travaux par ascenseur avec un planning précis communiqué aux résidents et mise en place d\'une assistance pour les personnes à mobilité réduite pendant les travaux.'
  },
  {
    id: 12,
    title: 'Modernisation ascenseur hôpital',
    category: 'Public',
    description: 'Modernisation complète des ascenseurs d\'un centre hospitalier avec maintien du service.',
    fullDescription: 'Modernisation complète de 6 ascenseurs dans un centre hospitalier régional, incluant le remplacement des cabines, des systèmes de traction et des contrôles, tout en maintenant un service continu essentiel pour l\'établissement.',
    image: '/images/projects/TECH.jpg',
    images: [
      '/images/projects/TECH.jpg',
      '/images/projects/TECHNICIEN.jpg',
      '/images/projects/renovation.jpg',
    ],
    client: 'Centre Hospitalier Régional',
    year: '2023',
    location: 'Strasbourg',
    duration: '24 semaines',
    features: [
      'Système de priorité pour urgences médicales',
      'Cabines adaptées au transport de lits',
      'Filtration d\'air antibactérienne',
      'Système de secours autonome',
      'Désinfection UV automatique'
    ],
    challenge: 'Moderniser les ascenseurs d\'un hôpital fonctionnant 24h/24 sans jamais interrompre complètement le service, crucial pour le transport des patients et du matériel médical.',
    solution: 'Mise en place d\'un plan de modernisation séquentiel avec maintien permanent d\'un nombre minimum d\'ascenseurs en service et équipe d\'intervention disponible 24h/24.'
  },
  {
    id: 13,
    title: 'Installation de boutons d\'appel intelligents',
    category: 'Commercial',
    description: 'Modernisation des boutons d\'appel dans un complexe de bureaux avec technologie tactile.',
    fullDescription: 'Remplacement des boutons d\'appel traditionnels par des systèmes tactiles intelligents dans un complexe de bureaux de 15 étages. Cette modernisation a permis d\'améliorer l\'expérience utilisateur et de réduire les pannes liées aux boutons mécaniques.',
    image: '/images/projects/BOUTON2.jpg',
    images: [
      '/images/projects/BOUTON2.jpg',
      '/images/projects/BOUTON -2.jpg',
      '/images/projects/BOUTON -3.jpg',
      '/images/projects/Bonton.jpg'
    ],
    client: 'Tour Eureka Business Center',
    year: '2024',
    location: 'Paris',
    duration: '4 semaines',
    features: [
      'Technologie tactile capacitive',
      'Rétroéclairage LED personnalisable',
      'Confirmation sonore et visuelle',
      'Résistance aux produits désinfectants',
      'Intégration avec système de gestion du bâtiment'
    ],
    challenge: 'Remplacer les boutons d\'appel sur 15 étages avec un minimum d\'interruption de service et assurer la compatibilité avec le système de contrôle existant.',
    solution: 'Utilisation d\'une interface adaptative compatible avec l\'ancien système et installation progressive étage par étage pendant les heures creuses.'
  },
  {
    id: 14,
    title: 'Rénovation ascenseur gare ferroviaire',
    category: 'Public',
    description: 'Rénovation complète des ascenseurs d\'une gare ferroviaire à forte affluence.',
    fullDescription: 'Rénovation complète de 4 ascenseurs dans une gare ferroviaire majeure accueillant plus de 50 000 voyageurs par jour. Le projet incluait le remplacement des cabines, des systèmes de traction et l\'installation d\'un système de gestion intelligent du trafic.',
    image: '/images/projects/TERMINUS NORD.jpg',
    images: [
      '/images/projects/TERMINUS NORD.jpg',
      '/images/projects/affichage ascenseur etage.jpg',
      '/images/projects/ascenseur interieure.jpg'
    ],
    client: 'SNCF Gares & Connexions',
    year: '2023',
    location: 'Paris Nord',
    duration: '16 semaines',
    features: [
      'Cabines renforcées anti-vandalisme',
      'Système de gestion de trafic adaptatif',
      'Information voyageurs en temps réel',
      'Accessibilité PMR complète',
      'Maintenance prédictive connectée'
    ],
    challenge: 'Rénover des ascenseurs dans un environnement à très forte affluence sans perturber le flux de voyageurs et avec des contraintes de sécurité élevées.',
    solution: 'Mise en place d\'un phasage précis des travaux avec maintien partiel du service et installation de signalétique dynamique pour guider les voyageurs vers les alternatives.'
  },
  {
    id: 15,
    title: 'Remplacement d\'éclairage dans cabines d\'ascenseurs',
    category: 'Maintenance',
    description: 'Programme de remplacement d\'éclairage traditionnel par LED dans 25 cabines d\'ascenseurs.',
    fullDescription: 'Mise en œuvre d\'un programme de modernisation énergétique visant à remplacer les systèmes d\'éclairage traditionnels par des solutions LED économes en énergie dans 25 cabines d\'ascenseurs d\'un campus universitaire.',
    image: '/images/projects/REMPLACMENT DE NEON.jpg',
    images: [
      '/images/projects/REMPLACMENT DE NEON.jpg',
      '/images/projects/TECH.jpg',
      '/images/projects/TECHNICIEN.jpg'
    ],
    client: 'Université de Lyon',
    year: '2024',
    location: 'Lyon',
    duration: '6 semaines',
    features: [
      'Éclairage LED à intensité variable',
      'Détection de présence intelligente',
      'Réduction de 70% de la consommation électrique',
      'Durée de vie multipliée par 5',
      'Éclairage de secours intégré'
    ],
    challenge: 'Remplacer les systèmes d\'éclairage dans 25 cabines avec un minimum d\'interruption de service dans un environnement universitaire actif.',
    solution: 'Développement d\'un kit de conversion rapide permettant de réaliser chaque remplacement en moins de 2 heures, avec interventions programmées en dehors des heures de cours.'
  }
];

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
}
