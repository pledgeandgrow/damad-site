import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact - Damad Ascenseurs',
  description: 'Contactez-nous pour toute demande de devis ou information sur nos services de réparation, maintenance et modernisation d\'ascenseurs.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gray-500 opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contactez-nous
          </h1>
          Vous avez des questions ou souhaitez obtenir plus d&apos;informations sur nos services ? Notre équipe est là pour vous aider. pour vous apporter une réponse rapide et personnalisée.
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Nous contacter</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Vous pouvez également nous contacter par téléphone au <a href="tel:+33123456789" className="font-medium text-blue-600 hover:text-blue-500">01 23 45 67 89</a> ou par email à <a href="mailto:contact@damad-ascenseurs.com" className="font-medium text-blue-600 hover:text-blue-500">contact@damad-ascenseurs.com</a> pour discuter de votre projet.
              </p>
              
              <ContactInfo />
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:pl-8 lg:pt-4">
            <div className="rounded-2xl bg-gray-50 p-8 shadow-xl sm:p-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Envoyez-nous un message</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Tous les champs marqués d&apos;un astérisque (*) sont obligatoires.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
