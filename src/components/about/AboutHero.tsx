
export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-r from-[#1a202c] to-[#2b3343] text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-[#2b3343] bg-white rounded-full">
            Notre Histoire, Notre Passion
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            À propos de <span className="text-[#4a90e2]">DAMAD</span> Ascenseurs
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Votre partenaire de confiance pour assurer la sécurité, la performance et la longévité de vos ascenseurs.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#4a90e2] to-[#2b3343] mx-auto rounded-full"></div>
          <div className="mt-12 flex justify-center space-x-4">
            <a 
              href="#mission" 
              className="px-8 py-3 bg-white text-[#2b3343] font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Découvrir notre mission
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
