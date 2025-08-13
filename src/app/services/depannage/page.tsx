import { FaTools, FaClock, FaPhone, FaClipboardCheck } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import FaqDropdown from '@/components/FaqDropdown';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dépannage d&apos;Appareils d&apos;Accessibilité - DAMAD',
  description: 'Service de dépannage d&apos;appareils d&apos;accessibilité. Intervention rapide par des techniciens qualifiés pour tous types de pannes.'
};

const features = [
  {
    icon: <FaClock className="h-8 w-8 text-white" />,
    title: 'Intervention rapide',
    description: 'Réponse rapide pour des interventions d\'urgence.'
  },
  {
    icon: <FaTools className="h-8 w-8 text-white" />,
    title: 'Techniciens qualifiés',
    description: 'Des experts formés aux dernières technologies.'
  },
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-white" />,
    title: 'Pièces détachées',
    description: 'Stock important de pièces détachées.'
  },
  {
    icon: <FaPhone className="h-8 w-8 text-white" />,
    title: 'Zone d\'intervention',
    description: 'Nous intervenons dans toute la région Île-de-France.'
  }
];

const commonIssues = [
  "Appareil bloqué entre deux étages",
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
            src="/images/services/depannage.jpg" 
            alt="Dépannage d&apos;appareils d&apos;accessibilité" 
            className="object-cover"
            fill
            sizes="100vw"
            priority
          />
        </div>
        {/* Removed overlay pattern */}
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-8 py-6 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              DÉPANNAGE
            </h1>
            <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Les Experts de DAMAD sont à votre service pour tout dépannage
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
              Notre service de dépannage
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Une équipe réactive et compétente pour tous vos problèmes d&apos;appareils d&apos;accessibilité.
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

      {/* Common Issues Section */}
      <div className="py-20 bg-[#fbfcfc] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Pannes fréquentes que nous dépannons
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Notre équipe d&apos;experts répond pour intervenir rapidement en cas de panne d&apos;appareil d&apos;accessibilité.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#0046fe]">
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
                    <div key={index} className="flex items-start p-4 rounded-xl border border-gray-100 hover:border-[#0046fe]/30 hover:bg-blue-50/30 transition-all duration-300 group">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-[#0046fe] flex items-center justify-center text-white text-sm font-medium shadow-md group-hover:scale-110 transition-transform duration-300">{index + 1}</div>
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
      <div className="py-20 bg-[#fbfcfc] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Contrat de dépannage
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Profitez d&apos;une prestation de qualité à un prix compétitif, avec un dépannage rapide.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe]">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#0046fe] text-white shadow-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#2b3343]">Interventions Rapide</h3>
                </div>
                <div className="w-10 h-0.5 bg-[#0046fe] my-3 ml-16"></div>
                <p className="text-[#2b3343] pl-16">Remise en service de tous types d&apos;ascenseurs, d&apos;ascenseurs privatifs, élévateurs, plateforme</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe]">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#0046fe] text-white shadow-lg mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#2b3343]">Assistance 7j/7</h3>
                </div>
                <div className="w-10 h-0.5 bg-[#0046fe] my-3 ml-16"></div>
                <p className="text-[#2b3343] pl-16">Notre équipe est disponible 7j/7 pour vous assister en cas de panne ou d&apos;urgence.</p>
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
                  Service de désincarcération inclus
                </h3>
              </div>
            </div>
            

          </div>
          {/* Section removed as requested by the user */}
        </div>
      </div>

      {/* Interventions de dépannages ponctuelle Section */}
      <div className="py-20 bg-[#fbfcfc] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Interventions de dépannages ponctuelle
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              L&apos;intervention ponctuelle permet de faire appel à un technicien qualifié pour une réparation ou dépannage
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Icons and bullet points */}
            <div className="w-full md:w-3/5 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#2b3343] mb-8 relative inline-block">
                Comment ça marche ?
              </h3>
              
              <div className="space-y-10">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 bg-[#d6e2e8] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
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
                    <div className="w-14 h-14 bg-[#d6e2e8] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
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
                    <div className="w-14 h-14 bg-[#d6e2e8] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
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
                    <div className="w-14 h-14 bg-[#d6e2e8] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
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
              
              <div className="mt-12 p-8 bg-[#fbfcfd] rounded-xl border border-blue-100 shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 bg-[#0046fe] rounded-full flex items-center justify-center shadow-lg">
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
                <Link href="/contact?subject=rdv-depannage" className="inline-flex items-center px-8 py-4 bg-[#ff5c35] text-white font-semibold rounded-lg hover:bg-[#ff5c35]/80 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Prendre rendez-vous en ligne
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
                    src="/images/services/depannage2.jpg" 
                    alt="Intervention de dépannage" 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-[#2b3343]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-white text-xl font-medium px-6 py-3 bg-[#0046fe]/80 rounded-lg backdrop-blur-sm">
                    Intervention professionnelle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Réalisations Section */}
      <div className="py-24 bg-[#fbfcfd] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
              Nos réalisations
            </h2>
            <div className="w-24 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/VF EN DEFAUT.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/VF EN DEFAUT TERMIQUE.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/REGLAGE DE POULIE.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Image 4 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/VF en dEfaut raz.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Image 5 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/contact shunt DE LA PORTE porte paliEre  HS.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Image 6 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/dysfonctionnement du bouton cabine du 2eme.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Image 7 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/manque pastille du bouton cabine 2eme.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </div>
            
            {/* Image 8 */}
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/depannage/fils débranches au niveau d'un connecteur du frein de poulie.jpeg" 
                  alt="Dépannage ascenseur" 
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
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
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Question 1 */}
            <FaqDropdown question="Dans quelle région vous intervenez ?">
              <p>
                Nous intervenons à Paris et petite couronne (92, 93, 94) ainsi qu&apos;une partie de la grande couronne (78, 95).
              </p>
            </FaqDropdown>
            
            {/* Question 2 */}
            <FaqDropdown question="Pourrais-je annuler mon intervention ponctuelle ?">
              <p>
                Oui, il vous est possible d&apos;annuler votre intervention, jusqu&apos;à 24 h jour ouvrable avant l&apos;intervention en contactant notre service client à l&apos;horaire d&apos;ouverture sur service. Passé ce délai, l&apos;annulation ne sera plus possible.
              </p>
            </FaqDropdown>
            
            {/* Question 3 */}
            <FaqDropdown question="Que se passe-t-il si mon problème n&apos;est pas résolu ?">
              <p>
                En cas de non résolution du problème, selon le diagnostic une intervention sera reprogrammée.
              </p>
            </FaqDropdown>
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
              <div className="text-[#2b3343] font-medium">Maintenance</div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">Nettoyage fosse</div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">Inspection câble</div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">Récupération d&apos;objet</div>
            </div>
            
            {/* Service 5 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">Assistance technique</div>
            </div>
            
            {/* Service 6 */}
            <div className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md">
              <div className="text-[#2b3343] font-medium">Essais parachute</div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block bg-[#2b3343] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md">
              Nous Contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
