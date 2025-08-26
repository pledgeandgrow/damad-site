'use client';

import { FaBuilding, FaChartLine, FaAward, FaUsers } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

const milestones = [
  {
    year: "2007",
    title: "Création de DAMAD",
    description: "Fondation de DAMAD, entreprise spécialisée dans la maintenance d'ascenseurs.",
    icon: <FaUsers className="w-6 h-6 text-white" />,
    color: "from-[#0046fe] to-[#0057ff]"
  },
  {
    year: "2015",
    title: "Diversification des Services",
    description: "Extension de nos services à la maintenance de portes automatiques, monte-charges, monte-voitures et EPMR.",
    icon: <FaAward className="w-6 h-6 text-white" />,
    color: "from-[#0046fe] to-[#0057ff]"
  },
  {
    year: "2019",
    title: "Expansion Régionale",
    description: "Développement d'un ancrage francilien fort pour entretenir une relation de proximité avec nos clients et partenaires.",
    icon: <FaChartLine className="w-6 h-6 text-white" />,
    color: "from-[#0046fe] to-[#0057ff]"
  },
  {
    year: "2024",
    title: "Renforcement Structurel",
    description: "DAMAD renforce sa structure et son équipe pour faire face aux nouveaux enjeux économiques, technologiques et sociétaux.",
    icon: <FaBuilding className="w-6 h-6 text-white" />,
    color: "from-[#0046fe] to-[#0057ff]"
  }
];

const TimelineItem = ({ milestone, index, isVisible }: { milestone: typeof milestones[0], index: number, isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`flex flex-col md:flex-row items-center ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '700ms',
        transitionTimingFunction: 'ease-out',
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
      }}
    >
      {/* Year indicator for desktop - left side for even items */}
      <div className={`hidden md:block w-1/2 px-8 py-4 text-center ${!isEven ? 'order-2' : 'order-1'}`}>
        <div 
          className={`bg-gradient-to-br ${milestone.color} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-xl' : 'scale-100'
          }`}
        >
          {milestone.year}
        </div>
      </div>
      
      {/* Content card */}
      <div 
        className={`md:w-1/2 md:px-8 py-4 relative group ${isEven ? 'order-2' : 'order-1'}`} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0046fe]/30 relative z-10">
          <div className="flex items-start">
            <div className={`bg-gradient-to-br ${milestone.color} p-3 rounded-xl mr-4 flex-shrink-0 flex items-center justify-center`}>
              {milestone.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
              <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[#2b3343] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-0"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0046fe]/0 via-[#0046fe]/10 to-[#0046fe]/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
      </div>
      
      {/* Year indicator for mobile */}
      <div className="md:hidden w-full text-center my-6">
        <span className={`bg-gradient-to-r ${milestone.color} text-white rounded-full px-6 py-2 text-sm font-medium shadow-md`}>
          {milestone.year}
        </span>
      </div>
    </div>
  );
};

export default function History() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    let observer: IntersectionObserver | null = null;

    if (currentRef) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
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
    <section id="history" ref={sectionRef} className="py-20 bg-white sm:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          className={`text-center mb-16 sm:mb-24 transition-all duration-700 ease-out ${
            inView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >

          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2b3343] mb-4 sm:mb-5 mt-2">Notre Histoire</h2>
          
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
            <p className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-[#0046fe]/0 via-[#0046fe]/5 to-[#0046fe]/0 rounded-lg blur-sm -z-10"></span>
            </p>
            <p>
              Créée en 2007, DMD gère plus de 1000 ascenseurs, portes automatiques, monte-charges, monte-voitures et EPMR confondus. En faisant le choix de s{`'`}implanter localement via un maillage du territoire régional, DMD propose des solutions complètes d{`'`}installation, de maintenance et d{`'`}entretien, de rénovation et de modernisation.
            </p>
          </div>

        </div>

        <div className="relative">
          {/* Timeline line with decorative elements */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0046fe]/80 via-[#0046fe] to-[#0046fe]/80 transform -translate-x-1/2 scale-y-0 origin-top transition-transform duration-1000"
            style={{
              transform: inView ? 'translateX(-50%) scaleY(1)' : 'translateX(-50%) scaleY(0)',
              transitionDelay: '300ms'
            }}
          />
          
          {/* Decorative glow for the timeline */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#0046fe] transform -translate-x-1/2 scale-y-0 origin-top transition-transform duration-1000 blur-md opacity-50"
            style={{
              transform: inView ? 'translateX(-50%) scaleY(1)' : 'translateX(-50%) scaleY(0)',
              transitionDelay: '400ms'
            }}
          />
          
          {/* Timeline dots removed to fix display issues */}
          
          {/* Timeline items */}
          <div className="space-y-20 md:space-y-32">
            {milestones.map((milestone, index) => (
              <TimelineItem 
                key={index}
                milestone={milestone}
                index={index}
                isVisible={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
