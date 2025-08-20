import Image from 'next/image';

const DigitalPlatformSection = () => {
  return (
    <div className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
            Une plateforme digitale pour piloter votre projet
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Suivez en temps réel l{`'`}avancement de votre projet de rénovation et modernisation grâce à notre plateforme digitale.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group">
              <div className="relative w-full h-64 sm:h-80">
                <Image 
                  src="/images/renovation/renovation1.jpg" 
                  alt="Gestion de projet de rénovation DAMAD" 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b3343]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <span className="text-white font-medium px-4 py-2 rounded-lg bg-[#0046fe]/80 backdrop-blur-sm">
                    Suivi de projet en temps réel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className="lg:w-1/2 space-y-6">
            {/* Card 1 - Espace client */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] group">
              <div className="flex items-start">
                <div className="bg-[#0046fe] rounded-full p-3 mr-4 transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-2 group-hover:text-[#0046fe] transition-colors duration-300">Espace client personnalisé</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Retrouvez vos propositions commerciales, devis en
                    ligne, factures, bons de commande et communiquez avec nos équipes
                    avant, pendant et après la livraison de votre projet.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Suivi de chantier */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] group">
              <div className="flex items-start">
                <div className="bg-[#0046fe] rounded-full p-3 mr-4 transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-2 group-hover:text-[#0046fe] transition-colors duration-300">Suivi de chantier en temps réel</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Suivez l{`'`}avancement de vos travaux de modernisation,
                    consultez les photos, les rapports d{`'`}intervention et le calendrier des étapes à venir.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Communication */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] group">
              <div className="flex items-start">
                <div className="bg-[#0046fe] rounded-full p-3 mr-4 transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-2 group-hover:text-[#0046fe] transition-colors duration-300">Communication simplifiée</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Communiquez directement avec nos équipes via la
                    messagerie intégrée et recevez des notifications en temps réel sur l{`'`}avancement de votre projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPlatformSection;
