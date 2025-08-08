import { FaClipboardCheck, FaTools, FaHandshake } from 'react-icons/fa';
import { GiElevator } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation Appareils d\'Accessibilité - DAMAD',
  description: 'Installation sur mesure d\'appareils d\'accessibilité neufs. Conception, réalisation et mise en service de votre futur équipement par des experts.',
};

const features = [
  {
    icon: <GiElevator className="h-8 w-8 text-white" />,
    title: 'Tous types d\'appareils d\'accessibilité',
    description: 'Électriques, hydrauliques, sans local technique, PMR, etc.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-white" />,
    title: 'Étude personnalisée',
    description: 'Analyse de vos besoins et proposition sur mesure.'
  },
  {
    icon: <FaHandshake className="h-8 w-8 text-white" />,
    title: 'Haute technologie',
    description: 'Équipements dernier cri pour des performances optimales.'
  },
  {
    icon: <FaTools className="h-8 w-8 text-white" />,
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
    name: 'Appareil d\'accessibilité électrique',
    description: 'Idéal pour les bâtiments de moyenne et grande hauteur.',
    features: ['Faible consommation', 'Silencieux', 'Entretien réduit']
  },
  {
    name: 'Appareil d\'accessibilité hydraulique',
    description: 'Parfait pour les faibles hauteurs et charges lourdes.',
    features: ['Puissant', 'Fiabilité éprouvée', 'Coût d\'installation réduit']
  },
  {
    name: 'Appareil d\'accessibilité sans local technique',
    description: 'Solution compacte sans besoin de local dédié.',
    features: ['Gain de place', 'Installation simplifiée', 'Design moderne']
  },
  {
    name: 'Appareil d\'accessibilité PMR',
    description: 'Conforme aux normes d\'accessibilité.',
    features: ['Normes PMR', 'Largeur de porte adaptée', 'Boutons en braille']
  }
];

export default function Installation() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/installation.jpg" 
            alt="Installation d&apos;appareil d&apos;accessibilité" 
            className="object-cover"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-8 py-6 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              INSTALLATION
            </h1>
            <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Solutions sur mesure pour tous vos projets d&apos;installation
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
      {/* Features Section */}
      <div id="features" className="py-20 bg-[#fbfcfc] scroll-mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Une installation clé en main
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Notre équipe vous accompagne dans la réalisation de votre projet d&apos;accessibilité, de l&apos;étude technique à la mise en service. Nous mettons notre savoir-faire à votre service pour vous proposer des solutions adaptées à vos besoins et à votre budget.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{feature.title}</h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                    <p className="text-base text-[#2b3343]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elevator Types - Moved before Process Section */}
      <div className="py-20 bg-[#fbfcfc] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Nos solutions d&apos;accessibilité
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Choisissez la solution la plus adaptée à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {elevatorTypes.map((type, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                <div className="h-2 bg-[#0046fe]"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#2b3343]">{type.name}</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                  <p className="text-[#2b3343]">{type.description}</p>
                  <ul className="mt-4 space-y-3">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-[#0046fe] flex items-center justify-center mr-2">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-[#2b3343]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-[#fbfcfc] py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Notre processus d&apos;installation
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Un accompagnement personnalisé à chaque étape de votre projet.
            </p>
          </div>

          <div className="mt-8">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-5 md:gap-x-8 md:gap-y-10">
              {installationSteps.map((step) => (
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

      {/* CTA Section */}
      <div className="bg-[#fbfcfc] py-20 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mt-10 sm:mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              <span className="block">Projet d&apos;installation d&apos;appareil d&apos;accessibilité ?</span>
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Nos experts sont à votre écoute pour étudier votre projet et vous proposer la meilleure solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5c35] text-white font-medium rounded-lg hover:bg-[#ff5c35]/80 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Demander un devis
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
