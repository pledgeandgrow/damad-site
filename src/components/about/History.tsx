'use client';

import { FaBuilding, FaChartLine, FaAward, FaUsers } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';

const milestones = [
  {
    year: "2023",
    title: "Nouveau Siège Social",
    description: "Ouverture de notre nouveau siège social à Paris, doté des dernières technologies pour mieux servir nos clients.",
    icon: <FaBuilding className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-indigo-600"
  },
  {
    year: "2021",
    title: "Certification ISO 9001",
    description: "Obtention de la certification ISO 9001 pour notre système de management de la qualité.",
    icon: <FaAward className="w-6 h-6 text-white" />,
    color: "from-emerald-500 to-teal-600"
  },
  {
    year: "2019",
    title: "Expansion Nationale",
    description: "Ouverture de trois nouvelles agences en France pour une meilleure couverture nationale.",
    icon: <FaChartLine className="w-6 h-6 text-white" />,
    color: "from-amber-500 to-orange-600"
  },
  {
    year: "2017",
    title: "Premier Contrat Majeur",
    description: "Signature d'un contrat majeur pour l'installation d'ascenseurs dans un complexe immobilier de prestige.",
    icon: <FaUsers className="w-6 h-6 text-white" />,
    color: "from-rose-500 to-pink-600"
  }
];

const TimelineItem = ({ milestone, index, isVisible }: { milestone: typeof milestones[0], index: number, isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
      }}
    >
      <div className="md:w-1/2 md:px-8 py-4 relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative z-10">
          <div className="flex items-start">
            <div className={`bg-gradient-to-br ${milestone.color} p-3 rounded-xl mr-4 flex-shrink-0`}>
              {milestone.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
              <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#4a90e2] to-[#2b3343] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-0"></div>
      </div>
      
      <div className="hidden md:block w-1/2 px-8 py-4 text-center">
        <div 
          className={`bg-gradient-to-br ${milestone.color} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          {milestone.year}
        </div>
      </div>
      
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
    <section id="history" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-16 transition-all duration-700 ease-out opacity-0 translate-y-8"
          style={{
            animation: inView ? 'fadeInUp 0.7s ease-out forwards' : 'none',
            animationDelay: '100ms'
          }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2b3343] bg-[#e5e7eb] rounded-full mb-4">
            Notre Parcours
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a90e2] to-[#2b3343] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
          Depuis notre création, nous avons su nous imposer comme un acteur de référence dans le secteur de l&apos;ascenseur, en mettant l&apos;accent sur l&apos;innovation et la satisfaction client.
        </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4a90e2] to-[#2b3343] transform -translate-x-1/2 scale-y-0 origin-top transition-transform duration-1000"
            style={{
              transform: inView ? 'translateX(-50%) scaleY(1)' : 'translateX(-50%) scaleY(0)',
              transitionDelay: '300ms'
            }}
          />
          
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
