import { FaTools, FaClock, FaPhone, FaClipboardCheck } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dépannage Ascenseur - DAMAD',
  description: 'Service de dépannage d&apos;ascenseur Réponse sous 48h. Intervention rapide par des techniciens qualifiés pour tous types de pannes.'
};

const features = [
  {
    icon: <FaClock className="h-8 w-8 text-white" />,
    title: 'Intervention rapide',
    description: 'Réponse sous 48h pour des interventions d\'urgence.'
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
      {/* Hero Section with Background Image */}
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/depannage-hero.jpg" 
            alt="Dépannage d'ascenseur" 
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
              DÉPANNAGE
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Les Experts de DAMAD sont à votre service pour tout dépannage
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a href="#features" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center">
                Nos services de dépannage
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
      <div id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Services professionnels</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
              Notre service de dépannage
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Une équipe réactive et compétente pour tous vos problèmes d&apos;ascenseur.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="group transform transition-all duration-300 hover:-translate-y-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto bg-gradient-to-br from-blue-500 to-[#2b3343] transform transition-transform group-hover:scale-110 shadow-lg">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#2b3343] group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <p className="text-gray-600">
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
      <div className="bg-gradient-to-b from-white to-gray-50 py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Expertise technique</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
              Pannes fréquentes que nous réparons
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
              Notre équipe d&apos;experts répond sous 48h pour intervenir rapidement en cas de panne d&apos;ascenseur.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 transform transition-all hover:shadow-2xl">
            <div className="relative">
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-900">
                  <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2b3343]">
                    Types de pannes que nous réparons
                  </h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg">
                  Nous disposons d&apos;un stock important de pièces détachées pour une réparation rapide et efficace de tous types de pannes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {commonIssues.map((issue, index) => (
                    <div key={index} className="flex items-start p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white text-sm font-medium shadow-md group-hover:scale-110 transition-transform duration-300">{index + 1}</div>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors duration-300">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contrat de dépannage Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Solutions complètes</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
              Contrat de dépannage
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-10">
              Profitez d&apos;une prestation de qualité à un prix compétitif, avec un dépannage rapide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Left Column */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden h-full">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent -mr-10 -mt-10 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-[#2b3343] mb-8 text-center relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#2b3343] group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
                  INTERVENTIONS EN 4H et ASSISTANCE 7j/7
                </span>
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mt-0.5 shadow-md">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium">
                    Remise en service de tous types d&apos;ascenseurs, d&apos;ascenseurs privatifs, élévateurs, plateforme
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mt-0.5 shadow-md">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium">
                    4h selon la circulation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mt-0.5 shadow-md">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium">
                    Fourniture des consommables (ampoules, shunt, câblette, galet, ferme porte)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-7 w-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center mt-0.5 shadow-md">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-700 font-medium">
                    Service de désincarcération inclus
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Right Column */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden h-full">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent -mr-10 -mt-10 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-[#2b3343] mb-8 text-center relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-[#2b3343] group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
                  ASTREINTE SOIRÉE WEEK ET JOUR FÉRIÉS
                </span>
              </h3>
              <p className="text-gray-700 mb-8 text-center">
                Un service d&apos;astreinte 7/7 afin de réagir rapidement et remettre en service l&apos;appareil dans les plus brefs délais
              </p>
              <div className="flex justify-center space-x-10 my-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl p-10 border border-blue-100 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" stroke="blue"/>
              </svg>
            </div>
            
            <p className="text-gray-700 text-center mb-10 text-lg relative z-10">
              Vous aurez à votre disposition un technicien expérimenté maitrisant les domaines d&apos;expertise les plus avancés pour un diagnostic immédiat.
            </p>
            <div className="text-center relative z-10">
              <Link href="/devis?service=depannage" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                DEMANDER UN DEVIS
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Interventions de dépannages ponctuelle Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Assistance rapide</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
              Interventions de dépannages ponctuelle
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-10">
              L&apos;intervention ponctuelle permet de faire appel à un technicien qualifié pour une réparation ou dépannage
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Icons and bullet points */}
            <div className="w-full md:w-3/5 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#2b3343] mb-8 relative inline-block">
                Comment ça marche ?
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform -translate-y-2"></div>
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#2b3343] mb-2 text-lg group-hover:text-blue-700 transition-colors duration-300">Vous n&apos;êtes pas encore client</p>
                    <p className="text-gray-600 text-base">Vous avez un souci avec ascenseurs ou monte-charge ou tout autre installation d&apos;accessibilité.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#2b3343] mb-2 text-lg group-hover:text-blue-700 transition-colors duration-300">Prendre rendez-vous</p>
                    <p className="text-gray-600 text-base">Prendre votre rendez-vous en ligne, ou contacter notre service de dépannage du lundi au vendredi de 9h à 12h et de 13h à 17h.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#2b3343] mb-2 text-lg group-hover:text-blue-700 transition-colors duration-300">Diagnostic et réparation</p>
                    <p className="text-gray-600 text-base">Le technicien se déplace et établit un diagnostic. La panne est réparée ou une commande de pièce nécessaire pour dépanner l&apos;appareil sera effectuée avec votre accord sur devis.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                      <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-[#2b3343] mb-2 text-lg group-hover:text-blue-700 transition-colors duration-300">Résolution et rapport</p>
                    <p className="text-gray-600 text-base">La panne est résolue. Un rapport de dépannage vous est envoyé avec votre facture.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-blue-700 mb-2 text-lg">Paiement après prestation</p>
                    <p className="text-gray-600">Le montant de l&apos;intervention est connu et le paiement ne sera exécuté qu&apos;après le passage du technicien. Dans le cas où le technicien n&apos;arrive pas à résoudre le problème seuls les frais de dossier et de déplacement seront appliqués.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link href="/contact?subject=rdv-depannage" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  PRENDRE RDV
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="w-full md:w-2/5 order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] group relative">
                <div className="relative w-full h-[400px]">
                  <Image 
                    src="/images/depannage-intervention.jpg" 
                    alt="Intervention de dépannage" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-white text-xl font-medium px-6 py-3 bg-blue-600/80 rounded-lg backdrop-blur-sm">
                    Intervention professionnelle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Réalisations Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Projets récents</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
              Nos réalisations
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-10">
              Découvrez quelques exemples de nos interventions de dépannage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Réalisation 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <div className="relative w-full h-[250px]">
                  <Image 
                    src="/images/depannage/realisation-1.jpg" 
                    alt="Dépannage résidentiel" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full shadow-md">
                  Urgence
                </div>
              </div>
              <div className="p-8 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#2b3343] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Dépannage d&apos;urgence - Hôtel Paris
                </h3>
                <p className="text-gray-600 mb-5">
                  Intervention rapide suite à une panne d&apos;ascenseur dans un hôtel 4 étoiles. Réparation effectuée en moins de 2 heures.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Avril 2023</span>
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Réalisation 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <div className="relative w-full h-[250px]">
                  <Image 
                    src="/images/depannage/realisation-2.jpg" 
                    alt="Remplacement moteur d'ascenseur" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full shadow-md">
                  Technique
                </div>
              </div>
              <div className="p-8 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#2b3343] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Remplacement moteur - Immeuble résidentiel
                </h3>
                <p className="text-gray-600 mb-5">
                  Remplacement complet du moteur d&apos;un ascenseur dans une résidence de 8 étages. Mise en service rapide pour minimiser les désagréments.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Février 2023</span>
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Réalisation 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <div className="relative w-full h-[250px]">
                  <Image 
                    src="/images/depannage/realisation-3.jpg" 
                    alt="Dépannage électrique centre commercial" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full shadow-md">
                  Commercial
                </div>
              </div>
              <div className="p-8 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-[#2b3343] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Dépannage électrique - Centre commercial
                </h3>
                <p className="text-gray-600 mb-5">
                  Réparation d&apos;un problème électrique complexe sur un escalier mécanique dans un centre commercial très fréquenté.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Mars 2023</span>
                  </div>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3">
              Questions fréquemment posées
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Question 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2b3343] mb-3">Dans quelle région vous intervenez ?</h3>
              <p className="text-gray-600">
                Nous intervenons à Paris et peƟte couronne (92, 93, 94) ainsi qu&apos;une parƟe de la grande couronne (78, 95).
              </p>
            </div>
            
            {/* Question 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2b3343] mb-3">Pourrais-je annuler mon intervenƟon ponctuelle ?</h3>
              <p className="text-gray-600">
                Oui, il vous est possible d&apos;annuler votre intervenƟon, jusqu&apos;à 24 h jour ouvrable avant l&apos;intervenƟon en contactant notre service client à l&apos;horaire d&apos;ouverture sur service. Passé ce délai, l&apos;annulaƟon ne sera plus possible.
              </p>
            </div>
            
            {/* Question 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2b3343] mb-3">Que se passe-t-il si mon problème n&apos;est pas résolu ?</h3>
              <p className="text-gray-600">
                En cas de non résoluƟon du problème, selon le diagnosƟc une intervenƟon sera reprogrammée.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vous avez d'autres besoins Section */}
      <div className="bg-white py-20 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3">
              Vous avez d&apos;autres besoins ?
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
            <p className="text-xl font-semibold text-[#2b3343] mb-10">
              Contactez - nous !
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">MAINTENANCE</div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">NETOYAGE FOSSE</div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">INSPECTION CABLE</div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">RÉCUPÉRATION D&apos;OBJET</div>
            </div>
            
            {/* Service 5 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">ASSISTANCE TECHNIQUE</div>
            </div>
            
            {/* Service 6 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">EESSAIS PARACHUTE</div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block bg-[#2b3343] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md">
              NOUS CONTACTER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
