'use client';

import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import CTA from '@/components/home/CTA';

// Dynamically import components that use browser APIs
const DynamicProjects = dynamic(() => import('@/components/home/Projects'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <DynamicProjects />
        <CTA />
      </main>
    </div>
  );
}
