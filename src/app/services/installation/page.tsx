import { FaClipboardCheck, FaTools, FaHandshake } from 'react-icons/fa';
import { GiElevator } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation Ascenseur - DAMAD ASCENSEURS',
  description: 'Installation sur mesure d\'ascenseurs neufs. Conception, réalisation et mise en service de votre futur ascenseur par des experts.',
};

const features = [
  {
    icon: <GiElevator className="h-8 w-8 text-blue-600" />,
    title: 'Tous types d&#39;ascenseurs',
    description: 'Électriques, hydrauliques, sans local technique, PMR, etc.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-blue-600" />,
    title: 'Étude personnalisée',
    description: 'Analyse de vos besoins et proposition sur mesure.'
  },
  {
    icon: <FaHandshake className="h-8 w-8 text-blue-600" />,
    title: 'Haute technologie',
    description: 'Équipements dernier cri pour des performances optimales.'
  },
  {
    icon: <FaTools className="h-8 w-8 text-blue-600" />,
    title: 'Installation clé en main',
    description: 'De la conception à la mise en service, nous gérons tout.'
  }
];

const installationSteps = [
  {
    step: '1',
    title: 'Étude de faisabilité',
    description: 'Analyse technique et devis personnalisé.'
  },
  {
    step: '2',
    title: 'Conception',
    description: 'Plans détaillés et choix des équipements.'
  },
  {
    step: '3',
    title: 'Installation',
    description: 'Mise en œuvre par nos équipes qualifiées.'
  },
  {
    step: '4',
    title: 'Mise en service',
    description: 'Tests et formation des utilisateurs.'
  },
  {
    step: '5',
    title: 'Suivi',
    description: 'Maintenance et SAV dédié.'
  }
];

const elevatorTypes = [
  {
    name: 'Ascenseur électrique',
    description: 'Idéal pour les bâtiments de moyenne et grande hauteur.',
    features: ['Faible consommation', 'Silencieux', 'Entretien réduit']
  },
  {
    name: 'Ascenseur hydraulique',
    description: 'Parfait pour les faibles hauteurs et charges lourdes.',
    features: ['Puissant', 'Fiabilité éprouvée', 'Coût d&#39;installation réduit']
  },
  {
    name: 'Ascenseur sans local technique',
    description: 'Solution compacte sans besoin de local dédié.',
    features: ['Gain de place', 'Installation simplifiée', 'Design moderne']
  },
  {
    name: 'Ascenseur PMR',
    description: 'Conforme aux normes d&#39;accessibilité.',
    features: ['Normes PMR', 'Largeur de porte adaptée', 'Boutons en braille']
  }
];

export default function Installation() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/services/installation.jpg"
            alt="Installation d&#39;un nouvel ascenseur"
            fill
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Installation d&#39;Ascenseurs
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl">
            Des solutions d&#39;ascenseurs sur mesure pour tous les types de bâtiments, de la conception à la mise en service.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Une installation clé en main
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Notre équipe d&#39;experts vous accompagne dans la réalisation de votre projet d&#39;ascenseur, de l&#39;étude technique à la mise en service. Nous mettons notre savoir-faire à votre service pour vous proposer des solutions adaptées à vos besoins et à votre budget.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
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

      {/* Process Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Notre processus d&apos;installation
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Un accompagnement personnalisé à chaque étape de votre projet.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-x-8 md:gap-y-10">
              {installationSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white text-xl font-bold">
                    {step.step}
                  </div>
                  <p className="mt-5 text-lg font-medium text-gray-900">{step.title}</p>
                  <p className="mt-2 text-base text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Elevator Types */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nos solutions d&apos;ascenseurs
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choisissez la solution la plus adaptée à vos besoins.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {elevatorTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{type.name}</h3>
                  <p className="mt-2 text-gray-600">{type.description}</p>
                  <ul className="mt-4 space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mt-1 mr-2 flex-shrink-0">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="text-base font-medium text-blue-600 hover:text-blue-500"
                    >
                      En savoir plus<span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Projet d&apos;installation d&apos;ascenseur ?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Nos experts sont à votre écoute pour étudier votre projet et vous proposer la meilleure solution.
          </p>
          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
