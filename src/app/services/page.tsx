import Link from 'next/link';
import ServiceCard from '@/components/services/ServiceCard';
import { Metadata } from 'next';
import MobileServiceCarousel from '@/components/services/MobileServiceCarousel';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceContrat from '@/components/services/ServiceContrat';
import ServiceMaintenance from '@/components/services/ServiceMaintenance';

export const metadata: Metadata = {
  title: 'Nos Services - DAMAD',
  description: 'Découvrez nos services professionnels pour ascenseurs : réparation, maintenance et modernisation.',
};



export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Maintenance',
      description: 'Contrats de maintenance préventive pour garantir la longévité de votre ascenseur.',
      icon: '🔧',
      image: '/images/site/5.png',
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
      image: '/images/site/3.png',
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
      image: '/images/site/2.png',
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
      image: '/images/site/6.png',
      color: 'from-[#2b3343] to-[#3d4759]',
      features: [
        'Diagnostic précis',
        'Réparation rapide',
        'Pièces d\'origine',
        'Garantie sur les réparations'
      ],
      slug: 'reparation'
    },
    {
      id: 5,
      title: 'Modernisation',
      description: 'Mise à niveau de vos installations pour améliorer la sécurité, l\'efficacité énergétique et le confort.',
      icon: '🔄',
      image: '/images/site/5.png',
      color: 'from-[#2b3343] to-[#3d4759]',
      features: [
        'Mise aux normes',
        'Économies d\'\u00e9nergie',
        'Amélioration du confort',
        'Valorisation du patrimoine'
      ],
      slug: 'modernisation'
    },
    {
      id: 6,
      title: 'Contrôle Technique',
      description: 'Inspections réglementaires et audits de sécurité pour garantir la conformité de vos installations.',
      icon: '📋',
      image: '/images/site/6.png',
      color: 'from-[#2b3343] to-[#3d4759]',
      features: [
        'Conformité réglementaire',
        'Prévention des risques',
        'Rapports détaillés',
        'Certification officielle'
      ],
      slug: 'controle-technique'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Service Hero Section */}
      <ServiceHero />
      
      {/* Service Introduction Components */}
      <ServiceIntro />
      <ServiceContrat />
      <ServiceMaintenance />
      
      {/* Main Services Section */}
      <div className="py-16 sm:py-24">
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
        
        {/* Desktop View - 3 cards per row */}
        <div className="hidden md:grid mx-auto mt-16 max-w-7xl grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="block h-full">
              <ServiceCard service={service} index={index} />
            </Link>
          ))}
        </div>

        {/* Mobile View - Carousel with 1 card */}
        <div className="md:hidden relative mt-16 sm:mt-20">
          <MobileServiceCarousel services={services} />  
        </div>
        
        {/* La section "Demander un devis personnalisé" a été supprimée */}
        </div>
      </div>
    </div>
  );
}
