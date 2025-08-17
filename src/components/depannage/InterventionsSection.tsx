import Link from 'next/link';
import Image from 'next/image';

export default function InterventionsSection() {
  return (
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
  );
}
