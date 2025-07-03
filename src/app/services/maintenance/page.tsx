import { Metadata } from 'next';
import { FaTools, FaClipboardCheck, FaClock, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Maintenance d&apos;Ascenseurs - DAMAD ASCENSEURS',
  description: 'Service d&apos;entretien préventif et curatif pour garantir la performance et la longévité de vos ascenseurs.',
};

const features = [
  {
    icon: <FaTools className="h-8 w-8 text-steel-blue" />,
    title: 'Maintenance préventive',
    description: 'Visites régulières selon un planning défini pour prévenir les pannes.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-steel-blue" />,
    title: 'Contrats sur mesure',
    description: 'Des formules adaptées à vos besoins et à votre budget.'
  },
  {
    icon: <FaClock className="h-8 w-8 text-steel-blue" />,
    title: 'Intervention rapide',
    description: 'Disponibilité 24/7 pour les interventions d&apos;urgence.'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8 text-steel-blue" />,
    title: 'Sécurité garantie',
    description: 'Respect des normes de sécurité en vigueur.'
  }
];

const maintenancePlans = [
  {
    name: 'Essentiel',
    price: 'À partir de 150€ HT/mois',
    features: [
      '2 visites techniques annuelles',
      'Vérification des éléments de sécurité',
      'Rapport d\'intervention',
      'Télésurveillance optionnelle'
    ],
    popular: false
  },
  {
    name: 'Confort',
    price: 'À partir de 250€ HT/mois',
    features: [
      '4 visites techniques annuelles',
      'Contrôle complet des équipements',
      'Pièces d\'usure incluses',
      'Télésurveillance incluse',
      'Temps d\'intervention garanti'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: 'Sur devis',
    features: [
      'Maintenance complète',
      'Intervention sous 2h 24/7',
      'Toutes pièces incluses',
      'Analyse des performances',
      'Rapport mensuel détaillé',
      'Accès prioritaire'
    ],
    popular: false
  }
];

export default function MaintenancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/services/maintenance.jpg"
            alt="Maintenance d&apos;ascenseur"
            fill
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Maintenance d&apos;Ascenseurs
          </h1>
          <p className="mt-6 text-xl text-red-100 max-w-3xl">
            Un entretien régulier pour garantir la sécurité, la fiabilité et la longévité de vos installations.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Notre offre de maintenance
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Des solutions adaptées à chaque besoin pour une tranquillité d&apos;esprit optimale.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-md bg-steel-blue text-white">
                      {feature.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nos formules de maintenance
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choisissez la formule qui correspond le mieux à vos besoins.
            </p>
          </div>

          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
            {maintenancePlans.map((plan) => (
              <div key={plan.name} className={`border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 ${plan.popular ? 'border-red-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-steel-blue text-white text-sm font-semibold tracking-wide text-center py-1 rounded-t-lg">
                    Le plus populaire
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{plan.name}</h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  </p>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${plan.popular ? 'bg-steel-blue text-white hover:bg-steel-blue/90' : 'text-steel-blue bg-white hover:bg-gray-50'} shadow-sm`}
                    >
                      Souscrire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-steel-blue">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Prêt à sécuriser votre ascenseur ?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-red-100">
            Nos experts sont à votre disposition pour étudier vos besoins et vous proposer la meilleure solution de maintenance.
          </p>
          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-steel-blue bg-white hover:bg-gray-50 sm:w-auto"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
