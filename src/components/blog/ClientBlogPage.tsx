"use client";

import React, { useState } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import BlogGrid from '@/components/blog/BlogGrid';
import { BlogPost } from '@/components/blog/BlogPostCard';
import { Category } from '@/components/blog/BlogCategories';

type ClientBlogPageProps = {
  posts: BlogPost[];
  categories: Category[];
};

export default function ClientBlogPage({ posts, categories }: ClientBlogPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main>
      <BlogHero onSearchChange={handleSearchChange} />
      <FeaturedPosts posts={posts} />
      <BlogGrid 
        posts={posts} 
        categories={categories} 
        searchQuery={searchQuery} 
      />
    </main>
  );
}
