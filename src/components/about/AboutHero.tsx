'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function AboutHero() {
  useEffect(() => {
    // Animation effect when component mounts
  }, []);

  return (
    <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden -mt-[72px] md:-mt-[96px] pt-[72px] md:pt-[96px]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/a-propos/about1.jpg" 
          alt="À propos de DAMAD" 
          className="object-cover"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-8 py-6 rounded-lg">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            À PROPOS DE DAMAD
          </h1>
          <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
          <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour l{`'`}installation, la maintenance et la modernisation
          </p>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[2]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-white">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
}
