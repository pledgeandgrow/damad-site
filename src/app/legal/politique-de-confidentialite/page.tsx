import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - DAMAD ASCENSEURS',
  description: 'Politique de confidentialité de DAMAD ASCENSEURS - Comment nous collectons, utilisons et protégeons vos données personnelles.',
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2b3343] mb-4">Politique de Confidentialité</h1>
          <div className="w-24 h-1 bg-[#2b3343] mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-[#3d4759] mb-6">
            Dernière mise à jour : 3 juillet 2024
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">1. Introduction</h2>
          <p className="text-[#3d4759] mb-6">
            DAMAD Ascenseurs (ci-après dénommé &laquo; nous &raquo;, &laquo; notre &raquo; ou &laquo; nos &raquo;) s&apos;engage à protéger et à respecter votre vie privée. 
            Cette politique de confidentialité explique comment nous collectons, utilisons, protégeons et partageons vos informations personnelles.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">2. Données que nous collectons</h2>
          <p className="text-[#3d4759] mb-4">
            Nous pouvons collecter et traiter les données suivantes :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Informations de contact (nom, prénom, adresse e-mail, numéro de téléphone)</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Informations sur votre entreprise (si applicable)</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Détails de votre demande ou de votre projet</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Données de navigation et d&apos;utilisation de notre site web</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2b3343] mt-8 mb-4">3. Comment nous utilisons vos données</h2>
          <p className="text-[#3d4759] mb-4">
            Nous utilisons vos données pour :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Répondre à vos demandes de renseignements</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Vous fournir nos services</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Améliorer notre site web et nos services</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Vous envoyer des informations sur nos services (si vous avez donné votre accord)</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2b3343] mt-8 mb-4">4. Partage de vos données</h2>
          <p className="text-[#3d4759] mb-4">
            Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations avec :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Nos sous-traitants pour fournir nos services</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Les autorités compétentes si la loi nous y oblige</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2b3343] mt-8 mb-4">5. Vos droits</h2>
          <p className="text-[#3d4759] mb-4">
            Conformément à la réglementation sur la protection des données, vous disposez des droits suivants :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit d&apos;accès à vos données personnelles</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit de rectification de vos données</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit à l&apos;effacement de vos données</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit à la portabilité de vos données</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Droit d&apos;opposition</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2b3343] mt-8 mb-4">6. Sécurité des données</h2>
          <p className="text-[#3d4759] mb-8">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute altération, divulgation ou destruction.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mt-8 mb-4">7. Cookies</h2>
          <p className="text-[#3d4759] mb-8">
            Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour indiquer quand un cookie est envoyé.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mt-8 mb-4">8. Modifications de la politique de confidentialité</h2>
          <p className="text-[#3d4759] mb-8">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour révisée.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">9. Nous contacter</h2>
          <p className="text-[#3d4759] mb-4">
            Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, veuillez nous contacter à :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>DAMAD Ascenseurs</strong></span>
            </li>
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
              <span className="text-[#3d4759]"><strong>Adresse :</strong> 145 Rue Rateau, La Courneuve, 93120</span>
            </li>
          </ul>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <p className="text-[#3d4759] text-sm text-center">
              Dernière mise à jour : 3 juillet 2024
            </p>
            <div className="mt-6 text-center">
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
