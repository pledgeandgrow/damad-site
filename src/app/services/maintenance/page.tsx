import { FaTools, FaClipboardCheck, FaClock, FaShieldAlt } from 'react-icons/fa';
import { FaBuilding, FaHospital, FaHotel, FaIndustry, FaShoppingCart, FaHome } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
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
    title: 'Service Réponse sous 48h',
    description: 'Assistance technique et dépannage avec réponse sous 48h.'
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
      'Intervention d\'urgence Réponse sous 48h',
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
      {/* Hero Section */}
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/maintenance-hero.jpg" 
            alt="Maintenance d&apos;ascenseur" 
            className="object-cover opacity-40"
            fill
            sizes="100vw"
            priority
          />
        </div>
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b3343]/80 to-[#2b3343]/60 z-[1]"></div>
        <div className="absolute inset-0 opacity-20 z-[1]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              MAINTENANCE ET ENTRETIEN
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Les Experts de DAMAD sont à votre service pour l&apos;entretien de vos ascenseurs
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="#features" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center">
                Découvrir nos services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
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
      <div id="features" className="py-20 bg-white sm:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Nos services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
              Nous maintenons et entretenons tout type d&apos;équipements
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-4 font-medium">
              ASCENSEUR – EPMR – MONTE-CHARGE – MONTE VOITURE - MONTE-FÛTS – PORTE DE PARKING – PORTE GARAGE
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Depuis 2007, les techniciens de Damad vérifient le bon foncƟonnement des soluƟons de mobilité verƟcale des parƟculiers et des professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-400 h-full relative">
                  <div className="h-2 bg-gradient-to-r from-[#2b3343] to-blue-500"></div>
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto bg-gradient-to-br from-[#2b3343] to-blue-600 transform transition-transform group-hover:scale-110 shadow-lg group-hover:shadow-blue-200">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#2b3343] group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-blue-400 mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contracts Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Solutions personnalisées</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 mt-2">
              Nos Contrats de Maintenance et d&apos;Entretien
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm italic mb-4 bg-blue-50 py-2 px-4 rounded-lg inline-block">
              conformément aux disposiƟons de l&apos;arƟcle 79 de la loi du 2 juillet 2003 et du décret 2004-964
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343]">Le contrat d&apos;entreƟen</h3>
                </div>
                <p className="text-gray-600 pl-16">assurer le foncƟonnement installaƟon ou d&apos;un équipement</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343]">Le contrat de maintenance</h3>
                </div>
                <p className="text-gray-600 pl-16">prestaƟon de service garanƟssant le bon foncƟonnement d&apos;une installaƟon.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#2b3343] to-blue-700 text-white p-6 rounded-xl shadow-lg text-center mb-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
                  <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/>
                </svg>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Inclus dépannage 7 / 7 et déblocage des personnes 24h/24 7 / 7
                </h3>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border border-gray-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ces contrats concernent la maintenance et l&apos;entretien des ascenseurs, des portes d&apos;accès automatiques et tous les autres automatismes : montes charges, montes voitures, monte-fûts, barrières levantes, etc.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Contract 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 h-full transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-[#2b3343] to-blue-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">01</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT MINIMAL</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Visite périodique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Conformité à la norme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Consommables</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contract 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 h-full transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-[#2b3343] to-blue-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">02</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT STANDARD</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Visite programmées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Consommables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Dépannage 7/7</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contract 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 h-full transform hover:-translate-y-1">
              <div className="h-2 bg-gradient-to-r from-[#2b3343] to-blue-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">03</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT MAINTENANCE</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Visites programmées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Conformre au norme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Consommables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Pièces détachées*</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Dépannage 7/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-block bg-[#2b3343] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md text-center">
              DEMANDER UN DEVIS
            </Link>
            <Link href="/contact?subject=rappel" className="inline-block bg-white border border-[#2b3343] text-[#2b3343] font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-md text-center">
              ETRE RAPPELÉ
            </Link>
          </div>
        </div>
      </div>

      {/* Client Types Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Qui nous servons</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 mt-2">
              Nos clients
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
              Nous intervenons auprès de tous types de clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:-translate-y-1 transform">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-all duration-300">
                  <div className="text-4xl group-hover:scale-110 transform transition-transform">{client.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2b3343] group-hover:text-blue-600 transition-colors duration-300">{client.name}</h3>
                <div className="w-10 h-0.5 bg-blue-300 mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-gray-600 leading-relaxed mb-6">{client.description}</p>
                <ul className="text-left space-y-2 mt-4">
                  {client.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                        <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 sm:py-24 border-t border-gray-100 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230369a1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-5xl mx-auto border border-blue-100 transform hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="text-center">
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Contactez-nous</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
                <span className="block">Prêt à sécuriser votre ascenseur ?</span>
              </h2>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
                Nos experts sont à votre disposition pour étudier vos besoins et vous proposer la meilleure solution de maintenance.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1 group">
                  <span>DEMANDER UN DEVIS</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
                <Link href="/contact?subject=rappel" className="inline-flex items-center justify-center bg-white border-2 border-blue-500 text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-blue-100 transform hover:-translate-y-1">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  ÊTRE RAPPELÉ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
