import Link from 'next/link';

export default function ThreeAreasSection() {
  return (
    <div className="py-10 xs:py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8">
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
                <span><strong>Complexité :</strong> L&#39;entretien ou la maintenance d&#39;appareils d&#39;accessibilité exige une expertise technique qui varie selon le type d&#39;équipement</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0046fe] font-bold mr-2">•</span>
                <span><strong>Respect des normes et des réglementations :</strong> Nos équipes respectent les normes les plus strictes. Votre technicien effectuera des interventions occasionnelles pour réparer et/ou remplacer des pièces défectueuses ou usagées : boutons de commande, automatisme de la porte, fonctionnement du bouton d&#39;appel de secours, voyants lumineux, machinerie, éclairage, etc.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0046fe] font-bold mr-2">•</span>
                <span><strong>Exigences particulières du site</strong></span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-gray-700 font-semibold mb-4">Vous souhaitez souscrire à un contrat de maintenance ?</p>
              <Link href="/contact" className="inline-block bg-[#ff5c35] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#ff5c35]/80 transition-colors duration-300 shadow-md text-center">
                CONTACTEZ-NOUS
              </Link>
            </div>
          </div>
          {/* Right Area */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#2b3343] mb-4">
              Pourquoi choisir DAMAD?
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mb-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              <div className="p-4 bg-[#fbfcfd] rounded-lg">
                <h3 className="text-lg font-bold text-[#2b3343] mb-2">TRANSPARENCE & ACCOMPAGNEMENT</h3>
                <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                <p className="text-gray-700">Nous vous accompagnons à chaque étape avec une communication claire et transparente.</p>
              </div>
              
              <div className="p-4 bg-[#fbfcfd] rounded-lg">
                <h3 className="text-lg font-bold text-[#2b3343] mb-2">EXPERTISE</h3>
                <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                <p className="text-gray-700">Nos techniciens sont formés aux dernières technologies et normes du secteur.</p>
              </div>
              
              <div className="p-4 bg-[#fbfcfd] rounded-lg">
                <h3 className="text-lg font-bold text-[#2b3343] mb-2">CONSEILS PERSONNALISÉS</h3>
                <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                <p className="text-gray-700">Nous élaborons des solutions adaptées à vos besoins spécifiques.</p>
              </div>
              
              <div className="p-4 bg-[#fbfcfd] rounded-lg">
                <h3 className="text-lg font-bold text-[#2b3343] mb-2">SUR-MESURE</h3>
                <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                <p className="text-gray-700">Chaque installation est unique et reçoit un traitement personnalisé.</p>
              </div>
              
              <div className="p-4 bg-[#fbfcfd] rounded-lg">
                <h3 className="text-lg font-bold text-[#2b3343] mb-2">DURABILITÉ</h3>
                <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                <p className="text-gray-700">Nos solutions visent à prolonger la durée de vie de vos équipements.</p>
              </div>
              
              <div className="p-4 bg-[#fbfcfd] rounded-lg">
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
            A vous la maintenance et l&apos;entretien simple et sereine !
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-xl text-[#0046fe] font-semibold">
            La satisfaction client est notre priorité
          </p>
        </div>
      </div>
    </div>
  );
}
