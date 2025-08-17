import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';

export default function CTASection() {
  return (
    <div className="bg-[#fbfcfc] py-12 xs:py-16 sm:py-20 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-16 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#2b3343] mb-2 xs:mb-3 sm:mb-4">
            <span className="block">Urgence appareil d&apos;accessibilité bloqué ?</span>
            <span className="block text-[#2b3343]/80 text-xl xs:text-2xl sm:text-3xl mt-2">Nos techniciens interviennent rapidement</span>
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            
          </p>
          <div className="flex items-center justify-center">
            <Link
              href="tel:+33123456789"
              className="inline-flex items-center justify-center px-5 xs:px-6 py-2.5 xs:py-3 bg-[#ff5c35] text-white font-medium rounded-lg hover:bg-[#ff5c35]/80 transition-colors duration-300 shadow-md hover:shadow-lg text-sm xs:text-base"
            >
              <FaPhone className="mr-2" /> Appeler maintenant
            </Link>
          </div>
          <p className="text-center text-[#2b3343]/70 text-sm mt-6">*Dans la limite des disponibilités et de la zone d&apos;intervention</p>
        </div>
      </div>
    </div>
  );
}
