import AboutHero from '@/components/about/AboutHero';
import AboutContext from '@/components/about/AboutContext';
import History from '@/components/about/History';

export const metadata = {
  title: 'À Propos - DAMAD',
  description: 'Découvrez DAMAD, votre partenaire de confiance pour la sécurité, la performance et la longévité de vos appareils d\'accessibilité. Notre équipe d\'experts vous accompagne dans tous vos projets.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <History />
      <AboutContext />
    </main>
  );
}
