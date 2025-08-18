'use client';

import Link from 'next/link';

export default function OtherServicesSection() {
  // Services data
  const services = [
    { name: "Maintenance" },
    { name: "Nettoyage fosse" },
    { name: "Inspection câble" },
    { name: "Récupération d'objet" },
    { name: "Assistance technique" },
    { name: "Essais parachute" }
  ];
  return (
    <div className="bg-white py-20 sm:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3">
              Vous avez d&apos;autres besoins ?
            </h2>
            <div className="w-16 h-1 bg-[#2b3343] mx-auto mb-6"></div>
            <p className="text-xl font-semibold text-[#2b3343] mb-10">
              Contactez - nous !
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-[#2b3343] font-medium text-xs sm:text-sm">{service.name}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block bg-[#0046fe] text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
              Nous Contacter
            </Link>
          </div>
        </div>
    </div>
  );
}
