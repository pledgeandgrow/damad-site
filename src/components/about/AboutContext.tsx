'use client';

import { useEffect, useRef, useState } from 'react';

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
          <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
            Notre Contexte
          </span>
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
        </div>
      </div>
    </section>
  );
}
