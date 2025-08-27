"use client";

import FaqDropdown from '@/components/FaqDropdown';

export default function FAQSection() {
  return (
    <div className="py-8 sm:py-10 bg-[#fbfcfd]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4">
            Questions fréquemment posées
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* FAQ Item 1 */}
          <FaqDropdown question="Dans quelles villes d'Île-de-France intervenez-vous ?">
            <p>
              Nous intervenons à Paris et petite couronne (92, 93, 94) ainsi qu&apos;une partie de la grande couronne (78, 95).
            </p>
          </FaqDropdown>
          
          {/* FAQ Item 2 */}
          <FaqDropdown question="Quels sont les signes indiquant qu'un monte-charge nécessite une maintenance ?">
            <p className="mb-4">
              Pour que votre monte-charge ou ascenseur continue de fonctionner de manière fiable et sécurisée, vous devez rester attentif aux signes qui indiquent un besoin
              contrôle. Ignorer ses signes entraîne le risque de dysfonctionnements coûteux, compromet la sécurité des usagers.
            </p>
            <p className="mb-2 font-semibold">Quelques signes courants à surveiller :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bruits inhabituels (grincements, cliquetis, vibrations excessives...) ;</li>
              <li>Problèmes d&apos;ouverture et de fermeture des portes ;</li>
              <li>Anomalies d&apos;affichage ou défauts de commande ;</li>
              <li>Ralentissements ou arrêts inattendus ;</li>
              <li>Mouvements irréguliers ou saccadés</li>
            </ul>
          </FaqDropdown>
          
          {/* FAQ Item 3 */}
          <FaqDropdown question="À quelle fréquence devez-vous faire la maintenance de votre appareil d'accessibilité ?">
            <p>
              Une fréquence de maintenance régulière est indispensable au bon fonctionnement et à la sécurité de votre installation.
              L&apos;intervalle entre deux visites d&apos;entretien et de maintenance ne peut pas être supérieur à six semaines.
            </p>
          </FaqDropdown>
        </div>
      </div>
    </div>
  );
}
