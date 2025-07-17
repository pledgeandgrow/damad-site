"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowLeft, FaTag, FaShare, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '@/data/blogData';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);

  // If post not found, show error state
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-[#2b3343] mb-4">Article introuvable</h1>
          <p className="text-gray-600 mb-6">L&apos;article que vous recherchez n&apos;existe pas ou a été déplacé.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center bg-[#2b3343] hover:bg-[#3d4759] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Mock content for the blog post
  const content = `
    <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.</p>
    
    <h2 class="text-2xl font-bold text-[#2b3343] mb-4 mt-8">Sous-titre de l'article</h2>
    
    <p class="mb-6">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
    
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Point important concernant les ascenseurs</li>
      <li>Élément à considérer pour la maintenance</li>
      <li>Conseil de sécurité essentiel</li>
    </ul>
    
    <p class="mb-6">Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
    
    <blockquote class="border-l-4 border-[#2b3343] pl-4 italic my-6 text-gray-700">
      "La maintenance régulière est la clé pour prolonger la durée de vie de votre ascenseur et garantir la sécurité des utilisateurs."
    </blockquote>
    
    <h2 class="text-2xl font-bold text-[#2b3343] mb-4 mt-8">Conclusion</h2>
    
    <p class="mb-6">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
  `;

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-[#2b3343]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b3343]/80 to-[#2b3343]/90"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative h-full flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center text-white/80 gap-4 sm:gap-6"
            >
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <FaTag className="mr-2" />
                <span>{post.category.name}</span>
              </div>
              <div className="flex items-center">
                <span>{post.readTime} min de lecture</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10">
            {/* Back button */}
            <Link 
              href="/blog" 
              className="inline-flex items-center text-[#2b3343] hover:text-blue-700 font-medium mb-8"
            >
              <FaArrowLeft className="mr-2" />
              Retour aux articles
            </Link>

            {/* Article content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Share section */}
            <div className="border-t border-gray-200 mt-10 pt-6">
              <h3 className="text-lg font-semibold text-[#2b3343] mb-4 flex items-center">
                <FaShare className="mr-2" />
                Partager cet article
              </h3>
              <div className="flex space-x-4">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://damad-ascenseurs.fr/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://damad-ascenseurs.fr/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://damad-ascenseurs.fr/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
