import React from 'react';
import { Metadata } from 'next';
import { FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Politique de traitement RGPD | DAMAD',
  description: 'Découvrez notre politique de traitement des données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).',
};

export default function PolitiqueRGPDPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2b3343] mb-4">Politique de traitement RGPD</h1>
          <div className="w-24 h-1 bg-[#2b3343] mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-[#3d4759] mb-8 text-center">
            En vigueur au {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">1. Politique de protection des données personnelles</h2>
          <p className="text-[#3d4759] mb-8">
            Chez DAMAD, nous accordons une importance particulière à la protection de vos données personnelles. 
            Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
            conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">2. Responsable du traitement</h2>
          <p className="text-[#3d4759] mb-8">
            DAMAD, située au 3 BOULEVARD DE SEBASTOPOL, 75001 PARIS, France, est responsable du traitement des données 
            personnelles collectées sur notre site web et dans le cadre de nos services.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">3. Données collectées</h2>
          <p className="text-[#3d4759] mb-4">Nous pouvons collecter les types de données suivants :</p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Données d&apos;identification : nom, prénom, adresse email, numéro de téléphone</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Données de contact professionnel : société, fonction</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Données de localisation : adresse d&apos;installation</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Données techniques : informations sur votre équipement d&apos;ascenseur</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Données de navigation : cookies, adresse IP, pages visitées</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">4. Finalités du traitement</h2>
          <p className="text-[#3d4759] mb-4">Nous traitons vos données personnelles pour les finalités suivantes :</p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Gestion de la relation client et fourniture de nos services</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Traitement des demandes de devis et des commandes</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Planification des interventions de maintenance et dépannage</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Communication sur nos services et offres</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Amélioration de notre site web et de nos services</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Respect de nos obligations légales et réglementaires</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">5. Base légale du traitement</h2>
          <p className="text-[#3d4759] mb-4">Le traitement de vos données personnelles est fondé sur :</p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">L&apos;exécution d&apos;un contrat lorsque vous utilisez nos services</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Votre consentement pour l&apos;envoi de communications commerciales</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Notre intérêt légitime à développer et améliorer nos services</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Le respect de nos obligations légales</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">6. Destinataires des données</h2>
          <p className="text-[#3d4759] mb-4">
            Vos données personnelles peuvent être partagées avec :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Notre personnel autorisé</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Nos sous-traitants (hébergement, maintenance informatique, etc.)</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Les autorités administratives ou judiciaires si la loi l&apos;exige</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">7. Durée de conservation</h2>
          <p className="text-[#3d4759] mb-8">
            Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités pour lesquelles 
            elles ont été collectées, dans le respect des délais légaux de prescription.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">8. Vos droits</h2>
          <p className="text-[#3d4759] mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit d&apos;accès à vos données personnelles</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit de rectification des données inexactes</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit à l&apos;effacement (droit à l&apos;oubli)</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit à la limitation du traitement</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit à la portabilité de vos données</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit d&apos;opposition au traitement</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit de retirer votre consentement à tout moment</span>
            </li>
          </ul>
          
          <p className="text-[#3d4759] mb-8">
            Pour exercer ces droits, vous pouvez nous contacter par email à 
            <a href="mailto:contact@damad-ascenseur.com" className="text-blue-600 hover:underline"> contact@damad-ascenseur.com</a> ou par courrier à notre adresse.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">9. Sécurité des données</h2>
          <p className="text-[#3d4759] mb-8">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
            personnelles contre la perte, l&apos;accès non autorisé, la divulgation, l&apos;altération ou la destruction.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">10. Transferts internationaux de données</h2>
          <p className="text-[#3d4759] mb-8">
            Nous ne transférons pas vos données personnelles en dehors de l&apos;Union européenne. Si un tel transfert devait 
            avoir lieu, nous prendrions toutes les mesures nécessaires pour garantir un niveau de protection adéquat.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">11. Modifications de la politique</h2>
          <p className="text-[#3d4759] mb-8">
            Nous pouvons mettre à jour cette politique de confidentialité périodiquement. La version la plus récente 
            sera toujours disponible sur notre site web.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">12. Contact</h2>
          <p className="text-[#3d4759] mb-4">
            Pour toute question concernant cette politique ou pour exercer vos droits, veuillez nous contacter à :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Email :</strong> <a href="mailto:contact@damad-ascenseur.com" className="text-blue-600 hover:underline">contact@damad-ascenseur.com</a></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Téléphone :</strong> <a href="tel:+33148351234" className="text-blue-600 hover:underline">+33 1 48 35 12 34</a></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Adresse :</strong> 3 BOULEVARD DE SEBASTOPOL, 75001 PARIS, France</span>
            </li>
          </ul>
          
          <p className="text-[#3d4759] mb-8">
            Vous avez également le droit d&apos;introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique 
            et des Libertés (CNIL).
          </p>
          
          <p className="text-sm text-[#3d4759] mt-8 text-center">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}
