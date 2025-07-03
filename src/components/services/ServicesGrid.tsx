'use client';

import { FaTools, FaTachometerAlt, FaSyncAlt, FaWrench, FaClipboardCheck, FaQuestion } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Installation',
    description: 'Installation complète d\'ascenseurs neufs adaptés à vos besoins spécifiques et aux normes en vigueur.',
    icon: <FaTools className="w-6 h-6" />,
    image: '/images/services/installation.jpg',
    color: 'blue-500',
    slug: 'installation',
    features: [
      'Étude personnalisée de votre projet',
      'Choix des matériaux et technologies',
      'Installation par des experts certifiés',
      'Mise en service et formation'
    ]
  },
  {
    id: 2,
    title: 'Maintenance',
    description: 'Contrats de maintenance préventive et corrective pour assurer la longévité de votre ascenseur.',
    icon: <FaTachometerAlt className="w-6 h-6" />,
    image: '/images/services/maintenance.jpg',
    color: 'emerald-500',
    slug: 'maintenance',
    features: [
      'Visites techniques régulières',
      'Dépannage 24/7',
      'Pièces détachées d\'origine',
      'Rapports d\'intervention détaillés'
    ]
  },
  {
    id: 3,
    title: 'Modernisation',
    description: 'Mise à niveau de votre installation existante avec les dernières technologies pour plus de confort et de sécurité.',
    icon: <FaSyncAlt className="w-6 h-6" />,
    image: '/images/services/modernization.jpg',
    color: 'purple-500',
    slug: 'modernisation',
    features: [
      'Audit complet de l\'existant',
      'Solutions sur mesure',
      'Minimisation des travaux',
      'Amélioration des performances'
    ]
  },
  {
    id: 4,
    slug: 'depannage',
    title: 'Dépannage',
    description: 'Intervention rapide et efficace pour tous types de pannes d\'ascenseurs, 24h/24 et 7j/7.',
    icon: <FaWrench className="w-6 h-6" />,
    image: '/images/services/repair.jpg',
    color: 'red-500',
    features: [
      'Disponibilité permanente',
      'Techniciens qualifiés',
      'Diagnostic précis',
      'Réparation dans les meilleurs délais'
    ]
  },
  {
    id: 5,
    slug: 'controle-technique',
    title: 'Contrôle Technique',
    description: 'Vérification régulière de la conformité de votre installation aux normes de sécurité en vigueur.',
    icon: <FaClipboardCheck className="w-6 h-6" />,
    image: '/images/services/inspection.jpg',
    color: 'amber-500',
    features: [
      'Contrôles réglementaires',
      'Rapports détaillés',
      'Conseils d\'amélioration',
      'Mise en conformité'
    ]
  },
  {
    id: 6,
    slug: 'conseil-expertise',
    title: 'Conseil & Étude',
    description: 'Expertise et accompagnement pour tous vos projets liés aux ascenseurs et monte-charges.',
    icon: <FaQuestion className="w-6 h-6" />,
    image: '/images/services/consulting.jpg',
    color: 'indigo-500',
    features: [
      'Étude de faisabilité',
      'Assistance à maîtrise d\'ouvrage',
      'Optimisation des coûts',
      'Suivi de projet'
    ]
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Solutions Complètes
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour répondre à tous vos besoins en matière d&apos;ascenseurs, de l&apos;installation à la maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
