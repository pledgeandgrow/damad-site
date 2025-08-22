import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative bg-[#2b3343] h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/services/maintenance.jpg" 
          alt="Maintenance d'appareil d'accessibilité" 
          className="object-cover"
          fill
          sizes="100vw"
          priority
        />
      </div>
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl relative z-10 text-center">
        <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-4 sm:px-8 py-4 sm:py-6 rounded-lg">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
            MAINTENANCE & ENTRETIEN
          </h1>
          <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
          <p className="text-white text-lg xs:text-xl mt-4 sm:mt-6 max-w-3xl mx-auto leading-relaxed">
            Les Experts de DAMAD sont à votre service pour l&apos;entretien de vos appareils d&apos;accessibilité
          </p>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[2]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-[#fbfcfc]">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
}
