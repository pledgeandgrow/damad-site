import PartenariatHero from '@/components/partenariat/PartenariatHero';
import PartenariatContext from '@/components/partenariat/PartenariatContext'; 
import PartenariatConditions from '@/components/partenariat/PartenariatConditions';
import PartenariatForm from '@/components/partenariat/PartenariatForm';

export const metadata = {
  title: 'Partenariat - DAMAD',
  description: 'Découvrez les opportunités de partenariat avec DAMAD, votre expert en appareils d\'accessibilité. Ensemble, développons des solutions innovantes et durables pour vos projets d\'appareils d\'accessibilité.',
};

export default function PartenariatPage() {
  return (
    <main>
      <PartenariatHero />
      <PartenariatContext />
      <PartenariatConditions />
      <PartenariatForm />
    </main>
  );
}
