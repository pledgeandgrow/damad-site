import { FaTools, FaClipboardCheck, FaClock, FaShieldAlt } from 'react-icons/fa';
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

// Removed unused variable
/* const clientTypes = [
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
*/

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
            <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Les Experts de DAMAD sont à votre service pour l&apos;entretien de vos ascenseurs
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="#features" className="px-6 py-3 bg-[#0046fe] hover:bg-[#0046fe] text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center">
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
            <span className="text-[#0046fe] font-semibold tracking-wider text-sm uppercase">Nos services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
              Nous maintenons et entretenons tout type d&apos;équipements
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-4 font-medium">
              ASCENSEUR – EPMR – MONTE-CHARGE – MONTE VOITURE - MONTE-FÛTS – PORTE DE PARKING – PORTE GARAGE
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Depuis 2007, les techniciens de Damad vérifient le bon fonctionnement des solutions de mobilité verticale des particuliers et des professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                  <div className="h-2 bg-[#2b3343]"></div>
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto bg-[#2b3343] transform transition-transform group-hover:scale-110 shadow-lg group-hover:shadow-[#d6e2e8]">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#2b3343] group-hover:text-[#0046fe] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] mx-auto mb-4 opacity-70 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0046fe] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contracts Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-[#0046fe] font-semibold tracking-wider text-sm uppercase">Solutions personnalisées</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 mt-2">
              Nos Contrats de Maintenance et d&apos;Entretien
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm italic mb-4 bg-blue-50 py-2 px-4 rounded-lg inline-block">
              conformément aux dispositions de l&apos;article 79 de la loi du 2 juillet 2003 et du décret 2004-964
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-[#f0f5f9] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#0046fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343]">Le contrat d&apos;entretien</h3>
                </div>
                <p className="text-gray-600 pl-16">assurer le fonctionnement installation ou d&apos;un équipement</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="bg-[#f0f5f9] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#0046fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343]">Le contrat de maintenance</h3>
                </div>
                <p className="text-gray-600 pl-16">prestation de service garantissant le bon fonctionnement d&apos;une installation.</p>
              </div>
            </div>
            
            <div className="bg-[#2b3343] text-white p-6 rounded-xl shadow-lg text-center mb-8 relative overflow-hidden">
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
                <div className="bg-[#f0f5f9] p-3 rounded-full mr-4 flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#0046fe]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full transform hover:-translate-y-1">
              <div className="h-2 bg-[#2b3343]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#f0f5f9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0046fe] font-bold text-lg">01</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT MINIMAL</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Visite périodique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Conformité à la norme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Consommables</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contract 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full transform hover:-translate-y-1">
              <div className="h-2 bg-[#2b3343]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#f0f5f9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0046fe] font-bold text-lg">02</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT ÉTENDU</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Visites programmées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Consommables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Réparation et le remplacement pièces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Référentiel AFNOR</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contract 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full transform hover:-translate-y-1">
              <div className="h-2 bg-[#2b3343]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#f0f5f9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0046fe] font-bold text-lg">03</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT MAINTENANCE</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Visites programmées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Conforme aux normes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Consommables</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Pièces détachées*</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Réparation et le remplacement pièces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Référentiel AFNOR NF P 82-022</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contract 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full transform hover:-translate-y-1">
              <div className="h-2 bg-[#2b3343]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#f0f5f9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0046fe] font-bold text-lg">04</span>
                </div>
                <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT ENTRETIEN</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Visites programmées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Conformité à la norme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">Consommables</span>
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

      {/* Three Areas Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Area */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#2b3343] mb-4">
                Choisir mon contrat de
                <br />
                maintenance
              </h2>
              <div className="w-16 h-1 bg-[#0046fe] mb-6"></div>
              <p className="text-gray-700 mb-6">
                Nos contrats de maintenance sont établis en fonction de critères spécifiques :
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0046fe] font-bold mr-2">•</span>
                  <span><strong>Complexité :</strong> L’entretien ou la maintenance d’ascenseurs exige une expertise technique qui varie selon le type d’équipement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] font-bold mr-2">•</span>
                  <span><strong>Respect des normes et des réglementations :</strong> Nos équipes respectent les normes les plus strictes. Votre technicien effectuera des interventions occasionnelles pour réparer et/ou remplacer des pièces défectueuses ou usagées : boutons de commande, automatisme de la porte, fonctionnement du bouton d’appel de secours, voyants lumineux, machinerie, éclairage, etc.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0046fe] font-bold mr-2">•</span>
                  <span><strong>Exigences particulières du site</strong></span>
                </li>
              </ul>
              <div className="mt-8">
                <p className="text-gray-700 font-semibold mb-4">Vous souhaitez souscrire à un contrat de maintenance ? Contactez-nous</p>
                <Link href="/contact" className="inline-block bg-[#2b3343] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md text-center">
                  NOUS CONTACTER
                </Link>
              </div>
            </div>

            {/* Right Area */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#2b3343] mb-4">
                Pourquoi choisir DAMAD
              </h2>
              <div className="w-16 h-1 bg-[#0046fe] mb-6"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-[#f0f5f9] rounded-lg">
                  <h3 className="text-lg font-bold text-[#2b3343] mb-2">TRANSPARENCE & ACCOMPAGNEMENT</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-gray-700">Nous vous accompagnons à chaque étape avec une communication claire et transparente.</p>
                </div>
                
                <div className="p-4 bg-[#f0f5f9] rounded-lg">
                  <h3 className="text-lg font-bold text-[#2b3343] mb-2">EXPERTISE</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-gray-700">Nos techniciens sont formés aux dernières technologies et normes du secteur.</p>
                </div>
                
                <div className="p-4 bg-[#f0f5f9] rounded-lg">
                  <h3 className="text-lg font-bold text-[#2b3343] mb-2">CONSEILS PERSONNALISÉS</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-gray-700">Nous élaborons des solutions adaptées à vos besoins spécifiques.</p>
                </div>
                
                <div className="p-4 bg-[#f0f5f9] rounded-lg">
                  <h3 className="text-lg font-bold text-[#2b3343] mb-2">SUR-MESURE</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-gray-700">Chaque installation est unique et reçoit un traitement personnalisé.</p>
                </div>
                
                <div className="p-4 bg-[#f0f5f9] rounded-lg">
                  <h3 className="text-lg font-bold text-[#2b3343] mb-2">DURABILITÉ</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-gray-700">Nos solutions visent à prolonger la durée de vie de vos équipements.</p>
                </div>
                
                <div className="p-4 bg-[#f0f5f9] rounded-lg">
                  <h3 className="text-lg font-bold text-[#2b3343] mb-2">SÉRÉNITÉ – PLATEFORME DEDIEÉ</h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-gray-700">Accédez à votre espace client pour suivre vos interventions en temps réel.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Area */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-[#2b3343] mb-4">
              A vous la maintenance et l’entretien simple et sereine !
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <p className="text-xl text-[#0046fe] font-semibold">
              La satisfaction client est notre priorité
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-[#f0f5f9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2b3343] mb-4">
              Questions fréquemment posées
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                Dans quelles villes d&apos;Île-de-France intervenez-vous ?
              </h3>
              <p className="text-gray-700">
                Nous intervenons à Paris et petite couronne (92, 93, 94) ainsi qu&apos;une partie de la grande couronne (78, 95).
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                Quels sont les signes indiquant qu&apos;un monte-charge nécessite une maintenance ?
              </h3>
              <p className="text-gray-700 mb-4">
                Pour que votre monte-charge ou ascenseur continue de fonctionner de manière fiable et sécurisée, vous devez rester attentif aux signes qui indiquent un besoin
                contrôle. Ignorer ses signes entraîne le risque de dysfonctionnements coûteux, compromet la sécurité des usagers.
              </p>
              <p className="text-gray-700 mb-2 font-semibold">Quelques signes courants à surveiller :</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Bruits inhabituels (grincements, cliquetis, vibrations excessives...) ;</li>
                <li>Problèmes d&apos;ouverture et de fermeture des portes ;</li>
                <li>Anomalies d&apos;affichage ou défauts de commande ;</li>
                <li>Ralentissements ou arrêts inattendus ;</li>
                <li>Mouvements irréguliers ou saccadés</li>
              </ul>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                À quelle fréquence devez-vous faire la maintenance de votre ascenseur, monte-charge.
              </h3>
              <p className="text-gray-700">
                Une fréquence de maintenance régulière est indispensable au bon fonctionnement et à la sécurité de votre installation.
                L&apos;intervalle entre deux visites d&apos;entretien et de maintenance ne peut pas être supérieur à six semaines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
