import { FaCheckCircle, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function DevisSuccess() {
  // Log when the component is rendered to help with debugging
  useEffect(() => {
    console.log('DevisSuccess component rendered');
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center"
    >
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl border border-green-200 p-8">
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 shadow-lg">
            <FaCheckCircle className="h-12 w-12 text-green-600" aria-hidden="true" />
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-3xl font-extrabold text-[#2b3343]"
        >
          Demande de devis envoyée avec succès !
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-4 text-lg text-[#2b3343]"
        >
          Merci pour votre confiance. Nous avons bien reçu votre demande et nous vous recontacterons dans les plus brefs délais.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 bg-blue-50 rounded-lg p-6 text-left shadow-md"
        >
          <h3 className="text-lg font-medium text-[#2b3343] mb-4">
            Prochaines étapes
          </h3>
          
          <div className="space-y-4">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <FaEnvelope className="h-5 w-5 text-[#2b3343]" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#2b3343]">
                  Vous allez recevoir un email prochainement concernant votre demande.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <FaPhoneAlt className="h-5 w-5 text-[#2b3343]" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#2b3343]">
                  Un conseiller vous contactera bientôt pour discuter de votre projet.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0">
                <FaClock className="h-5 w-5 text-[#2b3343]" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#2b3343]">
                  Notre équipe est disponible du lundi au vendredi de 8h à 18h pour répondre à toutes vos questions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-3"
        >
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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-10 border-t border-gray-200 pt-6"
        >
          <p className="text-sm text-[#2b3343]">
            Besoin d&apos;une réponse immédiate ? Appelez-nous au{' '}
            <a href="tel:+33123456789" className="font-medium text-[#2b3343] hover:text-[#3d4759]">
              09 70 72 22 63
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
