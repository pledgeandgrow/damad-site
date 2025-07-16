import Image from 'next/image';
import { FaUsers, FaAward, FaBuilding, FaTools, FaShieldAlt, FaUserTie, FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 bg-[#2b3343] px-3 py-1 rounded-full">À propos de nous</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">Votre partenaire ascenseur de confiance</h2>
          <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Forts de plus de 25 ans d&apos;expérience, nous nous engageons à fournir des solutions d&apos;ascenseurs 
            innovantes, fiables et adaptées à vos besoins spécifiques.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/1.png" 
                alt="Équipe technique Damad Ascenseurs"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#2b3343] p-3 rounded-full">
                    <FaUserTie className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Équipe d&apos;experts</h3>
                    <p className="text-gray-100 text-sm">Professionnels certifiés et expérimentés</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#2b3343] text-white p-6 rounded-2xl shadow-2xl w-56 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <FaAward className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-xs font-medium uppercase tracking-wider">Années d&#39;expérience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#2b3343] mb-4">Notre engagement</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Chez Damad, nous nous engageons à maintenir votre installation en condition opérationnelle en mettant l'accent sur notre expertise technique, la sécurité, la proximité.
                </p>
                <div className="w-16 h-1 bg-[#2b3343] mb-6"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#2b3343]/10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <FaTools className="text-[#2b3343] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b3343] text-lg mb-2">Expertise technique</h4>
                    <p className="text-gray-600 text-sm">Une équipe de techniciens qualifiés et certifiés pour des interventions de qualité.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#2b3343]/10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <FaShieldAlt className="text-[#2b3343] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b3343] text-lg mb-2">Sécurité garantie</h4>
                    <p className="text-gray-600 text-sm">Respect des normes de sécurité en vigueur pour votre tranquillité d&apos;esprit.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#2b3343]/10 p-3 rounded-xl mr-4 flex-shrink-0">
                    <FaUsers className="text-[#2b3343] text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b3343] text-lg mb-2">Service client</h4>
                    <p className="text-gray-600 text-sm">Une équipe à votre écoute pour répondre à tous vos besoins</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-[#2b3343]/20 p-3 rounded-full mr-3">
                      <FaUsers className="text-[#2b3343] text-lg" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#2b3343]">500+</div>
                      <div className="text-sm text-gray-500">Clients satisfaits</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-[#2b3343]/20 p-3 rounded-full mr-3">
                      <FaBuilding className="text-[#2b3343] text-lg" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#2b3343]">24/7</div>
                      <div className="text-sm text-gray-500">Service d&apos;urgence</div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full md:w-auto bg-[#2b3343] text-white hover:bg-[#3d4759] px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Notre histoire</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
