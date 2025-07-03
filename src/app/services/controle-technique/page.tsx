import { FaClipboardCheck, FaTools, FaShieldAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contrôle Technique - DAMAD ASCENSEURS',
  description: 'Service de contrôle technique réglementaire pour ascenseurs. Vérification de conformité et sécurité selon les normes en vigueur.',
};

const features = [
  {
    icon: <FaClipboardCheck className="h-8 w-8 text-steel-blue" />,
    title: 'Vérification complète',
    description: 'Contrôle minutieux de tous les éléments de sécurité et de fonctionnement de votre ascenseur.'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8 text-steel-blue" />,
    title: 'Conformité réglementaire',
    description: 'Respect des normes en vigueur et des obligations légales pour votre installation.'
  },
  {
    icon: <FaTools className="h-8 w-8 text-steel-blue" />,
    title: 'Rapport détaillé',
    description: 'Remise d&apos;un rapport complet avec les observations et les éventuelles préconisations.'
  },
  {
    icon: <FaClock className="h-8 w-8 text-steel-blue" />,
    title: 'Intervention rapide',
    description: 'Planification rapide des contrôles dans le respect des échéances réglementaires.'
  }
];

const steps = [
  {
    number: '01',
    title: 'Prise de contact',
    description: 'Évaluation de vos besoins et planification du contrôle.'
  },
  {
    number: '02',
    title: 'Intervention sur site',
    description: 'Réalisation des vérifications techniques par nos experts.'
  },
  {
    number: '03',
    title: 'Analyse des résultats',
    description: 'Examen approfondi des données recueillies.'
  },
  {
    number: '04',
    title: 'Rapport et recommandations',
    description: 'Remise du rapport détaillé avec nos préconisations.'
  }
];

export default function ControleTechnique() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/services/controle-technique.jpg"
            alt="Contrôle technique d&apos;ascenseur"
            fill
            className="w-full h-full object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contrôle Technique d&apos;Ascenseur
          </h1>
          <p className="mt-3 max-w-2xl text-xl text-gray-600 sm:mt-4">
            Un contrôle technique régulier est essentiel pour garantir la sécurité des utilisateurs et la conformité de votre installation. Notre équipe d&#39;experts réalise des contrôles complets et détaillés.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Un contrôle technique complet et fiable
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Nous assurons la conformité de votre ascenseur avec les dernières réglementations en vigueur.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-steel-blue/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Notre processus de contrôle technique
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Une méthode rigoureuse pour des résultats précis et fiables.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="relative pt-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-steel-blue/10 text-steel-blue text-lg font-semibold">
                    {step.number}
                  </div>
                  <div className="relative pt-16 pb-8 px-6 bg-white rounded-lg shadow-md h-full">
                    <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-steel-blue">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Besoin d&apos;un contrôle technique ?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Notre équipe est à votre disposition pour planifier une intervention rapide et professionnelle.
          </p>
          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-steel-blue hover:bg-steel-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-steel-blue"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
}
