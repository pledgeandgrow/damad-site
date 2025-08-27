export default function ContractSection() {
  return (
    <div className="py-8 sm:py-10 bg-[#fbfcfc] border-t border-gray-100">
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
      </div>
    </div>
  );
}
