import { FaTools, FaCogs, FaShieldAlt, FaClipboardCheck, FaPhone } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réparation d&apos;Appareils d&apos;Accessibilité - DAMAD',
  description: 'Service professionnel de réparation d&apos;appareils d&apos;accessibilité avec diagnostics précis et interventions rapides pour une remise en service fiable de vos équipements.',
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
    description: 'Portes qui ne se ferment pas correctement, défaillance de détecteur d’obstacle'
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
      {/* Hero Section with Background Image */}
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/reparation.jpg" 
            alt="Réparation d&apos;appareil d&apos;accessibilité" 
            className="object-cover"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-8 py-6 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              RÉPARATION
            </h1>
            <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Intervention rapide et efficace pour tous types de pannes
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[2]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      {/* Common Issues Section */}
      <div id="commonIssues" className="py-20 bg-[#fbfcfc] scroll-mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Réparation les plus courantes
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {commonIssues.map((issue, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {issue.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{issue.title}</h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                    <p className="text-base text-[#2b3343]">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intervention Process */}
      <div className="bg-[#fbfcfc] py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Notre processus d&apos;intervention
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Une prise en charge rapide et efficace de votre problème.
            </p>
          </div>

          <div className="mt-8">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {interventionSteps.map((step) => (
                <div key={step.step} className="relative group">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-[#0046fe] transform -translate-y-1/2 opacity-50"></div>
                  <p className="mt-5 text-lg font-bold text-[#2b3343]">{step.title}</p>
                  <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                  <p className="text-base text-[#2b3343]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-[#fbfcfc] py-20 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mt-10 sm:mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              <span className="block">Urgence appareil d&apos;accessibilité bloqué ?</span>
              <span className="block text-[#2b3343]/80">Nos techniciens interviennent rapidement</span>
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              
            </p>
            <div className="flex items-center justify-center">
              <Link
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5c35] text-white font-medium rounded-lg hover:bg-[#ff5c35]/80 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <FaPhone className="mr-2" /> Appeler maintenant
              </Link>
            </div>
            <p className="text-center text-[#2b3343]/70 text-sm mt-6">*Dans la limite des disponibilités et de la zone d&apos;intervention</p>
          </div>
        </div>
      </div>
    </div>
  );
}
