import { FaCheckCircle, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';

export default function DevisSuccess() {
  return (
    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <FaCheckCircle className="h-10 w-10 text-green-600" aria-hidden="true" />
          </div>
        </div>
        
        <h2 className="mt-6 text-3xl font-extrabold text-[#2b3343]">
          Demande de devis envoyée avec succès !
        </h2>
        
        <p className="mt-4 text-lg text-[#2b3343]">
          Merci pour votre confiance. Nous avons bien reçu votre demande et nous vous recontacterons dans les plus brefs délais.
        </p>
        
        <div className="mt-10 bg-blue-50 rounded-lg p-6 text-left">
          <h3 className="text-lg font-medium text-[#2b3343] mb-4">
            Prochaines étapes
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaEnvelope className="h-5 w-5 text-[#2b3343]" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#2b3343]">
                  Vous allez recevoir un email de confirmation avec les détails de votre demande.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaPhoneAlt className="h-5 w-5 text-[#2b3343]" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#2b3343]">
                  Un conseiller vous contactera sous 24h ouvrées pour discuter de votre projet.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <FaClock className="h-5 w-5 text-[#2b3343]" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#2b3343]">
                  Notre équipe est disponible du lundi au vendredi de 9h à 18h pour répondre à toutes vos questions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#2b3343] hover:bg-[#3d4759] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b3343]"
          >
            Retour à l&apos;accueil
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b3343]"
          >
            Nous contacter
          </Link>
        </div>
        
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-sm text-[#2b3343]">
            Besoin d&apos;une réponse immédiate ? Appelez-nous au{' '}
            <a href="tel:+33123456789" className="font-medium text-[#2b3343] hover:text-[#3d4759]">
              01 23 45 67 89
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
