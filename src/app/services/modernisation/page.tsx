import { FaSyncAlt, FaChartLine, FaLeaf, FaUniversalAccess } from 'react-icons/fa';
import { FaBuilding, FaHospital, FaHotel, FaIndustry } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modernisation d\'Ascenseurs - DAMAD',
  description: 'Services de modernisation d\'ascenseurs pour améliorer la sécurité, l\'efficacité énergétique et le confort de vos installations.',
};

const features = [
  {
    icon: <FaSyncAlt className="h-8 w-8 text-white" />,
    title: 'Mise à niveau complète',
    description: 'Remplacement des composants obsolètes pour améliorer les performances et la sécurité.'
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-white" />,
    title: 'Amélioration des performances',
    description: 'Optimisation de la vitesse, de la capacité et de la fiabilité de vos ascenseurs.'
  },
  {
    icon: <FaLeaf className="h-8 w-8 text-white" />,
    title: 'Efficacité énergétique',
    description: 'Réduction de la consommation d\'énergie et de l\'empreinte carbone.'
  },
  {
    icon: <FaUniversalAccess className="h-8 w-8 text-white" />,
    title: 'Mise en conformité PMR',
    description: 'Adaptation aux normes d\'accessibilité pour personnes à mobilité réduite.'
  }
];

const clientTypes = [
  {
    icon: <FaBuilding className="h-10 w-10" />,
    name: 'Immeubles résidentiels',
    description: 'Modernisation adaptée aux copropriétés et immeubles d\'habitation pour améliorer le confort et la valeur immobilière.',
    benefits: [
      'Réduction des coûts d\'exploitation',
      'Amélioration du confort des résidents',
      'Valorisation du patrimoine immobilier',
      'Mise en conformité avec les nouvelles normes'
    ]
  },
  {
    icon: <FaHospital className="h-10 w-10" />,
    name: 'Établissements de santé',
    description: 'Solutions de modernisation pour hôpitaux et cliniques avec un minimum d\'interruption de service.',
    benefits: [
      'Fiabilité accrue des équipements',
      'Réduction des temps d\'attente',
      'Amélioration de l\'accessibilité',
      'Optimisation du transport des patients'
    ]
  },
  {
    icon: <FaHotel className="h-10 w-10" />,
    name: 'Hôtels et résidences',
    description: 'Modernisation esthétique et fonctionnelle pour améliorer l\'expérience client dans les établissements hôteliers.',
    benefits: [
      'Amélioration de l\'expérience client',
      'Réduction du bruit et des vibrations',
      'Design personnalisé et moderne',
      'Optimisation de la gestion des flux'
    ]
  },
  {
    icon: <FaIndustry className="h-10 w-10" />,
    name: 'Sites industriels',
    description: 'Mise à niveau des monte-charges et ascenseurs industriels pour répondre aux exigences modernes.',
    benefits: [
      'Augmentation de la capacité de charge',
      'Amélioration de la sécurité opérationnelle',
      'Réduction des temps d\'arrêt',
      'Adaptation aux processus industriels actuels'
    ]
  }
];

export default function ModernisationPage() {
  return (
    <div className="bg-white">
      {/* Features Section */}
      <div className="py-20 bg-white sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
              Services professionnels
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Modernisation d&apos;ascenseurs
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Donnez une seconde vie à vos installations avec nos solutions de modernisation sur mesure.
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

      {/* Client Types Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
              Solutions adaptées
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Pour tous types de bâtiments
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Nos solutions de modernisation s&apos;adaptent à tous les types de bâtiments et d&apos;usages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#2b3343]">
                <div className="h-2 bg-[#2b3343]"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-[#2b3343]">
                      {client.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343]">
                      {client.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {client.description}
                  </p>
                  <ul className="space-y-2">
                    {client.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-[#2b3343] to-[#3d4759] rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Prêt à moderniser vos ascenseurs ?
              </h2>
              <p className="text-white/80 mb-8 text-base sm:text-lg">
                Nos experts sont à votre disposition pour étudier votre projet et vous proposer une solution adaptée à vos besoins et à votre budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact?subject=modernisation" 
                  className="bg-white text-[#2b3343] hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
                >
                  Demander un devis gratuit
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-transparent text-white border border-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
