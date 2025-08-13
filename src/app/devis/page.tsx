'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Import components with SSR disabled to avoid hydration issues
const DevisForm = dynamic(() => import('@/components/devis/DevisForm'), { ssr: false });
const DevisSuccess = dynamic(() => import('@/components/devis/DevisSuccess'), { ssr: false });
const ServiceCards = dynamic(() => import('@/components/devis/ServiceCards'), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/devis/WhyChooseUs'), { ssr: false });

type FormData = {
  // Step 1
  serviceType: string;
  buildingType: string;
  
  // Step 2
  floors: string;
  stops: string;
  capacity: string;
  hasExistingElevator: boolean;
  existingElevatorAge: string;
  
  // Step 3
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  postalCode: string;
  city: string;
  message: string;
  privacyPolicy: boolean;
};

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1
    serviceType: '',
    buildingType: '',
    
    // Step 2
    floors: '2',
    stops: '2',
    capacity: '4',
    hasExistingElevator: false,
    existingElevatorAge: '',
    
    // Step 3
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    postalCode: '',
    city: '',
    message: '',
    privacyPolicy: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = useCallback((field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const nextStep = useCallback(() => setStep(step => step + 1), []);
  const prevStep = useCallback(() => setStep(step => step - 1), []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send data to our email API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'devis'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Erreur lors de l\'envoi du formulaire');
      }
      
      // Reset form on successful submission
      setFormData({
        serviceType: '',
        buildingType: '',
        floors: '2',
        stops: '2',
        capacity: '4',
        hasExistingElevator: false,
        existingElevatorAge: '',
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        postalCode: '',
        city: '',
        message: '',
        privacyPolicy: false,
      });
      
      // Show success state
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  }, [formData]);

  // Form is now positioned right after hero, so no scroll function needed

  if (isSubmitted) {
    return <DevisSuccess />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#2b3343] h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/projects/damad10.jpg" 
            alt="Demande de devis" 
            className="object-cover"
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="animate-fade-in-up bg-black/40 backdrop-blur-sm inline-block px-8 py-6 rounded-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              DEVIS
            </h1>
            <div className="w-24 h-1 bg-[#99a8b1] mx-auto"></div>
            <p className="text-white text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
              Obtenez un devis pour votre projet
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-[2]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-white">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>


      {/* Form Section */}
      <div id="devis-form" className="py-20 bg-[#fbfcfc] relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/pattern-bg.png")', backgroundSize: '300px' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 sm:p-10">
              <div className="text-center mb-10">

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-extrabold text-[#2b3343] sm:text-4xl"
                >
                  Besoin d&apos;un devis ?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 text-lg text-[#2b3343]"
                >
                  N&apos;hésitez pas à nous contacter pour toute question ou demande d&apos;information complémentaire.
                </motion.p>
              </div>

              <DevisForm 
                step={step}
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <ServiceCards />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </div>
  );
}
