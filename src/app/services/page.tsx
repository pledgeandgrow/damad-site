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
      title: 'Installation',
      description: 'Installation complète et sur mesure de votre nouvel ascenseur par nos experts certifiés.',
      icon: '🏗️',
      image: '/images/2.png',
      color: 'from-steel-blue to-steel-blue/90',
      features: [
        'Étude personnalisée',
        'Installation clé en main',
        'Mise en service',
        'Formation utilisateur'
      ],
      slug: 'installation'
    },
    {
      id: 2,
      title: 'Dépannage',
      description: 'Service d\'urgence 24/7 pour tous types de pannes d\'ascenseur.',
      icon: '🔧',
      image: '/images/3.png',
      color: 'from-steel-blue to-steel-blue/90',
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
      title: 'Contrôle Technique',
      description: 'Vérification complète de la conformité et de la sécurité de votre ascenseur.',
      icon: '✅',
      image: '/images/4.png',
      color: 'from-steel-blue to-steel-blue/90',
      features: [
        'Contrôle réglementaire',
        'Rapport détaillé',
        'Conformité aux normes',
        'Préconisations'
      ],
      slug: 'controle-technique'
    },
    {
      id: 4,
      title: 'Maintenance',
      description: 'Contrats de maintenance préventive pour garantir la longévité de votre ascenseur.',
      icon: '🔧',
      image: '/images/5.png',
      color: 'from-steel-blue to-steel-blue/90',
      features: [
        'Visites régulières',
        'Prévention des pannes',
        'Réactivité optimale',
        'Rapports d\'intervention'
      ],
      slug: 'maintenance'
    },
    {
      id: 5,
      title: 'Réparation',
      description: 'Réparation rapide et efficace de tous types de pannes d\'ascenseur.',
      icon: '⚙️',
      image: '/images/6.png',
      color: 'from-steel-blue to-steel-blue/90',
      features: [
        'Diagnostic précis',
        'Réparation rapide',
        'Pièces d\'origine',
        'Garantie sur les réparations'
      ],
      slug: 'reparation'
    },
    {
      id: 6,
      title: 'Modernisation',
      description: 'Mise à niveau de votre ascenseur pour améliorer ses performances et son efficacité énergétique.',
      icon: '🔄',
      image: '/images/7.png',
      color: 'from-steel-blue to-steel-blue/90',
      features: [
        'Économie d\'énergie',
        'Confort amélioré',
        'Design moderne',
        'Conformité aux normes actuelles'
      ],
      slug: 'modernisation'
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Des solutions complètes pour tous vos besoins en matière d&apos;ascenseurs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="block h-full">
              <ServiceCard service={service} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
