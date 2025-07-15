import Link from 'next/link';
import ServiceCard from '@/components/services/ServiceCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Services - Damad Ascenseurs',
  description: 'Découvrez nos services professionnels pour ascenseurs : réparation, maintenance et modernisation.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Maintenance',
      description: 'Contrats de maintenance préventive pour garantir la longévité de votre ascenseur.',
      icon: '🔧',
      image: '/images/5.png',
      color: 'from-[#2b3343] to-[#3d4759]',
      features: [
        'Visites régulières',
        'Prévention des pannes',
        'Réactivité optimale',
        'Rapports d\'intervention'
      ],
      slug: 'maintenance'
    },
    {
      id: 2,
      title: 'Dépannage',
      description: 'Service d\'urgence 24/7 pour tous types de pannes d\'ascenseur.',
      icon: '🔧',
      image: '/images/3.png',
      color: 'from-[#2b3343] to-[#3d4759]',
      features: [
        'Intervention rapide',
        'Techniciens qualifiés',
        'Pièces détachées disponibles',
        'Rapport d\'intervention'
      ],
      slug: 'depannage'
    },
    {
      id: 3,
      title: 'Installation',
      description: 'Installation complète et sur mesure de votre nouvel ascenseur par nos experts certifiés.',
      icon: '🏗️',
      image: '/images/2.png',
      color: 'from-[#2b3343] to-[#3d4759]',
      features: [
        'Étude personnalisée',
        'Installation clé en main',
        'Mise en service',
        'Formation utilisateur'
      ],
      slug: 'installation'
    },
    {
      id: 4,
      title: 'Réparation',
      description: 'Réparation rapide et efficace de tous types de pannes d\'ascenseur.',
      icon: '⚙️',
      image: '/images/6.png',
      color: 'from-[#2b3343] to-[#3d4759]',
      features: [
        'Diagnostic précis',
        'Réparation rapide',
        'Pièces d\'origine',
        'Garantie sur les réparations'
      ],
      slug: 'reparation'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16">
          <span className="inline-block text-[#2b3343] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-gray-100 px-3 py-1 rounded-full">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Solutions sur Mesure</h2>
          <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Découvrez nos services conçus pour garantir la sécurité, la fiabilité et la longévité de votre installation : ascenseurs, EPMR, monte-charges, etc.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="block h-full">
              <ServiceCard service={service} index={index} />
            </Link>
          ))}
        </div>
        
        <div className="mt-16 sm:mt-20 text-center">
          <Link 
            href="/contact?subject=demande-de-devis" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Demander un devis personnalisé
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
