// Simple image array for realisations

export const projectImages = [
  '/images/realisations/rea1.jpg',
  '/images/realisations/rea2.jpg',
  '/images/realisations/rea3.jpg',
  '/images/realisations/rea5.jpg',
  '/images/realisations/rea6.jpg',
  '/images/realisations/rea7.jpg',
  '/images/realisations/rea8.jpg',
  '/images/realisations/realisation1.jpg',
  '/images/realisations/realisation2.jpg',
  '/images/realisations/realisation4.png',
  '/images/realisations/realisation5.png',
  '/images/realisations/realisation6.png',
  '/images/realisations/realisation7.png',
  '/images/realisations/realisation8.png',
  '/images/realisations/realisation9.png',
  '/images/realisations/realisation10.png',
  '/images/realisations/realisation11.png',
  '/images/realisations/realisation12.png',
  '/images/realisations/realisation13.png',
  '/images/realisations/realisation14.png',
  '/images/realisations/realisation15.png',
  '/images/realisations/realisation16.png',
  '/images/realisations/realisation17.png',
  '/images/realisations/realisation18.png',
  '/images/realisations/realisation19.png',
  '/images/realisations/realisation20.png',
  '/images/realisations/realisation22.png',
  '/images/realisations/realisation23.png',
  '/images/realisations/realisation24.png',
  '/images/realisations/realisation25.png',
  '/images/realisations/realisation26.png',
  '/images/realisations/realisation27.png',
  '/images/realisations/realisation28.png',
  '/images/realisations/realisation29.png',
  '/images/realisations/realisation30.png',
  '/images/realisations/realisation31.png',
  '/images/realisations/realisation32.png',
  '/images/realisations/realisation33.png',
  '/images/realisations/realisation34.png',
  '/images/realisations/realisation35.png'
];

// Function to get all images
export function getAllImages() {
  return projectImages;
}

// Function to get images by category (keeping for compatibility)
export function getProjectsByCategory() {
  return projectImages.map((image, index) => ({
    id: index + 1,
    image
  }));
}
