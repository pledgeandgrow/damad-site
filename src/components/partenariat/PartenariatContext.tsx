'use client';

import { useEffect, useState } from 'react';
import { FaHandshake, FaUsers } from 'react-icons/fa';

export default function PartenariatContext() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('partenariat-details');
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
    <section id="partenariat-details" className="py-20 bg-[#fbfcfd] -mt-[72px] md:-mt-[96px] pt-[92px] md:pt-[116px]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2b3343] mb-3 sm:mb-4">
            Ensembles créons une synergie des compétences
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white p-8 rounded-xl shadow-md transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-gray-700 mb-6">
              Vous êtes parqueteurs, plombiers, serruriers, maçons, vitriers, électriciens, mécaniciens, peintres, étancheur,
              dératiseurs, service de nettoyage industriels, services de propreté avant et fin de chantier ...?
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Collaborez avec DMD en tant que partenaire pour des prestations périphériques à notre mission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-[#0046fe] rounded-lg shadow-md mr-3">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <h4 className="font-semibold text-[#2b3343]">Stratégie</h4>
                </div>
                <p className="text-gray-700">Vous serez placé au cœur de notre stratégie de développement</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-[#0046fe] rounded-lg shadow-md mr-3">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <h4 className="font-semibold text-[#2b3343]">Clients</h4>
                </div>
                <p className="text-gray-700">Vous élargirez votre base de clients</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-[#0046fe] rounded-lg shadow-md mr-3">
                    <FaHandshake className="text-white text-xl" />
                  </div>
                  <h4 className="font-semibold text-[#2b3343]">Réseau</h4>
                </div>
                <p className="text-gray-700">Vous tirerez parti du réseautage</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-[#0046fe] rounded-lg shadow-md mr-3">
                    <FaHandshake className="text-white text-xl" />
                  </div>
                  <h4 className="font-semibold text-[#2b3343]">Croissance</h4>
                </div>
                <p className="text-gray-700">Vous élargirez vos opportunités de croissance stratégique</p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#2b3343]">
                UN PARTENARIAT GAGNANT – GAGNANT
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
