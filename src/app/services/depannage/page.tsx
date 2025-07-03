import { FaTools, FaClock, FaPhone, FaClipboardCheck } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Dépannage Ascenseur - DAMAD ASCENSEURS',
  description: 'Service de dépannage d\'ascenseur 24/7. Intervention rapide par des techniciens qualifiés pour tous types de pannes.',
};

const features = [
  {
    icon: <FaClock className="h-8 w-8 text-blue-600" />,
    title: 'Intervention rapide',
    description: 'Disponibles 24h/24 et 7j/7 pour des interventions d\'urgence.'
  },
  {
    icon: <FaTools className="h-8 w-8 text-blue-600" />,
    title: 'Techniciens qualifiés',
    description: 'Des experts formés aux dernières technologies des ascenseurs.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-blue-600" />,
    title: 'Pièces détachées',
    description: 'Stock important de pièces détachées pour une réparation immédiate.'
  },
  {
    icon: <FaPhone className="h-8 w-8 text-blue-600" />,
    title: 'Zone d\'intervention',
    description: 'Nous intervenons dans toute la région Île-de-France.'
  }
];

const commonIssues = [
  "Ascenseur bloqué entre deux étages",
  "Portes qui ne s'ouvrent ou ne se ferment pas",
  "Boutons d'appel défectueux",
  "Problèmes de niveaux",
  "Bruits anormaux",
  "Panne électrique",
  "Problème de porte palière",
  "Défaut de sécurité"
];

export default function Depannage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/services/depannage.jpg"
            alt="Technicien en intervention sur un ascenseur"
            fill
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Dépannage d&apos;Ascenseur
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Un service d&apos;urgence 24/7 pour toutes les pannes d&apos;ascenseurs, avec des techniciens qualifiés et des pièces détachées disponibles.
          </p>
          <div className="mt-10">
            <Link
              href="tel:+33123456789"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              <FaPhone className="mr-2" />
              Urgence 24/7 : 01 23 45 67 89
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Notre service de dépannage
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Une équipe réactive et compétente pour tous vos problèmes d&apos;ascenseur.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Common Issues Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Pannes fréquentes que nous réparons
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Notre équipe d&apos;experts est disponible 24h/24 et 7j/7 pour intervenir rapidement en cas de panne d&apos;ascenseur. Nous disposons d&apos;un stock important de pièces détachées pour une réparation rapide et efficace.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Types de pannes</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-2">
                      {commonIssues.map((issue, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 text-blue-500 mr-2">•</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-red-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Urgence Ascenseur ?</span>
            <span className="block text-red-100">Nous intervenons rapidement !</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-10"
              >
                <FaPhone className="mr-2" />
                Appel d&apos;urgence
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
