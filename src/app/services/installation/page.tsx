import { Metadata } from 'next';
import HeroSection from '@/components/installation/HeroSection';
import FeaturesSection from '@/components/installation/FeaturesSection';
import SolutionsSection from '@/components/installation/SolutionsSection';
import ProcessSection from '@/components/installation/ProcessSection';
import CTASection from '@/components/installation/CTASection';

export const metadata: Metadata = {
  title: 'Installation Appareils d\'Accessibilité - DMD Ascenseur',
  description: 'Installation sur mesure d\'appareils d\'accessibilité neufs. Conception, réalisation et mise en service de votre futur équipement par des experts.',
};

export default function Installation() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
