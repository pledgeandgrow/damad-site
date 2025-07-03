'use client';

import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const teamMembers = [
  {
    name: "Johny MENDY",
    role: "Directeur Général",
    image: "/images/team/johny-mendy.jpg",
    bio: "Fondateur et Directeur Général de DAMAD Ascenseurs, Johny MENDY apporte plus de 15 ans d'expérience dans l'industrie des ascenseurs. Sa vision stratégique et son engagement envers l'excellence technique ont permis à l'entreprise de se positionner comme un leader dans le secteur.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "johny.mendy@damad-ascenseurs.fr"
    },
    accent: "from-blue-500 to-indigo-600"
  }
];

export default function Team() {
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
    <section id="team" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-16 transition-all duration-700 ease-out opacity-0 translate-y-8"
          style={{
            animation: isVisible ? 'fadeInUp 0.7s ease-out forwards' : 'none',
            animationDelay: '100ms'
          }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#2b3343] bg-[#e5e7eb] rounded-full mb-4">
            Rencontrez-nous
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4a90e2] to-[#2b3343] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d&apos;experts dédiés est là pour vous accompagner à chaque étape de votre projet d&apos;ascenseur.s.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 max-w-2xl">
            {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-20 z-0`}></div>
                <div className="relative h-full w-full">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a 
                      href={member.social.linkedin} 
                      className="bg-white/90 text-[#2b3343] p-2 rounded-full hover:bg-white transition-colors duration-300"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href={`https://twitter.com/${member.social.twitter}`} 
                      className="bg-white/90 text-[#2b3343] p-2 rounded-full hover:bg-white transition-colors duration-300"
                      aria-label={`Twitter de ${member.name}`}
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="bg-white/90 text-[#2b3343] p-2 rounded-full hover:bg-white transition-colors duration-300"
                      aria-label={`Envoyer un email à ${member.name}`}
                    >
                      <FaEnvelope className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <div className={`w-12 h-1 bg-gradient-to-r ${member.accent} my-2 rounded-full`}></div>
                  <p className="text-[#4a90e2] font-medium">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{member.bio}</p>
                <button 
                  className="mt-4 text-sm font-medium text-[#2b3343] hover:text-[#4a90e2] transition-colors duration-300 text-left flex items-center group-hover:underline"
                  onClick={() => {}}
                >
                  En savoir plus
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
