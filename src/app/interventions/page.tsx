import InterventionsHero from '@/components/interventions/InterventionsHero';
import InterventionsForm from '@/components/interventions/InterventionsForm';
import InterventionsInfo from '@/components/interventions/InterventionsInfo';

export const metadata = {
  title: 'Demande d\'Intervention - DAMAD',
  description: 'Besoin d\'une intervention rapide pour votre ascenseur ? Faites une demande en ligne et nos techniciens interviendront dans les plus brefs délais.',
};

export default function InterventionsPage() {
  return (
    <main>
      <InterventionsHero />
      <InterventionsInfo />
      <InterventionsForm />
    </main>
  );
}
