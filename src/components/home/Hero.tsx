import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#2b3343] font-semibold text-sm uppercase tracking-wider mb-4">
            Expert Ascenseurs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Installation &amp; Maintenance d&apos;Ascenseurs Professionnels
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Damad Ascenseurs vous accompagne dans tous vos projets, de la conception à la maintenance, avec des solutions sur mesure et un service d&apos;excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center bg-[#2b3343] hover:bg-[#3d4759] text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Demander un devis
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/services" 
              className="group inline-flex items-center justify-center border-2 border-[#2b3343] text-[#2b3343] hover:bg-[#2b3343] hover:text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300"
            >
              Découvrir nos services
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '25+', label: 'Ans d\'expérience' },
              { number: '1000+', label: 'Clients satisfaits' },
              { number: '24/7', label: 'Service d\'urgence' },
              { number: '100%', label: 'Garantie pièces' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl font-bold text-[#2b3343] mb-2">{item.number}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
