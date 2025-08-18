import { FaBuilding, FaIndustry, FaShoppingCart, FaFilter, FaUtensils } from 'react-icons/fa';
import { ProjectCategory } from '@/types';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

interface CategoryWithIcon extends ProjectCategory {
  icon: ReactNode;
}

export default function CategoryFilter({ 
  activeCategory, 
  onCategoryChange,
  className = '' 
}: CategoryFilterProps) {
  const categories: CategoryWithIcon[] = [
    { name: 'Tout', icon: <FaFilter className="mr-2" />, value: 'all' },
    { name: 'Immeubles', icon: <FaBuilding className="mr-2" />, value: 'Immeubles' },
    { name: 'Commercial', icon: <FaShoppingCart className="mr-2" />, value: 'Commercial' },
    { name: 'Industriel', icon: <FaIndustry className="mr-2" />, value: 'Industriel' },
    { name: 'Particulier', icon: <FaBuilding className="mr-2" />, value: 'Particulier' },
    { name: 'Restauration', icon: <FaUtensils className="mr-2" />, value: 'Restauration' },
  ];

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {categories.map((category, index) => {
        const isActive = activeCategory === category.value;
        return (
          <motion.button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`flex items-center px-5 py-3 rounded-full border transition-all duration-300 ${
              isActive
                ? 'bg-[#0046fe] text-white border-[#0046fe] shadow-md'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={isActive ? 'text-white' : 'text-[#0046fe]'}>
              {category.icon}
            </div>
            <span className="font-medium">{category.name}</span>
            {isActive && (
              <motion.span 
                className="ml-2 w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"
                layoutId="categoryIndicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
