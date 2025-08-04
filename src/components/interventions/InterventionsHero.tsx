'use client';

import Image from 'next/image';

export default function InterventionsHero() {
  return (
    <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/services/multiethnic-customer-support-team-work.jpg" 
          alt="Demande d'intervention" 
          className="object-cover opacity-40"
          fill
          sizes="100vw"
          priority
        />
      </div>
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b3343]/80 to-[#2b3343]/60 z-[1]"></div>
      <div className="absolute inset-0 opacity-20 z-[1]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            DEMANDE D&apos;INTERVENTION
          </h1>
          <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
          <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Les Experts de DAMAD sont à votre service pour tout dépannage de vos appareils d&apos;accessibilité
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
