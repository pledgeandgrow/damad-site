'use client';

import { FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#2b3343]" />,
    title: "Prudence",
    description: "La prudence guide chacune de nos actions pour garantir la sécurité et la fiabilité de nos interventions."
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#2b3343]" />,
    title: "Discipline",
    description: "La discipline nous permet d'assurer des performances optimales grâce à une approche méthodique et rigoureuse."
  },
  {
    icon: <FaUsers className="w-8 h-8 text-[#2b3343]" />,
    title: "Sécurité",
    description: "La sécurité est au cœur de notre métier, nous respectons les normes les plus strictes pour protéger nos utilisateurs."
  }
];

const MissionCard = ({ value, delay }: { value: typeof values[0], delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = cardRef.current;
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
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl shadow-lg p-8 transform transition-all duration-700 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#2b3343]/10 mb-6">
        {value.icon}
      </div>
      <h3 className="text-xl font-semibold text-[#2b3343] mb-3">{value.title}</h3>
      <p className="text-gray-600">{value.description}</p>
    </div>
  );
};

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-16 transition-all duration-500 ease-out opacity-0 translate-y-8 animate-fadeInUp"
          style={{
            animationFillMode: 'forwards',
            animationDuration: '700ms',
            animationDelay: '100ms'
          }}
        >
          <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">
            Notre Engagement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b3343] mb-4">Notre Mission</h2>
          <div className="w-24 h-1 bg-[#2b3343] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Notre mission est d&apos;assurer la sécurité et la fiabilité des installations d&apos;ascenseurs pour tous nos clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <MissionCard 
              key={index} 
              value={value} 
              delay={index * 0.1} 
            />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Passionné par ce métier et par l&apos;accessibilité, Damad met son savoir et son expérience à votre service.
          </p>
        </div>
      </div>
    </section>
  );
}
