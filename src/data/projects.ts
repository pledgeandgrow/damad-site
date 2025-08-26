// Project images with descriptive alt text for accessibility

export const projectImages = [
  { path: '/images/realisations/rea1.jpg', alt: 'Ascenseur moderne avec portes en acier inoxydable dans un hall d\'immeuble' },
  { path: '/images/realisations/rea2.jpg', alt: 'Cabine d\'ascenseur avec finition miroir et éclairage LED' },
  { path: '/images/realisations/rea3.jpg', alt: 'Ascenseur panoramique avec vue sur l\'extérieur du bâtiment' },
  { path: '/images/realisations/rea5.jpg', alt: 'Installation d\'un monte-charge industriel dans un entrepôt' },
  { path: '/images/realisations/rea6.jpg', alt: 'Ascenseur résidentiel avec panneau de commande tactile' },
  { path: '/images/realisations/rea7.jpg', alt: 'Modernisation d\'un ascenseur ancien avec nouvelle technologie' },
  { path: '/images/realisations/rea8.jpg', alt: 'Ascenseur extérieur avec structure vitrée pour un bâtiment public' },
  { path: '/images/realisations/realisation1.jpg', alt: 'Cabine d\'ascenseur spacieuse avec éclairage encastré' },
  { path: '/images/realisations/realisation2.jpg', alt: 'Monte-escalier installé dans une résidence privée' },
  { path: '/images/realisations/realisation4.png', alt: 'Ascenseur avec portes automatiques et système de sécurité' },
  { path: '/images/realisations/realisation5.png', alt: 'Plateforme élévatrice pour personne à mobilité réduite' },
  { path: '/images/realisations/realisation6.png', alt: 'Ascenseur de service avec grande capacité de charge' },
  { path: '/images/realisations/realisation7.png', alt: 'Cabine d\'ascenseur avec finition bois et miroir' },
  { path: '/images/realisations/realisation8.png', alt: 'Ascenseur vitré dans un centre commercial' },
  { path: '/images/realisations/realisation9.png', alt: 'Monte-charge pour restaurant avec portes battantes' },
  { path: '/images/realisations/realisation10.png', alt: 'Ascenseur résidentiel compact pour maison individuelle' },
  { path: '/images/realisations/realisation11.png', alt: 'Système d\'ascenseur hydraulique pour petit immeuble' },
  { path: '/images/realisations/realisation12.png', alt: 'Ascenseur avec design contemporain et éclairage LED' },
  { path: '/images/realisations/realisation13.png', alt: 'Monte-escalier courbe adapté à un escalier en colimaçon' },
  { path: '/images/realisations/realisation14.png', alt: 'Ascenseur extérieur avec protection contre les intempéries' },
  { path: '/images/realisations/realisation15.png', alt: 'Cabine d\'ascenseur avec panneau de commande accessible' },
  { path: '/images/realisations/realisation16.png', alt: 'Ascenseur panoramique dans un hôtel de luxe' },
  { path: '/images/realisations/realisation17.png', alt: 'Installation d\'un monte-plats dans une cuisine professionnelle' },
  { path: '/images/realisations/realisation18.png', alt: 'Ascenseur avec système d\'économie d\'énergie' },
  { path: '/images/realisations/realisation19.png', alt: 'Modernisation d\'un ascenseur dans un immeuble historique' },
  { path: '/images/realisations/realisation20.png', alt: 'Ascenseur avec système de contrôle d\'accès sécurisé' },
  { path: '/images/realisations/realisation22.png', alt: 'Monte-charge pour véhicules dans un parking souterrain' },
  { path: '/images/realisations/realisation23.png', alt: 'Ascenseur avec finition luxueuse pour immeuble haut de gamme' },
  { path: '/images/realisations/realisation24.png', alt: 'Plateforme élévatrice pour scène de théâtre' },
  { path: '/images/realisations/realisation25.png', alt: 'Ascenseur avec système de communication d\'urgence' },
  { path: '/images/realisations/realisation26.png', alt: 'Monte-escalier droit pour escalier intérieur' },
  { path: '/images/realisations/realisation27.png', alt: 'Cabine d\'ascenseur avec design personnalisé' },
  { path: '/images/realisations/realisation28.png', alt: 'Ascenseur pour petit immeuble résidentiel' },
  { path: '/images/realisations/realisation29.png', alt: 'Monte-charge industriel pour usine de production' },
  { path: '/images/realisations/realisation30.png', alt: 'Ascenseur avec système de ventilation amélioré' },
  { path: '/images/realisations/realisation31.png', alt: 'Installation d\'un ascenseur dans un espace restreint' },
  { path: '/images/realisations/realisation32.png', alt: 'Ascenseur avec portes vitrées et cabine transparente' },
  { path: '/images/realisations/realisation33.png', alt: 'Modernisation complète d\'un système d\'ascenseur ancien' }
];

// Function to get all images
export function getAllImages() {
  return projectImages.map(item => item.path);
}

// Function to get images by category (keeping for compatibility)
export function getProjectsByCategory() {
  return projectImages.map((item, index) => {
    return {
      id: index + 1,
      image: item.path,
      alt: item.alt
    };
  });
}
