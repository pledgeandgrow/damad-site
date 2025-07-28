import { FaSyncAlt, FaChartLine, FaLeaf, FaUniversalAccess } from 'react-icons/fa';
// Unused imports removed
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Modernisation d&apos;Ascenseurs - DAMAD',
  description: 'Services de modernisation d&apos;ascenseurs pour améliorer la sécurité, l&apos;efficacité énergétique et le confort de vos installations.',
};

const features = [
  {
    icon: <FaSyncAlt className="h-8 w-8 text-white" />,
    title: '',
    description: 'Le remplacement des composants tels que l&apos;armoire de manœuvre, moteur, variateur de fréquence'
  },
  {
    icon: <FaLeaf className="h-8 w-8 text-white" />,
    title: '',
    description: 'L&apos;installation de dispositifs d&apos;économies d&apos;énergies, par exemple l&apos;éclairage LED'
  },
  {
    icon: <FaUniversalAccess className="h-8 w-8 text-white" />,
    title: '',
    description: 'Le remplacement des portes de l&apos;ascenseur'
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-white" />,
    title: '',
    description: 'La réduction des vibrations et du bruit'
  },
  {
    icon: <FaSyncAlt className="h-8 w-8 text-white" />,
    title: '',
    description: 'La modernisation de la cabine avec un nouvel habillage des parois et du sol'
  }
];

// Removed unused clientTypes variable

