'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    color: string;
    features: string[];
    slug: string;
  };
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const gradientVariants = {
    initial: { 
      backgroundPosition: '0% 50%',
      transition: { 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const 
      } 
    },
    hover: { 
      backgroundPosition: '100% 50%',
      transition: { 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const 
      } 
    }
  };

  return (
    <motion.div 
      className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${service.color}/90`}></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-xl bg-${service.color}/10 text-${service.color} text-2xl`}>
            {service.icon}
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-900">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg 
                className={`h-5 w-5 text-${service.color} mr-2 mt-0.5 flex-shrink-0`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.a
          href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          className={`inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-${service.color} to-${service.color}-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5`}
          variants={gradientVariants}
          initial="initial"
          whileHover="hover"
        >
          En savoir plus
          <svg 
            className="ml-2 w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
