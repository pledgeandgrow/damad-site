import InterventionsHero from '@/components/interventions/InterventionsHero';
import InterventionsForm from '@/components/interventions/InterventionsForm';

export const metadata = {
  title: 'Demande d\'Intervention - DMD Ascenseur',
  description: 'Besoin d\'une intervention rapide pour votre appareil d\'accessibilité ? Faites une demande en ligne et nos techniciens interviendront dans les plus brefs délais.',
};

export default function InterventionsPage() {
  return (
    <main>
      <InterventionsHero />
      <InterventionsForm />
    </main>
  );
}
