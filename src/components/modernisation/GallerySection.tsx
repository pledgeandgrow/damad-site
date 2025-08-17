import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const GallerySection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-6">
            Nos réalisations de rénovation
          </h2>
          <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Real renovation images */}
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/APRES-1-2.jpg" 
                alt="Rénovation d'ascenseur - Après travaux" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/APRES.jpg" 
                alt="Rénovation d'ascenseur - Résultat final" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/REMPLACEMENT ANEP BOX.jpg" 
                alt="Remplacement ANEP Box" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/REMPLACEMENT DE BOITE ROUGE.jpg" 
                alt="Remplacement de boîte rouge" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/REMPLACEMENT DE FERME PORTE - ASCENSEURS.jpg" 
                alt="Remplacement de ferme-porte pour ascenseurs" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/REMPLACEMENT FERME PORTE.jpg" 
                alt="Remplacement ferme-porte" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/REMPLACEMENT LUMIERE.jpg" 
                alt="Remplacement d'éclairage" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/renovation/REMPLACMENT DE NEON (1).jpg" 
                alt="Remplacement de néon" 
                className="object-cover hover:scale-105 transition-transform duration-500" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#ff5c35] hover:bg-[#e64a24] transition-all duration-300">
            Contactez-nous
            <FaArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