export default function ModernisationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Banner Image Background */}
        <div className="absolute inset-0">
          <Image 
            src="/images/modernisation-banner.jpg" 
            alt="" 
            className="w-full h-full object-cover" 
            width={1920}
            height={1080}
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#2b3343] opacity-70"></div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Renovation & <span className="text-blue-200">Modernisation</span>
            </h1>
            <div className="w-24 h-1 bg-blue-200 mx-auto mb-8"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p>
              Moderniser partiellement ou totalement un ascenseur nécessite un réel savoir-faire.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b3343] mb-6">
              Pourquoi moderniser son ascenseur ?
            </h1>
            <div className="w-20 h-1 bg-[#2b3343] mx-auto mb-8"></div>
            <p>
              Lorsqu&apos;un ascenseur est vétuste, la maintenance préventive ne suffit plus à garantir un taux de panne acceptable.
              Réduire ses charges de réparation et dépannage - Réduire ses factures énergétiques - Augmenter la valeur de son
              bien – Adapter aux norme actuelles - Améliorer son confort au quotidien
            </p>
          </div>
        </div>
      </div>

      {/* Updated Features Section */}
      <div className="py-20 bg-white sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-6">
              Zoom sur la rénovation et la modernisation d&apos;ascenseurs
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-8"></div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 text-lg">
              La modernisation d&apos;un ascenseur consiste à remplacer ou à améliorer certains composants de l&apos;équipement pour améliorer ses performances, sa sécurité et son efficacité énergétique.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2b3343] h-full">
                  <div className="h-2 bg-[#2b3343]"></div>
                  <div className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 mx-auto bg-[#2b3343] transform transition-transform group-hover:scale-110 shadow-md">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    {feature.title && (
                      <>
                        <h3 className="text-xl font-bold mb-3 text-[#2b3343] group-hover:text-[#3d4759] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <div className="w-10 h-0.5 bg-[#2b3343] mx-auto mb-3"></div>
                      </>
                    )}
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional explanatory text */}
          <div className="mt-12 max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Cette démarche permet de prolonger la durée de vie de l&apos;installation tout en répondant aux normes actuelles.
            </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Nous sommes en mesure de vous proposer diverses solutions d&apos;accompagnement afin de mettre en réussite votre projet de rénovation et de modernisation !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notre Accompagnement Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-6">
              Notre accompagnement
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Un accompagnement sur mesure pour rénover et moderniser en toute sérénité.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#2b3343] hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="md:col-start-1 relative">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative z-10">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2b3343] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Description du projet de modernisation rénovation
                    </h3>
                    <p className="text-gray-600">
                      Nous prenons le temps d&apos;écouter et comprendre vos besoins spécifiques.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="md:col-start-2 relative">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative z-10">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2b3343] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Vous rencontrez notre responsable de travaux
                    </h3>
                    <p className="text-gray-600">
                      Un expert se déplace sur site pour évaluer précisément les travaux nécessaires.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="md:col-start-1 relative">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative z-10">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2b3343] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Estimation gratuite
                    </h3>
                    <p className="text-gray-600">
                      Nous vous proposons un devis détaillé et transparent, sans engagement.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="md:col-start-2 relative">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative z-10">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2b3343] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Accord & signature
                    </h3>
                    <p className="text-gray-600">
                      Une fois le devis validé, nous planifions ensemble les travaux selon vos contraintes.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="md:col-start-1 relative">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative z-10">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2b3343] text-white rounded-full flex items-center justify-center font-bold md:left-auto md:right-0 transform md:translate-x-1/2">
                      5
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Accompagnement et suivi de chantier
                    </h3>
                    <p className="text-gray-600">
                      Nos équipes assurent un suivi rigoureux et vous tiennent informés à chaque étape.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="md:col-start-2 relative">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 relative z-10">
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#2b3343] text-white rounded-full flex items-center justify-center font-bold md:right-auto md:left-0 transform md:-translate-x-1/2">
                      6
                    </div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-3">
                      Fin du chantier & Livraison
                    </h3>
                    <p className="text-gray-600">
                      Nous effectuons une réception des travaux avec vous pour garantir votre entière satisfaction.
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
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-6">
              Une plateforme digitale pour piloter votre projet de
              <br />
              rénovation et vos travaux
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-8"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left side - Image */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="relative w-full h-64">
                  <Image 
                    src="/images/digital-platform.jpg" 
                    alt="Plateforme digitale DAMAD" 
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Cards */}
            <div className="lg:w-1/2 space-y-6">
              {/* Card 1 - Espace client */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#2b3343] transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-[#2b3343] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-2">Espace client</h3>
                    <p className="text-gray-600">
                      Retrouvez vos propositions commerciales, devis en
                      ligne, facture, bon de commande et répondre aux
                      questions et à vos préoccupations et même après la
                      fin des travaux.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Conception collaborative */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#2b3343] transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-[#2b3343] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-2">Conception collaborative</h3>
                    <p className="text-gray-600">
                      Ajoutez vos commentaires et remarques sur le devis
                      et regardez les modifications apportées par le chef
                      de chantier.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Suivi de chantier */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#2b3343] transition-all duration-300">
                <div className="flex items-start">
                  <div className="bg-[#2b3343] rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2b3343] mb-2">Suivi de chantier</h3>
                    <p className="text-gray-600">
                      Depuis votre espace client, suivez chaque étape de
                      votre projet (avancement des travaux et éventuels
                      retard et changement de planning.)
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[#2b3343] font-medium text-lg text-center mt-8">
                Nos spécialistes vous guident pour mener à bien votre projet !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Showcase Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-6">
              Plus de 1000 projets réalisés
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {/* Row 1 */}
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/renovation-1.jpg" 
                  alt="Rénovation d&apos;ascenseur 1" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/renovation-2.jpg" 
                  alt="Rénovation d&apos;ascenseur 2" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/renovation-3.jpg" 
                  alt="Rénovation d&apos;ascenseur 3" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image 
                src="/images/renovation-4.jpg" 
                alt="Rénovation d&apos;ascenseur 4" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                width={500}
                height={256}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Row 2 */}
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Image 
                src="/images/renovation-5.jpg" 
                alt="Rénovation d&apos;ascenseur 5" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                width={500}
                height={256}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/renovation-6.jpg" 
                  alt="Rénovation d&apos;ascenseur 6" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/renovation-7.jpg" 
                  alt="Rénovation d&apos;ascenseur 7" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/renovation-8.jpg" 
                  alt="Rénovation d&apos;ascenseur 8" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contract Choice and Advantages Section */}
      <div className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contract Choice */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-[#2b3343] mb-6 leading-tight">
                Choisir mon contrat de<br />maintenance
              </h2>
              <p className="text-gray-700 mb-6">
                Nos contrats de maintenance sont établis en fonction de critères spécifiques :
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[#2b3343] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Complexité :</strong> L&apos;entretien ou la maintenance d&apos;ascenseurs exige une
                    expertise technique qui varie selon le type d&apos;équipement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Respect des normes et des réglementations :</strong> Nos équipes respectent
                    les normes les plus strictes. Votre technicien effectuera des interventions
                    occasionnelles pour réparer et/ou remplacer des pièces défectueuses ou
                    usagées : boutons de commande, automatisme de la porte, fonctionnement du
                    bouton d&apos;appel de secours, voyants lumineux, machinerie, éclairage, etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2b3343] font-bold mr-2">•</span>
                  <span className="text-gray-700">
                    <strong>Exigences particulières du site</strong>
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/contact" className="inline-block bg-[#2b3343] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md">
                  Vous souhaitez souscrire à un contrat de maintenance ? Contactez-nous
                </Link>
              </div>
            </div>
            
            {/* Right Column - DAMAD Advantages */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-[#2b3343] mb-6">
                Pourquoi choisir DAMAD
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-4 border-l-4 border-[#2b3343] bg-gray-50 rounded-r-lg">
                  <h3 className="font-bold text-[#2b3343] mb-2">TRANSPARENCE & ACCOMPAGNEMENT</h3>
                </div>
                
                <div className="p-4 border-l-4 border-[#2b3343] bg-gray-50 rounded-r-lg">
                  <h3 className="font-bold text-[#2b3343] mb-2">EXPERTISE</h3>
                </div>
                
                <div className="p-4 border-l-4 border-[#2b3343] bg-gray-50 rounded-r-lg">
                  <h3 className="font-bold text-[#2b3343] mb-2">CONSEILS PERSONNALISÉS</h3>
                </div>
                
                <div className="p-4 border-l-4 border-[#2b3343] bg-gray-50 rounded-r-lg">
                  <h3 className="font-bold text-[#2b3343] mb-2">SURMESURE</h3>
                </div>
                
                <div className="p-4 border-l-4 border-[#2b3343] bg-gray-50 rounded-r-lg">
                  <h3 className="font-bold text-[#2b3343] mb-2">DURABILITÉ</h3>
                </div>
                
                <div className="p-4 border-l-4 border-[#2b3343] bg-gray-50 rounded-r-lg">
                  <h3 className="font-bold text-[#2b3343] mb-2">SÉRÉNITÉ</h3>
                </div>
                
                <div className="p-4 border-l-4 border-[#2b3343] bg-gray-50 rounded-r-lg sm:col-span-2">
                  <h3 className="font-bold text-[#2b3343] mb-2">PLATEFORME DEDIEÉ</h3>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#2b3343] mb-4">
                  À vous la maintenance et l&apos;entretien simple et sereine !
                </h3>
                <p className="text-gray-700 italic">
                  La satisfaction client est notre priorité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-[#2b3343] to-[#3d4759] rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Vous avez un projet de rénovation et de modernisation?
              </h2>
              <p className="text-white text-lg mb-6">
                Besoin d&apos;information sur la maintenance après la fin de chantier ?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link 
                  href="/contact?subject=modernisation" 
                  className="bg-white text-[#2b3343] hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
                >
                  CONTACTEZ NOUS !
                </Link>
                <Link 
                  href="/devis" 
                  className="bg-transparent text-white border border-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  J&apos;estime mes travaux
                </Link>
              </div>
              <div className="mt-6">
                <Link 
                  href="/services/maintenance" 
                  className="text-white underline hover:text-blue-200 font-medium"
                >
                  MAINTENANCE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3">
              Questions fréquemment posées
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Question 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2b3343] mb-4">
                    Dans quelles villes d&apos;Île-de-France intervenez-vous ?
                  </h3>
                  <p className="text-gray-700">
                    Nous intervenons à Paris et petite couronne (92, 93, 94) ainsi qu&apos;une partie de la grande couronne (78, 95).
                  </p>
                </div>
              </div>
              
              {/* Question 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2b3343] mb-4">
                    Quels sont les signes indiquant qu&apos;un monte-charge nécessite une maintenance ?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Pour que votre monte-charge ou ascenseur continue de fonctionner de manière fiable et sécurisée, vous devez rester attentif aux signes qui indiquent un besoin
                    contrôle. Ignorer ses signes entraîne le risque de dysfonctionnements coûteux, compromet la sécurité des usagers.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Quelques signes courants à surveiller :
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Bruits inhabituels (grincements, cliquetis, vibrations excessives...) ;</li>
                    <li>Problèmes d&apos;ouverture et de fermeture des portes ;</li>
                    <li>Anomalies d&apos;affichage ou défauts de commande ;</li>
                    <li>Ralentissements ou arrêts inattendus ;</li>
                    <li>Mouvements irréguliers ou saccadés</li>
                  </ul>
                </div>
              </div>
              
              {/* Question 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2b3343] mb-4">
                    À quelle fréquence devez-vous faire la maintenance de votre ascenseur, monte-charge.
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Une fréquence de maintenance régulière est indispensable au bon fonctionnement et à la sécurité de votre installation.
                  </p>
                  <p className="text-gray-700 font-medium">
                    L&apos;intervalle entre deux visites d&apos;entretien et de maintenance ne peut pas être supérieur à six semaines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
