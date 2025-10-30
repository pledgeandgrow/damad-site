import PartenariatContext from '@/components/partenariat/PartenariatContext'; 
import PartenariatConditions from '@/components/partenariat/PartenariatConditions';
import PartenariatForm from '@/components/partenariat/PartenariatForm';

export const metadata = {
  title: 'Partenariat - DMD Ascenseur',
  description: 'Découvrez les opportunités de partenariat avec DMD Ascenseur, votre expert en appareils d\'accessibilité. Ensemble, développons des solutions innovantes et durables pour vos projets d\'appareils d\'accessibilité.',
};

export default function PartenariatPage() {
  return (
    <main>
      <div>
        <PartenariatContext />
      </div>
      <PartenariatConditions />
      <PartenariatForm />
    </main>
  );
}
