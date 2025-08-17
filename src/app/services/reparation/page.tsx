import { Metadata } from 'next';
import HeroSection from '@/components/reparation/HeroSection';
import ServicesSection from '@/components/reparation/ServicesSection';
import ProcessSection from '@/components/reparation/ProcessSection';
import CTASection from '@/components/reparation/CTASection';
import FeaturesSection from '@/components/reparation/FeaturesSection';

export const metadata: Metadata = {
  title: "Réparation d'Appareils d'Accessibilité - DAMAD",
  description: "Service professionnel de réparation d'appareils d'accessibilité avec diagnostics précis et interventions rapides pour une remise en service fiable de vos équipements.",
};

export default function ReparationPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
