'use client';

import { FaShieldAlt, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const values = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#2b3343]" />,
    title: "Sécurité",
    description: "La sécurité des utilisateurs est notre priorité absolue. Nous nous engageons à respecter les normes les plus strictes du secteur."
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-[#2b3343]" />,
    title: "Performance",
    description: "Nous assurons des performances optimales de vos ascenseurs grâce à une maintenance préventive régulière et des interventions rapides."
  },
  {
    icon: <FaUsers className="w-8 h-8 text-[#2b3343]" />,
    title: "Service Client",
    description: "Notre équipe dévouée est à votre écoute pour répondre à tous vos besoins et vous fournir des solutions personnalisées."
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-[#2b3343]" />,
    title: "Engagement",
    description: "Nous nous engageons à établir des relations durables avec nos clients basées sur la confiance et la satisfaction mutuelle."
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
      className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-500 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 hover:shadow-xl hover:-translate-y-1' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? `${delay * 100}ms` : '0ms'
      }}
    >
      <div className="bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-110">
        {value.icon}
      </div>
      <h3 className="text-xl font-bold text-center mb-3 text-[#2b3343] transition-colors duration-300 hover:text-[#4a90e2]">
        {value.title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed transition-colors duration-300 hover:text-gray-800">
        {value.description}
      </p>
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
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2b3343] bg-[#e5e7eb] rounded-full mb-4">
            Notre Engagement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Mission</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a90e2] to-[#2b3343] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chez DAMAD, notre mission est de fournir des solutions d&apos;ascenseurs innovantes, fiables et accessibles à tous. en offrant un service client exceptionnel et des relations commerciales durables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <MissionCard 
              key={index} 
              value={value} 
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
