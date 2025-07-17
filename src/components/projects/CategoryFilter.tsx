import { FaHome, FaBuilding, FaIndustry, FaShoppingCart, FaFilter } from 'react-icons/fa';
import { ProjectCategory } from '@/types';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export default function CategoryFilter({ 
  activeCategory, 
  onCategoryChange,
  className = '' 
}: CategoryFilterProps) {
  const categories: ProjectCategory[] = [
    { name: 'Tout', icon: <FaFilter className="mr-2" />, value: 'all' },
    { name: 'Résidentiel', icon: <FaHome className="mr-2" />, value: 'Résidentiel' },
    { name: 'Commercial', icon: <FaShoppingCart className="mr-2" />, value: 'Commercial' },
    { name: 'Industriel', icon: <FaIndustry className="mr-2" />, value: 'Industriel' },
    { name: 'Particulier', icon: <FaBuilding className="mr-2" />, value: 'Particulier' },
  ];

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {categories.map((category, index) => (
        <motion.button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`flex items-center px-5 py-3 rounded-full border transition-all duration-300 ${
            activeCategory === category.value
              ? 'bg-[#2b3343] text-white border-[#2b3343] shadow-md'
              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {category.icon}
          <span className="font-medium">{category.name}</span>
          {activeCategory === category.value && (
            <motion.span 
              className="ml-2 w-2 h-2 bg-white rounded-full"
              layoutId="categoryIndicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
