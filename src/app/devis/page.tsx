'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import dynamic from 'next/dynamic';

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
      // Here you would typically send the data to your backend
      const response = await fetch('/api/devis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire');
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2b3343] to-[#1a202c] text-white py-28 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/pattern-bg.png")', backgroundSize: '200px' }}></div>
        </div>
        
        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-100 border border-white/20"
            >
              Service rapide et professionnel
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200"
            >
              Devis pour vos ascenseurs
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-blue-100"
            >
              Obtenez un devis pour votre projet en moins de 2 minutes.
              Notre équipe d&apos;experts est à votre écoute pour vous proposer la solution la plus adaptée à vos besoins.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+33123456789"
                className="px-8 py-3 border-2 border-blue-300 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all duration-300 md:py-4 md:text-lg md:px-10 inline-flex items-center justify-center group"
              >
                <span className="bg-white/20 p-2 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                  <FiPhone className="text-white w-4 h-4" />
                </span>
                Appeler un expert
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Form Section */}
      <div id="devis-form" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
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
                <div className="inline-block mb-4 px-4 py-1 bg-blue-50 rounded-full text-sm font-medium text-[#2b3343]">
                  Rapide et sans engagement
                </div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-extrabold text-[#2b3343] sm:text-4xl"
                >
                  Demande de devis
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 text-lg text-gray-600"
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
