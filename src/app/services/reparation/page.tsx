import { FaTools, FaCogs, FaShieldAlt, FaClipboardCheck, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réparation d&apos;Ascenseurs - DAMAD',
  description: 'Service professionnel de réparation d&apos;ascenseurs avec diagnostics précis et interventions rapides pour une remise en service fiable de vos équipements.',
};

const commonIssues = [
  {
    icon: <FaTools className="h-6 w-6 text-white" />,
    title: 'Panne électrique',
    description: 'Problèmes de courant, dysfonctionnements des commandes, etc.'
  },
  {
    icon: <FaCogs className="h-6 w-6 text-white" />,
    title: 'Défaillance mécanique',
    description: 'Usure des pièces, problèmes de frein, etc.'
  },
  {
    icon: <FaShieldAlt className="h-6 w-6 text-white" />,
    title: 'Problème de sécurité',
    description: 'Défaillance des systèmes de sécurité, portes bloquées, etc.'
  },
  {
    icon: <FaClipboardCheck className="h-6 w-6 text-white" />,
    title: 'Dysfonctionnement des portes',
    description: 'Portes qui ne s&apos;ouvrent ou ne se ferment pas correctement.'
  }
];

const interventionSteps = [
  {
    step: '1',
    title: 'Diagnostic',
    description: 'Analyse précise de la panne par nos techniciens qualifiés.'
  },
  {
    step: '2',
    title: 'Devis',
    description: 'Établissement d\'un devis détaillé et transparent.'
  },
  {
    step: '3',
    title: 'Réparation',
    description: 'Intervention rapide avec des pièces d\'origine.'
  },
  {
    step: '4',
    title: 'Contrôle',
    description: 'Vérification complète du bon fonctionnement.'
  }
];

export default function ReparationPage() {
  return (
    <div className="bg-white">
      {/* Common Issues Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
              Diagnostic précis
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Pannes les plus courantes
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Notre équipe d&apos;experts est disponible 24/7 pour résoudre rapidement tout problème technique.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {commonIssues.map((issue, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#2b3343] group">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#2b3343] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {issue.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{issue.title}</h3>
                    <div className="w-10 h-0.5 bg-[#2b3343] my-3"></div>
                    <p className="text-base text-gray-600">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intervention Process */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
              Méthodologie
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Notre processus d&apos;intervention
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Une prise en charge rapide et efficace de votre problème.
            </p>
          </div>

          <div className="mt-8">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {interventionSteps.map((step) => (
                <div key={step.step} className="relative group">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#2b3343] text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-[#2b3343] transform -translate-y-1/2 opacity-50"></div>
                  <p className="mt-5 text-lg font-bold text-[#2b3343]">{step.title}</p>
                  <div className="w-10 h-0.5 bg-[#2b3343] my-3"></div>
                  <p className="text-base text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-white py-20 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mt-10 sm:mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              <span className="block">Urgence ascenseur bloqué ?</span>
              <span className="block text-[#2b3343]/80">Nos techniciens interviennent sous 2h*</span>
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Notre équipe d&apos;experts est disponible 24/7 pour résoudre rapidement tout problème technique.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                <FaPhone className="mr-2" /> Appeler maintenant
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#2b3343] text-[#2b3343] font-medium rounded-lg hover:bg-[#2b3343] hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Demander un rappel
              </Link>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">*Dans la limite des disponibilités et de la zone d&apos;intervention</p>
          </div>
        </div>
      </div>
    </div>
  );
}
