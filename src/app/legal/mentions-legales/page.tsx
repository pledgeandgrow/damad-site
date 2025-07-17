import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - DAMAD',
  description: 'Mentions légales de DAMAD - Toutes les informations légales concernant notre entreprise et ce site web.',
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2b3343] mb-4">Mentions Légales</h1>
          <div className="w-20 h-1 bg-[#2b3343] mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">1. Éditeur du site</h2>
          <p className="text-[#3d4759] mb-6">
            Le site <span className="font-medium text-[#2b3343]">https://damad-ascenseurs.com/</span> est édité par :
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]"><span className="font-medium text-[#2b3343]">DAMAD</span> - SARL au capital de 20 000,00 € (fixe)</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Siège social : 3 BOULEVARD DE SEBASTOPOL, 75001 PARIS, France</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">RCS Paris 123 456 789</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">N° TVA intracommunautaire : FR77499039931</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Téléphone : <Link href="tel:+33123456789" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">+33 1 23 45 67 89</Link></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Email : <Link href="mailto:contact@damad-ascenseurs.com" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">contact@damad-ascenseurs.com</Link></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Directeur de la publication : <span className="font-medium text-[#2b3343]">Johny MENDY</span></span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">2. Réalisateur du site</h2>
          <p className="text-[#3d4759] mb-2">
            PLEDGE AND GROW
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">4bis rue Alfred Nobel - 77420 Champs-sur-Marne - France</span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Tél : <Link href="tel:+33753695840" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">+33.7.53.69.58.40</Link></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Adresse e-mail : <Link href="mailto:commercial@pledgeandgrow.com" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">commercial@pledgeandgrow.com</Link></span>
            </li>
            <li className="flex">
              <FaChevronRight className="text-[#2b3343] mt-1 mr-2 flex-shrink-0" />
              <span className="text-[#3d4759]">Site web : <Link href="https://pledgeandgrow.com/" target="_blank" rel="noopener noreferrer" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">pledgeandgrow.com</Link></span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">3. Hébergement</h2>
          <p className="text-[#3d4759] mb-8">
            Le site est hébergé par :
            <br />
            <span className="font-medium text-[#2b3343]">Vercel Inc.</span>
            <br />
            340 S Lemon Ave #4133
            <br />
            Walnut, CA 91789
            <br />
            <Link href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">www.vercel.com</Link>
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">4. Propriété intellectuelle</h2>
          <p className="text-[#3d4759] mb-8">
            L&apos;ensemble des éléments constituant le site damad-ascenseurs.com (textes, images, vidéos, logos, etc.) est la propriété exclusive de DAMAD ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie des éléments du site sans l&apos;accord préalable et écrit de DAMAD est strictement interdite et constituerait un acte de contrefaçon sanctionné par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
          <p className="text-[#3d4759] mb-8">
            Les marques et logos figurant sur le site sont des marques déposées. Toute reproduction, imitation ou usage, total ou partiel, de ces marques sans l&apos;accord préalable et écrit de leurs propriétaires est strictement interdite.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">5. Données personnelles</h2>
          <p className="text-[#3d4759] mb-4">
            Conformément à la loi &apos;Informatique et Libertés&apos; du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez d&apos;un droit d&apos;accès, de rectification, de portabilité, d&apos;effacement de vos données ou de limitation du traitement. Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
          </p>
          <p className="text-[#3d4759] mb-8">
            Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse email suivante : <Link href="mailto:contact@damad-ascenseurs.com" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">contact@damad-ascenseurs.com</Link> ou par courrier à l&apos;adresse du siège social.
          </p>
          <p className="text-[#3d4759] mb-8">
            Pour plus d&apos;informations sur la manière dont nous traitons vos données, consultez notre <Link href="/politique-de-confidentialite" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">Politique de Confidentialité</Link>.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">6. Cookies</h2>
          <p className="text-[#3d4759] mb-8">
            Le site damad-ascenseurs.com utilise des cookies pour améliorer votre expérience de navigation et réaliser des statistiques de visites. En poursuivant votre navigation sur ce site, vous acceptez l&apos;utilisation de cookies conformément à notre <Link href="/politique-de-confidentialite#cookies" className="text-[#2b3343] hover:text-[#3d4759] hover:underline transition-colors">Politique de Cookies</Link>.
          </p>
          <p className="text-[#3d4759] mb-8">
            Vous pouvez à tout moment paramétrer votre navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne plus être accessibles.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">7. Liens hypertextes</h2>
          <p className="text-[#3d4759] mb-8">
            Le site damad-ascenseurs.com peut contenir des liens hypertextes vers d&apos;autres sites. DAMAD ne peut être tenu pour responsable du contenu de ces sites ou des éventuels dommages causés par leur consultation.
          </p>
          <p className="text-[#3d4759] mb-8">
            La création de liens hypertextes vers le site damad-ascenseurs.com est soumise à l&apos;accord préalable et écrit de DAMAD.
          </p>

          <h2 className="text-2xl font-semibold text-[#2b3343] mb-6">8. Limitation de responsabilité</h2>
          <p className="text-[#3d4759] mb-8">
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une erreur ou ce qui peut être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d&apos;ordinateur et de navigateur utilisé, etc.).
          </p>
          <p className="text-[#3d4759] mb-8">
            Tout contenu téléchargé se fait aux risques et périls de l&apos;utilisateur et sous sa seule responsabilité. En conséquence, DAMAD ne saurait être tenu responsable d&apos;un quelconque dommage subi par l&apos;ordinateur de l&apos;utilisateur ou d&apos;une quelconque perte de données consécutives au téléchargement.
          </p>
          <p className="text-gray-600 mb-8">
            Les liens hypertextes mis en place dans le cadre du présent site internet en direction d&apos;autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de DAMAD.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">9. Droit applicable et juridiction compétente</h2>
          <p className="text-gray-600 mb-8">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
          <p className="text-gray-600 mb-8">
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter par email à <Link href="mailto:contact@damad-ascenseurs.com" className="text-[#4a90e2] hover:underline">contact@damad-ascenseurs.com</Link> ou par courrier à l&apos;adresse du siège social.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">10. Crédits</h2>
          <p className="text-gray-600">
            Conception et réalisation : Équipe DAMAD
            <br />
            Icônes : Font Awesome, Heroicons
            <br />
            Images : Banques d&apos;images libres de droits
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Dernière mise à jour : 3 juillet 2025
          </p>
          <div className="mt-6">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#4a90e2] hover:bg-[#3a7bc8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a90e2] transition-colors duration-200"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
