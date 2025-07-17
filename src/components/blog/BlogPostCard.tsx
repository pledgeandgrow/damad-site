"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: {
    id: string;
    name: string;
  };
  publishedAt: string;
  readTime: number;
  featured?: boolean;
};

type BlogPostCardProps = {
  post: BlogPost;
  index?: number;
  featured?: boolean;
};

export default function BlogPostCard({ post, index = 0, featured = false }: BlogPostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group ${featured ? 'col-span-2' : ''}`}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className={`bg-white rounded-xl shadow-md overflow-hidden h-full flex ${featured ? 'md:flex-row flex-col' : 'flex-col'} transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
          {/* Image container */}
          <div className={`relative ${featured ? 'md:w-1/2' : 'w-full'} h-60`}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold bg-[#2b3343] text-white rounded-full">
                {post.category.name}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={`p-6 flex flex-col ${featured ? 'md:w-1/2' : 'w-full'}`}>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <FaCalendarAlt className="mr-2 text-[#2b3343]" />
              <span>{formattedDate}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime} min de lecture</span>
            </div>

            <h3 className="text-xl font-bold text-[#2b3343] mb-3 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-600 mb-4 flex-grow">
              {post.excerpt}
            </p>

            <div className="flex items-center text-[#2b3343] font-medium">
              <span>Lire l&apos;article</span>
              <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
