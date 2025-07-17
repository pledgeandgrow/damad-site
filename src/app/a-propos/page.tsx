import AboutHero from '@/components/about/AboutHero';
import Mission from '@/components/about/Mission';
import History from '@/components/about/History';
import Team from '@/components/about/Team';

export const metadata = {
  title: 'À Propos - DAMAD',
  description: 'Découvrez DAMAD, votre partenaire de confiance pour la sécurité, la performance et la longévité de vos ascenseurs. Notre équipe d\'experts vous accompagne dans tous vos projets.',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Mission />
      <History />
      <Team />
    </main>
  );
}
