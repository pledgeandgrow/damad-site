import { FaClipboardCheck, FaShieldAlt, FaSearch, FaFileAlt } from 'react-icons/fa';
import { FaBuilding, FaHospital, FaHotel, FaIndustry } from 'react-icons/fa';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contrôle Technique d\'Ascenseurs - DAMAD',
  description: 'Services de contrôle technique et d\'inspection réglementaire pour garantir la sécurité et la conformité de vos ascenseurs.',
};

const features = [
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-white" />,
    title: 'Contrôle périodique',
    description: 'Inspection complète selon la réglementation en vigueur pour garantir la sécurité.'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8 text-white" />,
    title: 'Audit de sécurité',
    description: 'Évaluation approfondie des risques et des mesures de sécurité existantes.'
  },
  {
    icon: <FaSearch className="h-8 w-8 text-white" />,
    title: 'Diagnostic technique',
    description: 'Analyse détaillée de l\'état des composants et des performances de l\'installation.'
  },
  {
    icon: <FaFileAlt className="h-8 w-8 text-white" />,
    title: 'Rapport de conformité',
    description: 'Documentation complète et recommandations pour la mise en conformité.'
  }
];

const clientTypes = [
  {
    icon: <FaBuilding className="h-10 w-10" />,
    name: 'Immeubles résidentiels',
    description: 'Contrôles techniques obligatoires pour les copropriétés et immeubles d&apos;habitation.',
    benefits: [
      'Respect des obligations légales',
      'Prévention des accidents',
      'Tranquillité pour les syndics et copropriétaires',
      'Identification précoce des problèmes potentiels'
    ]
  },
  {
    icon: <FaHospital className="h-10 w-10" />,
    name: 'Établissements de santé',
    description: 'Inspections rigoureuses pour les hôpitaux et cliniques où la sécurité est primordiale.',
    benefits: [
      'Conformité aux normes spécifiques du secteur de la santé',
      'Garantie de la sécurité des patients et du personnel',
      'Prévention des interruptions de service',
      'Documentation complète pour les autorités sanitaires'
    ]
  },
  {
    icon: <FaHotel className="h-10 w-10" />,
    name: 'Hôtels et résidences',
    description: 'Contrôles adaptés aux établissements recevant du public pour assurer la sécurité des clients.',
    benefits: [
      'Conformité aux normes ERP',
      'Protection de la réputation de l\'établissement',
      'Réduction des risques de responsabilité civile',
      'Maintien de l\'image de marque'
    ]
  },
  {
    icon: <FaIndustry className="h-10 w-10" />,
    name: 'Sites industriels',
    description: 'Inspections spécialisées pour les monte-charges et ascenseurs industriels.',
    benefits: [
      'Conformité aux normes de sécurité industrielle',
      'Prévention des accidents du travail',
      'Optimisation de la disponibilité des équipements',
      'Réduction des risques opérationnels'
    ]
  }
];

export default function ControleTechniquePage() {
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
              Contrôle technique d&#39;ascenseurs
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Des inspections rigoureuses pour garantir la sécurité et la conformité de vos installations.
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
              Nos services de contrôle technique s&apos;adaptent à tous les types d&apos;installations et de réglementations.
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

      {/* Réglementation Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
              Conformité
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Réglementation en vigueur
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Nous vous accompagnons dans le respect des obligations légales concernant vos ascenseurs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#2b3343] mb-4">Obligations légales</h3>
                <p className="text-gray-600 mb-4">
                  La législation française impose des contrôles techniques périodiques pour tous les ascenseurs, qu&apos;ils soient installés dans des bâtiments d&apos;habitation, des établissements recevant du public ou des lieux de travail.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Contrôle technique complet tous les 5 ans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Vérification de l&apos;état de fonctionnement des dispositifs de sécurité</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Mise en œuvre des travaux de mise en conformité</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2b3343] mb-4">Notre expertise</h3>
                <p className="text-gray-600 mb-4">
                  DAMAD Ascenseurs vous accompagne dans toutes les étapes du contrôle technique réglementaire :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Planification des contrôles selon le calendrier réglementaire</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Réalisation des contrôles par des techniciens certifiés</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Fourniture de rapports détaillés et recommandations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[#2b3343] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Assistance pour la mise en conformité</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-[#2b3343] to-[#3d4759] rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Besoin d&apos;un contrôle technique ?
              </h2>
              <p className="text-white/80 mb-8 text-base sm:text-lg">
                Nos experts sont à votre disposition pour réaliser vos contrôles réglementaires et vous accompagner dans la mise en conformité de vos installations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact?subject=controle-technique" 
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
