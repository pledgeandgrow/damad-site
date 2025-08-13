import React from 'react';
import { Metadata } from 'next';
import { FaChevronRight } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Politique de cookies | DAMAD',
  description: 'Découvrez notre politique d\'utilisation des cookies sur le site DAMAD.',
};

export default function PolitiqueCookiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2b3343] mb-4">Politique de cookies</h1>
          <div className="w-24 h-1 bg-[#2b3343] mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <p className="text-[#3d4759] mb-8 text-center">
            En vigueur au {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">1. Politique d&apos;utilisation des cookies</h2>
          <p className="text-[#3d4759] mb-8">
            Cette politique explique comment DAMAD utilise les cookies et technologies similaires 
            sur son site web. Nous vous invitons à lire attentivement ce document pour comprendre comment 
            nous collectons des informations à l&apos;aide de cookies.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">2. Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p className="text-[#3d4759] mb-8">
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
            lorsque vous visitez notre site web. Les cookies nous permettent de reconnaître votre navigateur 
            et de stocker certaines informations pour améliorer votre expérience de navigation et personnaliser 
            nos services.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">3. Types de cookies utilisés</h2>
          <p className="text-[#3d4759] mb-4">Nous utilisons différents types de cookies sur notre site :</p>
          
          <h3 className="text-xl font-semibold text-[#2b3343] mb-4">3.1 Cookies essentiels</h3>
          <p className="text-[#3d4759] mb-6">
            Ces cookies sont nécessaires au fonctionnement de notre site web. Ils vous permettent de naviguer 
            sur le site et d&apos;utiliser ses fonctionnalités essentielles. Sans ces cookies, notre site ne peut 
            pas fonctionner correctement.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2b3343] mb-4">3.2 Cookies analytiques</h3>
          <p className="text-[#3d4759] mb-6">
            Ces cookies nous permettent de recueillir des informations sur la façon dont les visiteurs utilisent 
            notre site, par exemple les pages les plus consultées ou les erreurs rencontrées. Ces cookies nous 
            aident à améliorer constamment notre site web.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2b3343] mb-4">3.3 Cookies fonctionnels</h3>
          <p className="text-[#3d4759] mb-6">
            Ces cookies permettent à notre site web de se souvenir des choix que vous avez faits (comme votre 
            nom d&apos;utilisateur, votre langue ou la région où vous vous trouvez) et fournissent des fonctionnalités 
            améliorées et plus personnalisées.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2b3343] mb-4">3.4 Cookies de ciblage ou publicitaires</h3>
          <p className="text-[#3d4759] mb-6">
            Ces cookies sont utilisés pour diffuser des publicités plus pertinentes pour vous et vos intérêts. 
            Ils sont également utilisés pour limiter le nombre de fois où vous voyez une publicité et pour mesurer 
            l&apos;efficacité des campagnes publicitaires.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">4. Cookies tiers</h2>
          <p className="text-[#3d4759] mb-8">
            Certains cookies sont placés par des services tiers qui apparaissent sur nos pages. Ils sont utilisés 
            pour vous permettre d&apos;interagir avec les réseaux sociaux ou pour collecter des statistiques sur votre 
            utilisation de notre site. Ces tiers peuvent combiner ces informations avec d&apos;autres informations que 
            vous leur avez fournies ou qu&apos;ils ont collectées lors de votre utilisation de leurs services.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">5. Durée de conservation des cookies</h2>
          <p className="text-[#3d4759] mb-4">
            Il existe deux types de cookies selon leur durée de vie :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Cookies de session :</strong> ces cookies sont temporaires et sont supprimés lorsque vous 
              fermez votre navigateur.</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Cookies persistants :</strong> ces cookies restent sur votre appareil jusqu&apos;à leur expiration 
              ou jusqu&apos;à ce que vous les supprimiez manuellement.</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">6. Gestion des cookies</h2>
          <p className="text-[#3d4759] mb-8">
            Vous pouvez contrôler et gérer les cookies de plusieurs façons. Veuillez noter que la suppression ou 
            le blocage des cookies peut affecter votre expérience utilisateur et certaines parties de notre site 
            pourraient ne plus être entièrement accessibles.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2b3343] mb-4">6.1 Paramètres du navigateur</h3>
          <p className="text-[#3d4759] mb-6">
            La plupart des navigateurs vous permettent de voir quels cookies vous avez et de les supprimer 
            individuellement ou de bloquer les cookies de certains ou de tous les sites web. Notez que si vous 
            supprimez tous les cookies, tous vos paramètres seront perdus, y compris la possibilité de refuser 
            les cookies, car cette fonction nécessite elle-même le placement d&apos;un cookie de refus sur votre appareil.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2b3343] mb-4">6.2 Comment gérer les cookies dans les principaux navigateurs</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Chrome :</strong> Menu &gt; Paramètres &gt; Afficher les paramètres avancés &gt; 
              Confidentialité &gt; Paramètres de contenu &gt; Cookies</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Firefox :</strong> Menu &gt; Options &gt; Vie privée &gt; Historique &gt; Paramètres personnalisés</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Internet Explorer :</strong> Menu &gt; Options Internet &gt; Confidentialité &gt; Paramètres</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Safari :</strong> Préférences &gt; Confidentialité</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><strong>Edge :</strong> Menu &gt; Paramètres &gt; Confidentialité et services</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">7. Modifications de notre politique de cookies</h2>
          <p className="text-[#3d4759] mb-8">
            Nous pouvons mettre à jour cette politique de cookies de temps à autre pour refléter, par exemple, 
            les changements apportés aux cookies que nous utilisons ou pour d&apos;autres raisons opérationnelles, 
            légales ou réglementaires. Nous vous encourageons donc à consulter régulièrement cette politique 
            pour rester informé de notre utilisation des cookies et des technologies connexes.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">8. Contact</h2>
          <p className="text-[#3d4759] mb-4">
            Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter à :
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
          
          <p className="text-sm text-[#3d4759] mt-8 text-center">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}
