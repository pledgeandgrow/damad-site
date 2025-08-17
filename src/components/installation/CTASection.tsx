import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="bg-[#fbfcfc] py-20 sm:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mt-10 sm:mt-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4">
            <span className="block">Projet d&apos;installation d&apos;appareil d&apos;accessibilité ?</span>
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
          <p className="text-[#2b3343] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Nos experts sont à votre écoute pour étudier votre projet et vous proposer la meilleure solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5c35] text-white font-medium rounded-lg hover:bg-[#ff5c35]/80 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Demander un devis
            <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
