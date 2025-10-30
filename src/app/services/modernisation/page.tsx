import { Metadata } from 'next';
import HeroSection from '@/components/modernisation/HeroSection';
import DescriptionSection from '@/components/modernisation/DescriptionSection';
import FeaturesSection from '@/components/modernisation/FeaturesSection';
import ProcessStepsSection from '@/components/modernisation/ProcessStepsSection';
import DigitalPlatformSection from '@/components/modernisation/DigitalPlatformSection';
import GallerySection from '@/components/modernisation/GallerySection';

export const metadata: Metadata = {
  title: "Modernisation d'Appareils d'Accessibilité - DMD Ascenseur",
  description: "Services de modernisation d'appareils d'accessibilité pour améliorer la sécurité, l'efficacité énergétique et le confort de vos installations.",
};

export default function ModernisationPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <ProcessStepsSection />
      <DigitalPlatformSection />
      <GallerySection />
    </div>
  );
}
