import { Metadata } from 'next';
import HeroSection from '@/components/depannage/HeroSection';
import FeaturesSection from '@/components/depannage/FeaturesSection';
import CommonIssuesSection from '@/components/depannage/CommonIssuesSection';
import ContractSection from '@/components/depannage/ContractSection';
import InterventionsSection from '@/components/depannage/InterventionsSection';
import RealisationsSection from '@/components/depannage/RealisationsSection';
import FAQSection from '@/components/depannage/FAQSection';
import OtherServicesSection from '@/components/depannage/OtherServicesSection';


export const metadata: Metadata = {
  title: 'Dépannage Appareils d\'Accessibilité - DAMAD',
  description: 'Dépannage sur mesure d\'appareils d\'accessibilité. Les Experts de DAMAD sont à votre service pour tout dépannage',
};

export default function Depannage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <CommonIssuesSection />
      <ContractSection />
      <InterventionsSection />
      <RealisationsSection />
      <FAQSection />
      <OtherServicesSection />
    </div>
  );
}
