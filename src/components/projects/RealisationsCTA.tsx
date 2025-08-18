import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface RealisationsCTAProps {
  className?: string;
}

export default function RealisationsCTA({ className = '' }: RealisationsCTAProps) {
  return (
    <section className={`py-20 bg-white relative overflow-hidden ${className}`}>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b3343] mb-4 leading-tight">
            Un projet <span className="text-[#2b3343]">en tête</span> ?
          </h2>
          
          <div className="w-24 h-1 bg-[#2b3343] mx-auto rounded-full mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Notre équipe d&apos;experts est à votre écoute pour concrétiser votre projet d&apos;installation, de maintenance ou de modernisation d&apos;ascenseurs et d&apos;accessibilité.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0046fe] hover:bg-[#0035c8] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Parler à un expert
              <FaArrowRight className="ml-2" />
            </Link>
            <Link 
              href="/devis"
              className="inline-flex items-center justify-center bg-[#ff5c35] hover:bg-[#e64a25] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
