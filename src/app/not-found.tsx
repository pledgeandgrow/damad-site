'use client';

import Link from 'next/link';
import { FaHome, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <FaExclamationTriangle className="text-[#2b3343] mx-auto text-6xl mb-4" />
          <h1 className="text-6xl font-bold text-[#2b3343] mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page non trouvée</h2>
          <p className="text-gray-600 mb-8">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <FaHome className="mr-2" />
              Retour à l&apos;accueil
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-[#2b3343] text-[#2b3343] font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto"
            >
              <FaArrowLeft className="mr-2" />
              Page précédente
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
