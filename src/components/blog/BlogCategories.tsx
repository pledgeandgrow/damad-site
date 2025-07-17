"use client";

import React from 'react';
import { motion } from 'framer-motion';

export type Category = {
  id: string;
  name: string;
  count: number;
};

type BlogCategoriesProps = {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
};

export default function BlogCategories({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: BlogCategoriesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-[#2b3343] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category.name}
            <span className="ml-1 text-xs inline-flex items-center justify-center px-2 py-1 rounded-full bg-white/20">
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
