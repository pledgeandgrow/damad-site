import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export const metadata: Metadata = {
  title: 'Contact - DAMAD',
  description: 'Contactez-nous pour toute demande de devis ou information sur nos services de réparation, maintenance et modernisation d\'ascenseurs.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactMap />
      <ContactForm />
    </div>
  );
}
