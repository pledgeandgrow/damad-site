'use client';

import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
  accent: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Johny MENDY",
    role: "Directeur Général",
    bio: "Fondateur et Directeur Général de DAMAD Ascenseurs, Johny apporte plus de 15 ans d'expérience dans l'industrie des ascenseurs. Sa vision stratégique et son engagement envers l'excellence technique ont permis à l'entreprise de se positionner comme un leader dans le secteur.",
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
            Notre équipe d&apos;experts dédiés est là pour vous accompagner à chaque étape de votre projet d&apos;ascenseur.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 max-w-2xl w-full">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex justify-center space-x-3 mb-4">
                    <a 
                      href={member.social.linkedin} 
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <FaLinkedin className="w-5 h-5 text-blue-600" />
                    </a>
                    <a 
                      href={`https://twitter.com/${member.social.twitter}`} 
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300"
                      aria-label={`Twitter de ${member.name}`}
                    >
                      <FaTwitter className="w-5 h-5 text-blue-400" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-300"
                      aria-label={`Envoyer un email à ${member.name}`}
                    >
                      <FaEnvelope className="w-5 h-5 text-gray-600" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-4">{member.name}</h3>
                  <div className={`w-16 h-1 bg-gradient-to-r ${member.accent} my-3 mx-auto rounded-full`}></div>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
                <div className="p-6 pt-0 flex-1">
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
