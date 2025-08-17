import Image from 'next/image';

export default function RealisationsSection() {
  return (
    <div className="py-24 bg-[#fbfcfd] border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mt-2 mb-4">
            Nos réalisations
          </h2>
          <div className="w-24 h-1 bg-[#0046fe] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Image 1 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage1.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
          
          {/* Image 2 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage2.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
          
          {/* Image 3 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage3.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
          
          {/* Image 4 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage4.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
          
          {/* Image 5 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage5.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
          
          {/* Image 6 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage6.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
          
          {/* Image 7 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage7.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
          
          {/* Image 8 */}
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-square">
            <div className="relative w-full h-full">
              <Image 
                src="/images/depannage/depannage8.png" 
                alt="Dépannage ascenseur" 
                className="object-cover transition-transform duration-500 hover:scale-110"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
