const ProcessStepsSection = () => {
  return (
    <div className="py-20 bg-[#fbfcfc] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Notre accompagnement
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Un accompagnement sur mesure pour rénover et moderniser vos ascenseurs en toute sérénité.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#0046fe] opacity-50 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="md:col-start-1 relative group">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                  <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                    Description du projet
                  </h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-[#2b3343] leading-relaxed">
                    Nous prenons le temps d&apos;écouter et comprendre vos besoins spécifiques pour votre projet de modernisation et rénovation.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:col-start-2 relative group">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                    Visite technique
                  </h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-[#2b3343] leading-relaxed">
                    Notre responsable de travaux se déplace sur site pour évaluer précisément les travaux nécessaires et les contraintes techniques.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:col-start-1 relative group">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                  <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                    Estimation gratuite
                  </h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-[#2b3343] leading-relaxed">
                    Nous vous proposons un devis détaillé et transparent, sans engagement, avec différentes options adaptées à vos besoins.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:col-start-2 relative group">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                    Accord & signature
                  </h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-[#2b3343] leading-relaxed">
                    Une fois le devis validé, nous planifions ensemble les travaux selon vos contraintes et établissons un calendrier précis.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="md:col-start-1 relative group">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                  <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                    Suivi de chantier
                  </h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-[#2b3343] leading-relaxed">
                    Nos équipes assurent un accompagnement et suivi rigoureux du chantier et vous tiennent informés à chaque étape des travaux.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="md:col-start-2 relative group">
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                  <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                    Livraison & garantie
                  </h3>
                  <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                  <p className="text-[#2b3343] leading-relaxed">
                    Nous effectuons une réception des travaux avec vous pour garantir votre entière satisfaction et vous accompagnons avec un service après-vente de qualité.
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

export default ProcessStepsSection;
