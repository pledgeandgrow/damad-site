'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutIntro() {
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
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2b3343] mb-6 leading-tight">
                Notre <span className="text-[#3d4759] relative">Histoire
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-[#2b3343] opacity-30 rounded-full"></span>
                </span>
              </h2>
              
              <div className="w-24 h-1 bg-[#2b3343] mx-auto md:mx-0 rounded-full mb-8"></div>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="font-medium">
                  Damad est une entreprise de maintenance d&apos;appareils d&apos;accessibilité créée en 2007, avec l&apos;ambition d&apos;offrir un service de proximité et d&apos;excellence.
                </p>
                <p>
                  Aujourd&apos;hui, Damad gère plus de 1000 ascenseurs, portes automatiques, monte-charges, monte-voitures et EPMR confondus. En faisant le choix de s&apos;implanter localement via un maillage du territoire régional, Damad propose des solutions complètes d&apos;installation, de maintenance et d&apos;entretien, de rénovation et de modernisation.
                </p>
                <div className="pt-4">
                  <a href="#history" className="inline-block px-8 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg">
                    Découvrir notre parcours
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                {/* Replace with your actual image path */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2b3343]/80 to-transparent opacity-30 z-10"></div>
                <div className="bg-[#2b3343] h-full w-full flex items-center justify-center text-white text-lg font-medium">
                  Image d&apos;appareil d&apos;accessibilité DAMAD
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2b3343] rounded-full opacity-10 z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2b3343] rounded-full opacity-10 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
