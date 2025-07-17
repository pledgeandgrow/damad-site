import { FaTools, FaClipboardCheck, FaClock, FaShieldAlt } from 'react-icons/fa';
import { FaBuilding, FaHospital, FaHotel, FaIndustry, FaShoppingCart, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance d\'Ascenseurs - DAMAD',
  description: 'Service d\'entretien préventif et curatif pour garantir la performance et la longévité de vos ascenseurs.',
};

const features = [
  {
    icon: <FaTools className="h-8 w-8 text-white" />,
    title: 'Maintenance préventive',
    description: 'Visites régulières pour prévenir les pannes et optimiser la durée de vie.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-white" />,
    title: 'Maintenance curative',
    description: 'Intervention rapide en cas de panne pour minimiser l\'immobilisation.'
  },
  {
    icon: <FaClock className="h-8 w-8 text-white" />,
    title: 'Service 24/7',
    description: 'Assistance technique et dépannage disponibles 24h/24 et 7j/7.'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8 text-white" />,
    title: 'Conformité réglementaire',
    description: 'Mise en conformité avec les normes de sécurité en vigueur.'
  }
];

const clientTypes = [
  {
    icon: <FaBuilding className="h-10 w-10" />,
    name: 'Immeubles résidentiels',
    description: 'Maintenance adaptée aux copropriétés et immeubles d\'habitation pour garantir la sécurité et le confort des résidents.',
    benefits: [
      'Conformité aux obligations légales',
      'Réduction des pannes et des plaintes',
      'Prolongation de la durée de vie de l\'installation',
      'Tranquillité pour les syndics et copropriétaires'
    ]
  },
  {
    icon: <FaHospital className="h-10 w-10" />,
    name: 'Établissements de santé',
    description: 'Solutions de maintenance prioritaires pour hôpitaux, cliniques et EHPAD où la fiabilité des équipements est cruciale.',
    benefits: [
      'Intervention d\'urgence 24/7',
      'Maintenance préventive renforcée',
      'Conformité aux normes sanitaires strictes',
      'Minimisation des temps d\'arrêt'
    ]
  },
  {
    icon: <FaHotel className="h-10 w-10" />,
    name: 'Hôtels et tourisme',
    description: 'Programmes de maintenance discrets et efficaces pour ne pas perturber l\'expérience client dans les établissements hôteliers.',
    benefits: [
      'Interventions aux heures creuses',
      'Techniciens formés aux standards hôteliers',
      'Maintenance silencieuse et non intrusive',
      'Solutions esthétiques et harmonieuses'
    ]
  },
  {
    icon: <FaIndustry className="h-10 w-10" />,
    name: 'Sites industriels',
    description: 'Maintenance robuste pour monte-charges et ascenseurs industriels soumis à des conditions d\'utilisation intensives.',
    benefits: [
      'Maintenance adaptée aux fortes charges',
      'Résistance aux environnements difficiles',
      'Optimisation des flux logistiques',
      'Réduction des coûts d\'exploitation'
    ]
  },
  {
    icon: <FaShoppingCart className="h-10 w-10" />,
    name: 'Centres commerciaux',
    description: 'Solutions de maintenance pour les espaces commerciaux à fort trafic nécessitant une disponibilité maximale.',
    benefits: [
      'Maintenance pendant les heures de fermeture',
      'Optimisation pour les périodes d\'affluence',
      'Réduction des interruptions de service',
      'Amélioration de l\'expérience client'
    ]
  },
  {
    icon: <FaHome className="h-10 w-10" />,
    name: 'Particuliers',
    description: 'Entretien personnalisé pour les ascenseurs privatifs et élévateurs dans les maisons individuelles.',
    benefits: [
      'Forfaits adaptés aux usages résidentiels',
      'Préservation de la valeur immobilière',
      'Confort et accessibilité garantis',
      'Conseils personnalisés d\'utilisation'
    ]
  }
];

export default function MaintenancePage() {
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
              Nos services de maintenance
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Une maintenance régulière pour garantir la sécurité et la fiabilité de vos ascenseurs.
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
              Solutions personnalisées
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Maintenance adaptée à votre secteur
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Nos services de maintenance sont conçus pour répondre aux besoins spécifiques de chaque type d&apos;installation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clientTypes.map((client, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:translate-y-[-5px] hover:border-[#2b3343] h-full">
                  <div className="h-2 bg-[#2b3343]"></div>
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 mx-auto bg-[#2b3343] transform transition-transform group-hover:scale-110 shadow-md">
                      <div className="text-white">
                        {client.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#2b3343] group-hover:text-[#3d4759] transition-colors duration-300">{client.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{client.description}</p>
                    
                    <h4 className="font-semibold text-[#2b3343] mb-3 text-xs uppercase tracking-wider">Avantages</h4>
                    <ul className="space-y-2 mb-4 text-left">
                      {client.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="flex-shrink-0 h-4 w-4 rounded-full bg-[#2b3343] flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-300">
                            <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-xs sm:text-sm font-medium text-[#2b3343] group-hover:text-[#3d4759] transition-colors duration-300"
                      >
                        Demander un devis
                        <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mt-10 sm:mt-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              <span className="block">Prêt à sécuriser votre ascenseur ?</span>
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Nos experts sont à votre disposition pour étudier vos besoins et vous proposer la meilleure solution de maintenance.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Demander un devis personnalisé
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
