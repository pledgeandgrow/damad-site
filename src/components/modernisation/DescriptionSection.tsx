const DescriptionSection = () => {
  return (
    <div className="py-16 bg-[#fbfcfc] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            Pourquoi moderniser son appareil d{`'`}accessibilité ?
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Moderniser partiellement ou totalement un appareil d{`'`}accessibilité nécessite un réel savoir-faire. Lorsqu{`'`}un appareil est vétuste, la maintenance préventive ne suffit plus à garantir un taux de panne acceptable.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-left hover:border-[#0046fe] transition-all duration-300">
            <p className="text-[#2b3343] font-medium mb-4">La modernisation permet de :</p>
            <ul className="text-[#2b3343] space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                  <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Réduire ses charges de réparation et dépannage</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                  <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Réduire ses factures énergétiques</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                  <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Augmenter la valeur de son bien</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                  <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Adapter aux normes actuelles</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                  <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>Améliorer son confort au quotidien</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionSection;
