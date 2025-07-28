'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

export default function InterventionsCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('interventions-cta');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="interventions-cta" 
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-gradient-to-br from-[#2b3343] to-[#3d4759] rounded-2xl p-8 sm:p-12 shadow-xl overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 
              className={`text-2xl sm:text-3xl font-bold text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Besoin d&apos;une intervention en urgence ?
            </h2>
            
            <p 
              className={`text-white text-lg mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos besoins d&apos;intervention urgente. 
              Contactez-nous par téléphone ou planifiez un rendez-vous en ligne.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row justify-center gap-4 mb-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link 
                href="tel:+33123456789" 
                className="bg-white text-[#2b3343] hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center"
              >
                <FaPhoneAlt className="mr-2" /> 
                Appeler maintenant
              </Link>
              
              <Link 
                href="/contact?subject=intervention" 
                className="bg-transparent text-white border border-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <FaEnvelope className="mr-2" />
                Nous contacter
              </Link>
            </div>
            
            <div 
              className={`mt-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link 
                href="/devis?service=depannage" 
                className="text-white underline hover:text-blue-200 font-medium flex items-center justify-center"
              >
                <FaCalendarAlt className="mr-2" />
                Planifier une intervention
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
