'use client';

import { useEffect, useRef, useState } from 'react';
import { FaShieldAlt, FaBalanceScale, FaClipboardCheck } from 'react-icons/fa';

export default function AboutContext() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    let observer: IntersectionObserver | null = null;

    if (currentRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observer && currentRef) {
              observer.unobserve(currentRef);
            }
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(currentRef);
    }

    return () => {
      if (observer && currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-[#fbfcfc] sm:py-24 scroll-mt-16"
      id="mission"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#0046fe] font-semibold tracking-wider text-sm uppercase">Notre philosophie</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
            Développement et Innovation
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              En développant un encrage francilien fort, nous entretenons une relation de proximité avec nos clients, mais aussi avec les entrepreneurs et sociétés partenaires.
            </p>
            <p>
              Depuis 2024, DAMAD renforce sa structure et son équipe pour faire face aux nouveaux enjeux économiques, technologiques et sociétaux (vieillissement de la population, croissance verticale des villes, densification urbaine, sobriété énergétique...).
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4">
                    <FaBalanceScale className="text-[#0046fe] text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">Prudence</h3>
                  <p className="text-gray-600">
                    La prudence guide chacune de nos actions pour garantir la sécurité et la fiabilité de nos interventions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4">
                    <FaClipboardCheck className="text-[#0046fe] text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">Discipline</h3>
                  <p className="text-gray-600">
                    La discipline nous permet d&apos;assurer des performances optimales grâce à une approche méthodique et rigoureuse.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group transform transition-all duration-300 hover:translate-y-[-5px]">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe] h-full relative">
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#0046fe]/10 rounded-lg flex items-center justify-center mb-4">
                    <FaShieldAlt className="text-[#0046fe] text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2b3343] mb-3">Sécurité</h3>
                  <p className="text-gray-600">
                    La sécurité est au cœur de notre métier, nous respectons les normes les plus strictes pour protéger nos utilisateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-lg text-gray-600 italic font-medium">
            <p>Passionné par ce métier et par l&apos;accessibilité, Damad met son savoir et son expérience à votre service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
