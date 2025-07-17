import { Metadata } from 'next';
import SupportHero from '@/components/support/SupportHero';
import SupportFAQ from '@/components/support/SupportFAQ';
import SupportContactForm from '@/components/support/SupportContactForm';
import SupportResources from '@/components/support/SupportResources';
import SupportTicketTracker from '@/components/support/SupportTicketTracker';
import SupportModels from '@/components/support/SupportModels';

export const metadata: Metadata = {
  title: 'Support - DAMAD',
  description: 'Accédez à notre support technique, ressources utiles, FAQ et suivez vos tickets pour tous vos besoins en matière d\'ascenseurs.',
};

export default function SupportPage() {
  return (
    <div className="bg-white">
      <SupportHero />
      <SupportFAQ />
      <SupportResources />
      <SupportModels />
      <SupportTicketTracker />
      <SupportContactForm />
    </div>
  );
}
