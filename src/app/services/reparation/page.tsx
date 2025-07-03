import { FaTools, FaCogs, FaShieldAlt, FaClipboardCheck, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réparation d\'Ascenseurs - DAMAD ASCENSEURS',
  description: 'Service professionnel de réparation d\'ascenseurs avec diagnostics précis et interventions rapides pour une remise en service fiable de vos équipements.',
};

const commonIssues = [
  {
    icon: <FaTools className="h-6 w-6 text-steel-blue" />,
    title: 'Panne électrique',
    description: 'Problèmes de courant, dysfonctionnements des commandes, etc.'
  },
  {
    icon: <FaCogs className="h-6 w-6 text-steel-blue" />,
    title: 'Défaillance mécanique',
    description: 'Usure des pièces, problèmes de frein, etc.'
  },
  {
    icon: <FaShieldAlt className="h-6 w-6 text-steel-blue" />,
    title: 'Problème de sécurité',
    description: 'Défaillance des systèmes de sécurité, portes bloquées, etc.'
  },
  {
    icon: <FaClipboardCheck className="h-6 w-6 text-steel-blue" />,
    title: 'Dysfonctionnement des portes',
    description: 'Portes qui ne s&apos;ouvrent ou ne se ferment pas correctement.'
  }
];

const interventionSteps = [
  {
    step: '1',
    title: 'Diagnostic',
    description: 'Analyse précise de la panne par nos techniciens qualifiés.'
  },
  {
    step: '2',
    title: 'Devis',
    description: 'Établissement d\'un devis détaillé et transparent.'
  },
  {
    step: '3',
    title: 'Réparation',
    description: 'Intervention rapide avec des pièces d\'origine.'
  },
  {
    step: '4',
    title: 'Contrôle',
    description: 'Vérification complète du bon fonctionnement.'
  }
];

export default function ReparationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/services/reparation.jpg"
            alt="Réparation d&apos;ascenseur"
            fill
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Service de Réparation d&apos;Ascenseurs
          </h1>
          <p className="mt-6 text-xl text-yellow-100 max-w-3xl">
            Un service d&apos;urgence 24/7 pour toutes les pannes d&apos;ascenseurs, avec des techniciens qualifiés et des pièces détachées disponibles.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-steel-blue px-5 py-3 text-base font-medium text-white hover:bg-steel-blue/90 focus:outline-none focus:ring-2 focus:ring-steel-blue focus:ring-offset-2"
            >
              Urgence 24/7
            </Link>
            <Link href="tel:+33123456789" className="text-base font-medium text-yellow-100 hover:text-white">
              <span className="flex items-center">
                <FaPhone className="mr-2" /> 01 23 45 67 89
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Common Issues Section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pannes les plus courantes
            </h2>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl">
              Notre équipe d&apos;experts est disponible 24/7 pour résoudre rapidement tout problème technique.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {commonIssues.map((issue, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-md bg-steel-blue text-white">
                      {issue.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{issue.title}</h3>
                    <p className="mt-5 text-base text-gray-600">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intervention Process */}
      <div className="bg-steel-blue/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Notre processus d&apos;intervention
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Une prise en charge rapide et efficace de votre problème.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {interventionSteps.map((step) => (
                <div key={step.step} className="relative group">
                  <div className="absolute -inset-1 bg-steel-blue/20 rounded-lg opacity-50 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative bg-white p-6 rounded-lg h-full">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-steel-blue text-white text-lg font-bold">
                      {step.step}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-steel-blue">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Urgence ascenseur bloqué ?</span>
            <span className="block text-yellow-200">Nos techniciens interviennent sous 2h*</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="tel:+33123456789"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-steel-blue bg-white hover:bg-gray-50"
              >
                <FaPhone className="mr-2" /> Appeler maintenant
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-steel-blue hover:bg-steel-blue/90"
              >
                Demander un rappel
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-white/80 text-sm pb-4">*Dans la limite des disponibilités et de la zone d&apos;intervention</p>
      </div>
    </div>
  );
}
