'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import CTA from '@/components/home/CTA';
import LogoCarousel from '@/components/shared/LogoCarousel';

// Dynamically import components that use browser APIs
const DynamicTestimonials = dynamic(() => import('@/components/home/Testimonials'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <div className="bg-white py-8 sm:py-10 md:py-12 border-b border-gray-200 shadow-sm">
          <LogoCarousel 
            title="Nos Clients" 
            subtitle="Ils nous font confiance" 
            className="container mx-auto px-4" 
          />
        </div>
        <Services />
        <About />
        <DynamicTestimonials />
        <CTA />
      </main>
    </div>
  );
}
