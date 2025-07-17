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
  // Component uses Tailwind classes directly for styling

  return (
    <motion.div 
      className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] border border-gray-100 hover:border-[#2b3343]"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2b3343]/90"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-xl bg-[#2b3343]/10 text-[#2b3343] text-2xl">
            {service.icon}
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-900">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{service.description}</p>
        

      </div>
    </motion.div>
  );
}
