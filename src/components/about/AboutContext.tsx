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
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center max-w-4xl mx-auto transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >

          <h2 className="text-3xl md:text-4xl font-bold text-[#2b3343] mb-6">
            Développement et Innovation
          </h2>
          <div className="w-24 h-1 bg-[#2b3343] mx-auto rounded-full mb-8"></div>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              En développant un encrage francilien fort, nous entretenons une relation de proximité avec nos clients, mais aussi avec les entrepreneurs et sociétés partenaires.
            </p>
            <p>
              Depuis 2024, DAMAD renforce sa structure et son équipe pour faire face aux nouveaux enjeux économiques, technologiques et sociétaux (vieillissement de la population, croissance verticale des villes, densification urbaine, sobriété énergétique...).
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-3">
                <FaBalanceScale className="text-[#2b3343] text-2xl mr-2" />
                <h3 className="text-xl font-bold text-[#2b3343]">Prudence</h3>
              </div>
              <p className="text-gray-600">
                La prudence guide chacune de nos actions pour garantir la sécurité et la fiabilité de nos interventions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-3">
                <FaClipboardCheck className="text-[#2b3343] text-2xl mr-2" />
                <h3 className="text-xl font-bold text-[#2b3343]">Discipline</h3>
              </div>
              <p className="text-gray-600">
                La discipline nous permet d&apos;assurer des performances optimales grâce à une approche méthodique et rigoureuse.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex items-center mb-3">
                <FaShieldAlt className="text-[#2b3343] text-2xl mr-2" />
                <h3 className="text-xl font-bold text-[#2b3343]">Sécurité</h3>
              </div>
              <p className="text-gray-600">
                La sécurité est au cœur de notre métier, nous respectons les normes les plus strictes pour protéger nos utilisateurs.
              </p>
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
