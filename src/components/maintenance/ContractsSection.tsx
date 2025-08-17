import Link from 'next/link';

export default function ContractsSection() {
  return (
    <div className="bg-[#fbfcfc] py-12 xs:py-16 sm:py-20 border-t border-gray-100">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10">
          <span className="text-[#0046fe] font-semibold tracking-wider text-sm uppercase">Solutions personnalisées</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 mt-2">
            Nos Contrats de Maintenance et d&apos;Entretien
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-[#2b3343] max-w-3xl mx-auto text-sm italic mb-4 bg-blue-50 py-2 px-4 rounded-lg inline-block">
            conforme aux dispositions de l&apos;article 79 de la loi du 2 juillet 2003 et du décret 2004-964
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 mb-6 xs:mb-8">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:gap-8 mb-12 max-w-5xl mx-auto">
          {/* Contract 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full transform hover:-translate-y-1">
            <div className="h-2 bg-[#2b3343]"></div>
            <div className="p-4 xs:p-6 sm:p-8">
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
            <div className="p-4 xs:p-6 sm:p-8">
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
          
          {/* Contract 3 - Premium */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full transform hover:-translate-y-1">
            <div className="h-2 bg-[#0046fe]"></div>
            <div className="p-4 xs:p-6 sm:p-8">
              <div className="w-16 h-16 bg-[#f0f5f9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#0046fe] font-bold text-lg">03</span>
              </div>
              <h3 className="text-xl font-bold mb-6 text-[#2b3343] text-center">CONTRAT PREMIUM</h3>
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
                  <span className="text-gray-700 font-medium">Réparation et remplacement pièces</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">Référentiel AFNOR</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">Assistance prioritaire 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#f0f5f9] flex items-center justify-center mr-3">
                    <svg className="h-3 w-3 text-[#0046fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">Garantie étendue</span>
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
  );
}
