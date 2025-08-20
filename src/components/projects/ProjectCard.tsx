import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  className?: string;
  onClick?: () => void;
}

export default function ProjectCard({ image, className = '', onClick = () => {} }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      {/* Image container with hover effect */}
      <div className="relative h-72 overflow-hidden">
        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-[#2b3343]/30 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        
        {/* Project image */}
        <Image 
          src={image} 
          alt="Réalisation" 
          className="object-cover transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={true}
        />
      </div>
    </motion.div>
  );
}
