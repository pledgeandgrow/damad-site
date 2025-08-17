import { Metadata } from 'next';
import HeroSection from '@/components/maintenance/HeroSection';
import FeaturesSection from '@/components/maintenance/FeaturesSection';
import ContractsSection from '@/components/maintenance/ContractsSection';
import ThreeAreasSection from '@/components/maintenance/ThreeAreasSection';
import FAQSection from '@/components/maintenance/FAQSection';

export const metadata: Metadata = {
  title: 'Maintenance d\'Appareils d\'Accessibilité - DAMAD',
  description: 'Service d\'entretien préventif et curatif pour garantir la performance et la longévité de vos appareils d\'accessibilité.',
};

export default function MaintenancePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <ContractsSection />
      <ThreeAreasSection />
      <FAQSection />
    </div>
  );
}

