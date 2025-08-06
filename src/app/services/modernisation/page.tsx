import { FaSyncAlt, FaChartLine, FaLeaf, FaUniversalAccess, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modernisation d&apos;Appareils d&apos;Accessibilité - DAMAD',
  description: 'Services de modernisation d&apos;appareils d&apos;accessibilité pour améliorer la sécurité, l&apos;efficacité énergétique et le confort de vos installations.',
};

const features = [
  {
    icon: <FaSyncAlt className="h-8 w-8 text-white" />,
    title: 'Remplacement de composants',
    description: 'Armoire de manœuvre, moteur, variateur de fréquence pour une performance optimale.'
  },
  {
    icon: <FaLeaf className="h-8 w-8 text-white" />,
    title: 'Économies d&apos;énergie',
    description: 'Installation de dispositifs écologiques comme l&apos;éclairage LED.'
  },
  {
    icon: <FaUniversalAccess className="h-8 w-8 text-white" />,
    title: 'Accessibilité améliorée',
    description: 'Remplacement des portes et mise aux normes d&apos;accessibilité.'
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-white" />,
    title: 'Confort acoustique',
    description: 'Réduction des vibrations et du bruit pour un meilleur confort.'
  }
];

export default function ModernisationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/services/ascenseur-en-verre-vers-un-metro-pietonnier-souterrain-avec-des-panneaux-de-verre-vert-et-un-pavage-tactile-dans-un-environnement-urbain-moderne.jpg" 
            alt="Rénovation et modernisation d&apos;appareils d&apos;accessibilité" 
            className="object-cover"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-8 py-6 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              MODERNISATION
            </h1>
            <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Solutions sur mesure pour la rénovation de vos appareils d&apos;accessibilité
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[2]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16 bg-[#fbfcfc] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Pourquoi moderniser son appareil d&apos;accessibilité ?
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
              Moderniser partiellement ou totalement un appareil d&apos;accessibilité nécessite un réel savoir-faire. Lorsqu&apos;un appareil est vétuste, la maintenance préventive ne suffit plus à garantir un taux de panne acceptable.
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

      {/* Features Section */}
      <div id="features" className="py-20 bg-[#fbfcfc] scroll-mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Zoom sur la rénovation et la modernisation
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              La modernisation d&apos;un appareil d&apos;accessibilité consiste à remplacer ou à améliorer certains composants de l&apos;équipement pour améliorer ses performances, sa sécurité et son efficacité énergétique.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#0046fe] group">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#0046fe] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#2b3343] tracking-tight">{feature.title}</h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] my-3"></div>
                    <p className="text-base text-[#2b3343]">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional explanatory text */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-[#f0f5f9] rounded-xl p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette démarche permet de prolonger la durée de vie de l&apos;installation tout en répondant aux normes actuelles.
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                Nous sommes en mesure de vous proposer diverses solutions d&apos;accompagnement afin de mettre en réussite votre projet de rénovation et de modernisation !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notre Accompagnement Section */}
      <div className="py-20 bg-[#fbfcfc] border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
              Notre accompagnement
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Un accompagnement sur mesure pour rénover et moderniser vos ascenseurs en toute sérénité.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#0046fe] opacity-50 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Step 1 */}
                <div className="md:col-start-1 relative group">
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                    <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Description du projet
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                    <p className="text-[#2b3343] leading-relaxed">
                      Nous prenons le temps d&apos;écouter et comprendre vos besoins spécifiques pour votre projet de modernisation et rénovation.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="md:col-start-2 relative group">
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                    <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Visite technique
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                    <p className="text-[#2b3343] leading-relaxed">
                      Notre responsable de travaux se déplace sur site pour évaluer précisément les travaux nécessaires et les contraintes techniques.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="md:col-start-1 relative group">
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                    <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Estimation gratuite
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                    <p className="text-[#2b3343] leading-relaxed">
                      Nous vous proposons un devis détaillé et transparent, sans engagement, avec différentes options adaptées à vos besoins.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="md:col-start-2 relative group">
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                    <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Accord & signature
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                    <p className="text-[#2b3343] leading-relaxed">
                      Une fois le devis validé, nous planifions ensemble les travaux selon vos contraintes et établissons un calendrier précis.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="md:col-start-1 relative group">
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                    <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Suivi de chantier
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                    <p className="text-[#2b3343] leading-relaxed">
                      Nos équipes assurent un accompagnement et suivi rigoureux du chantier et vous tiennent informés à chaque étape des travaux.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="md:col-start-2 relative group">
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0046fe] relative z-10">
                    <div className="absolute -top-5 -left-5 w-10 h-10 bg-[#0046fe] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      6
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Livraison & garantie
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0046fe] mb-3"></div>
                    <p className="text-[#2b3343] leading-relaxed">
                      Nous effectuons une réception des travaux avec vous pour garantir votre entière satisfaction et vous accompagnons avec un service après-vente de qualité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Platform Section */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
              Une plateforme digitale pour piloter votre projet
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Suivez en temps réel l&apos;avancement de votre projet de rénovation et modernisation grâce à notre plateforme digitale.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group">
                <div className="relative w-full h-80">
                  <Image 
                    src="/images/renovation/renovation1.jpg" 
                    alt="Gestion de projet de rénovation DAMAD" 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b3343]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <span className="text-white font-medium px-4 py-2 rounded-lg bg-[#0046fe]/80 backdrop-blur-sm">
                      Suivi de projet en temps réel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Cards */}
            <div className="lg:w-1/2 space-y-6">
              {/* Card 1 - Espace client */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] group">
                <div className="flex items-start">
                  <div className="bg-[#0046fe] rounded-full p-3 mr-4 transition-colors duration-300 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-2 group-hover:text-[#0046fe] transition-colors duration-300">Espace client personnalisé</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Retrouvez vos propositions commerciales, devis en
                      ligne, factures, bons de commande et communiquez avec nos équipes
                      avant, pendant et après la livraison de votre projet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Suivi de chantier */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] group">
                <div className="flex items-start">
                  <div className="bg-[#0046fe] rounded-full p-3 mr-4 transition-colors duration-300 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-2 group-hover:text-[#0046fe] transition-colors duration-300">Suivi de chantier en temps réel</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Suivez l&apos;avancement de vos travaux de modernisation,
                      consultez les photos, les rapports d&apos;intervention et le calendrier des étapes à venir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Communication */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] group">
                <div className="flex items-start">
                  <div className="bg-[#0046fe] rounded-full p-3 mr-4 transition-colors duration-300 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-2 group-hover:text-[#0046fe] transition-colors duration-300">Communication simplifiée</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Communiquez directement avec nos équipes via la
                      messagerie intégrée et recevez des notifications en temps réel sur l&apos;avancement de votre projet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Showcase Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-6">
              Nos réalisations de rénovation
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Real renovation images */}
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/APRES-1-2.jpg" 
                  alt="Rénovation d'ascenseur - Après travaux" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/APRES.jpg" 
                  alt="Rénovation d'ascenseur - Résultat final" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/REMPLACEMENT ANEP BOX.jpg" 
                  alt="Remplacement ANEP Box" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/REMPLACEMENT DE BOITE ROUGE.jpg" 
                  alt="Remplacement de boîte rouge" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/REMPLACEMENT DE FERME PORTE - ASCENSEURS.jpg" 
                  alt="Remplacement de ferme-porte pour ascenseurs" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/REMPLACEMENT FERME PORTE.jpg" 
                  alt="Remplacement ferme-porte" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/REMPLACEMENT LUMIERE.jpg" 
                  alt="Remplacement d'éclairage" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/renovation/REMPLACMENT DE NEON (1).jpg" 
                  alt="Remplacement de néon" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#ff5c35] hover:bg-[#e64a24] transition-all duration-300">
              Contactez-nous
              <FaArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}
