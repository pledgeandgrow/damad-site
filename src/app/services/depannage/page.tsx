import { FaTools, FaClock, FaPhone, FaClipboardCheck } from 'react-icons/fa';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dépannage Ascenseur - DAMAD ASCENSEURS',
  description: 'Service de dépannage d&apos;ascenseur 24/7. Intervention rapide par des techniciens qualifiés pour tous types de pannes.'
};

const features = [
  {
    icon: <FaClock className="h-8 w-8 text-white" />,
    title: 'Intervention rapide',
    description: 'Disponibles 24h/24 et 7j/7 pour des interventions d\'urgence.'
  },
  {
    icon: <FaTools className="h-8 w-8 text-white" />,
    title: 'Techniciens qualifiés',
    description: 'Des experts formés aux dernières technologies des ascenseurs.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-white" />,
    title: 'Pièces détachées',
    description: 'Stock important de pièces détachées pour une réparation immédiate.'
  },
  {
    icon: <FaPhone className="h-8 w-8 text-white" />,
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

      {/* Features Section */}
      <div className="py-20 bg-white sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
              Service d&apos;urgence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Notre service de dépannage
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Une équipe réactive et compétente pour tous vos problèmes d&apos;ascenseur.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:translate-y-[-5px] hover:border-[#2b3343] h-full">
                  <div className="h-2 bg-[#2b3343]"></div>
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 mx-auto bg-[#2b3343] transform transition-transform group-hover:scale-110 shadow-md">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#2b3343] group-hover:text-[#3d4759] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#2b3343] mx-auto mb-3"></div>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Issues Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
              Expertise technique
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Pannes fréquentes que nous réparons
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Notre équipe d&apos;experts est disponible 24h/24 et 7j/7 pour intervenir rapidement en cas de panne d&apos;ascenseur.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#2b3343] mb-4">
                Types de pannes que nous réparons
              </h3>
              <p className="text-gray-600 mb-6">
                Nous disposons d&apos;un stock important de pièces détachées pour une réparation rapide et efficace de tous types de pannes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="flex items-start p-3 rounded-lg border border-gray-100 hover:border-[#2b3343] transition-colors duration-300">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 rounded-full bg-[#2b3343] flex items-center justify-center text-white text-xs">{index + 1}</div>
                    </div>
                    <span className="text-gray-700">{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-white py-20 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mt-10 sm:mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              <span className="block">Urgence Ascenseur ?</span>
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Notre équipe d&apos;experts est disponible 24h/24 et 7j/7 pour intervenir rapidement en cas de panne d&apos;ascenseur.
            </p>
            <Link 
              href="tel:+33123456789" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <FaPhone className="mr-2" />
              Appel d&apos;urgence : 01 23 45 67 89
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
