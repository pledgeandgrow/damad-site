import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente - DAMAD',
  description: 'Conditions Générales de Vente de DAMAD - Toutes les conditions applicables à nos services d\'installation et maintenance d\'ascenseurs.',
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2b3343] mb-4">Conditions Générales de Vente</h1>
          <div className="w-24 h-1 bg-[#2b3343] mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-[#3d4759] mb-8 text-center">
            En vigueur au 3 juillet 2024
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">1. Objet</h2>
          <p className="text-[#3d4759] mb-8">
            Les présentes conditions générales de vente (CGV) s&apos;appliquent à toutes les prestations de services réalisées par DAMAD, société spécialisée dans l&apos;installation, la maintenance et le dépannage d&apos;ascenseurs.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">2. Devis et commande</h2>
          <p className="text-[#3d4759] mb-4">
            Toute prestation fait l&apos;objet d&apos;un devis détaillé, établi après une étude préalable. Le devis est valable 30 jours à compter de sa date d&apos;émission.
          </p>
          <p className="text-[#3d4759] mb-8">
            La commande est considérée comme ferme et définitive après acceptation écrite du devis par le client et versement d&apos;un acompte de 30% du montant total hors taxes.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">3. Prix et modalités de paiement</h2>
          <p className="text-[#3d4759] mb-4">
            Les prix sont indiqués en euros hors taxes. Ils sont fermes et non révisables pendant la validité du devis, sous réserve des modifications techniques qui pourraient s&apos;avérer nécessaires.
          </p>
          <p className="text-[#3d4759] mb-4">
            Les modalités de paiement sont les suivantes :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">30% à la commande</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">40% à la livraison du matériel</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">30% à la réception des travaux</span>
            </li>
          </ul>
          <p className="text-[#3d4759] mb-8">
            Tout retard de paiement entraîne de plein droit l&apos;application d&apos;une pénalité de 3 fois le taux d&apos;intérêt légal.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">4. Délais d&apos;exécution</h2>
          <p className="text-[#3d4759] mb-8">
            Les délais indiqués sont donnés à titre indicatif et ne sont pas garantis. Ils ne constituent pas des délais contractuels et ne peuvent donner lieu à des dommages et intérêts en cas de dépassement.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">5. Garantie</h2>
          <p className="text-[#3d4759] mb-8">
            Toutes nos prestations bénéficient de la garantie légale de conformité et de la garantie des vices cachés, conformément aux articles L217-4 et suivants du Code de la consommation.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">6. Réception des travaux</h2>
          <p className="text-[#3d4759] mb-8">
            La réception des travaux fait l&apos;objet d&apos;un procès-verbal signé par les deux parties. Toute réclamation doit être formulée par écrit dans un délai de 8 jours à compter de la réception.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">7. Responsabilité</h2>
          <p className="text-[#3d4759] mb-8">
            Notre responsabilité ne pourra être engagée pour les dommages résultant d&apos;une utilisation inappropriée du matériel ou d&apos;une intervention effectuée par un tiers non agréé.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">8. Résolution des litiges</h2>
          <p className="text-[#3d4759] mb-8">
            En cas de litige, le client peut recourir à un médiateur de la consommation ou à tout autre mode alternatif de résolution des litiges. Le client peut également consulter le site de la Commission européenne de la justice en ligne : 
            <a href="https://ec.europa.eu/consumers/odr/" className="text-[#2b3343] hover:underline" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">9. Droit applicable et juridiction compétente</h2>
          <p className="text-[#3d4759] mb-8">
            Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les tribunaux du lieu du siège social de DAMAD seront seuls compétents.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">10. Données personnelles</h2>
          <p className="text-[#3d4759] mb-8">
            Les données personnelles collectées sont traitées conformément à notre 
            <Link href="/legal/politique-de-confidentialite" className="text-[#2b3343] hover:underline ml-1">
              politique de confidentialité
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">11. Contact</h2>
          <p className="text-[#3d4759] mb-4">
            Pour toute question concernant nos conditions générales de vente, vous pouvez nous contacter :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Email :</strong> <a href="mailto:contact@damad-ascenseur.com" className="text-blue-600 hover:underline">contact@damad-ascenseur.com</a></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Téléphone :</strong> <a href="tel:+33123456789" className="text-blue-600 hover:underline">+33 1 23 45 67 89</a></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Adresse :</strong> 3 BOULEVARD DE SEBASTOPOL, 75001 PARIS, France</span>
            </li>
          </ul>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-[#3d4759] text-sm text-center mb-6">
              Dernière mise à jour : 3 juillet 2024
            </p>
            <div className="text-center">
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#2b3343] hover:bg-[#3d4759] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b3343] transition-colors duration-200"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
