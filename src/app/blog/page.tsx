"use client";

import { blogPosts, blogCategories } from '@/data/blogData';
import { useState } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import BlogGrid from '@/components/blog/BlogGrid';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main>
      <BlogHero onSearchChange={handleSearchChange} />
      <FeaturedPosts posts={blogPosts} />
      <BlogGrid 
        posts={blogPosts} 
        categories={blogCategories} 
        searchQuery={searchQuery} 
      />
    </main>
  );
}
