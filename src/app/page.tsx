'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Contact from '@/components/home/Contact';

// Dynamically import components that use browser APIs
const DynamicTestimonials = dynamic(() => import('@/components/home/Testimonials'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <DynamicTestimonials />
        <Contact />
      </main>
    </div>
  );
}
