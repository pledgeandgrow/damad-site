"use client";

import React from 'react';
import { motion } from 'framer-motion';
import BlogPostCard, { BlogPost } from './BlogPostCard';

type FeaturedPostsProps = {
  posts: BlogPost[];
};

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  // Filter only featured posts
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);
  
  if (featuredPosts.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4 relative inline-block">
            <span className="relative z-10">Articles à la une</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos articles les plus populaires et pertinents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <BlogPostCard 
              key={post.id} 
              post={post} 
              index={index} 
              featured={index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
