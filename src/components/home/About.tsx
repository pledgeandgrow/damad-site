import { FaUsers, FaTools, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#fbfcfd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">Votre partenaire d&apos;accessibilité de confiance</h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Forts de plus de 20 ans d&apos;expérience, nous nous engageons à fournir des solutions d&apos;accessibilité 
            innovantes, fiables et adaptées à vos besoins spécifiques.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2b3343] mb-3 sm:mb-4">Notre engagement</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Chez Damad, nous nous engageons à maintenir votre installation en condition opérationnelle en mettant l&apos;accent sur notre expertise technique, la sécurité, la proximité.
                </p>
                <div className="w-12 sm:w-16 h-1 bg-[#0046fe] mb-4 sm:mb-6"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-[#0046fe] p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <FaTools className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b3343] text-base sm:text-lg mb-1 sm:mb-2">Expertise technique</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Une équipe de techniciens qualifiés et certifiés pour des interventions de qualité.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-[#0046fe] p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <FaShieldAlt className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b3343] text-base sm:text-lg mb-1 sm:mb-2">Sécurité garantie</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Respect des normes de sécurité en vigueur pour votre tranquillité d&apos;esprit.</p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-[#0046fe] p-2 sm:p-3 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                    <FaUsers className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2b3343] text-base sm:text-lg mb-1 sm:mb-2">Service client</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Une équipe à votre écoute pour répondre à tous vos besoins</p>
                  </div>
                </div>
              </div>

              {/* Stats grid removed */}

              <div className="flex justify-center w-full">
                <button className="mt-6 w-full sm:w-auto bg-[#0046fe] text-white hover:bg-[#0046fe]/90 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <span>Notre histoire</span>
                  <FaArrowRight className="text-sm ml-2" />
                </button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
