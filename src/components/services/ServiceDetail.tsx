import Image from 'next/image';
import Link from 'next/link';

interface ServiceDetailProps {
  service: {
    title: string;
    description: string;
    features: string[];
    icon: string;
    image: string;
  };
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-3xl">
              {service.icon}
            </div>
            <h2 className="ml-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {service.title}
            </h2>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {service.description}
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-12">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="lg:pr-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Nos engagements</h3>
            <ul role="list" className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 flex-shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Demander un devis
              </Link>
              <Link
                href="/services"
                className="ml-4 text-sm font-semibold text-gray-900 hover:text-gray-700"
              >
                Voir tous nos services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
