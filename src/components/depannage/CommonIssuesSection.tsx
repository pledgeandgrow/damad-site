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

export default function CommonIssuesSection() {
  return (
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
  );
}
