import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="bg-[#fbfcfd] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b3343] mb-6">
            Démarrer votre projet !
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-auto mx-auto">
            Nos experts sont à votre disposition pour vous accompagner dans votre projet d&apos;installation, de rénovation ou de maintenance d&apos;ascenseur.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="group inline-flex items-center justify-center font-medium py-4 px-8 rounded-lg 
                transition-all duration-300 shadow-md hover:shadow-lg
                bg-[#ff5c35] hover:bg-[#ff5c35]/90 text-white"
            >
              Demander un devis
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/realisations"
              className="group inline-flex items-center justify-center font-medium py-4 px-8 rounded-lg 
                transition-all duration-300 shadow-md hover:shadow-lg
                bg-[#0046fe] hover:bg-[#0035c8] text-white"
            >
              Voir tous nos projets
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          

        </div>
      </div>
    </section>
  );
}
