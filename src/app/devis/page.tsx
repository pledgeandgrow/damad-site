'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// Import components with SSR disabled to avoid hydration issues
const DevisForm = dynamic(() => import('@/components/devis/DevisForm'), { ssr: false });
const DevisSuccess = dynamic(() => import('@/components/devis/DevisSuccess'), { ssr: false });
const ServiceCards = dynamic(() => import('@/components/devis/ServiceCards'), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/devis/WhyChooseUs'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/devis/Testimonials'), { ssr: false });
const CTA = dynamic(() => import('@/components/devis/CTA'), { ssr: false });

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

  const scrollToForm = useCallback(() => {
    const formSection = document.getElementById('devis-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  if (isSubmitted) {
    return <DevisSuccess />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2b3343] to-[#3d4759] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Devis pour votre ascenseur
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
              Obtenez un devis personnalisé pour votre projet d&apos;ascenseur en moins de 2 minutes.
              Notre équipe d&apos;experts est à votre écoute pour vous proposer la solution la plus adaptée à vos besoins.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#2b3343] bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
              >
                Demander un devis
              </button>
              <a
                href="tel:+33123456789"
                className="px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Appeler un expert
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: <FaCheckCircle className="text-green-500 w-8 h-8 mx-auto" />, text: 'Devis gratuit' },
              { icon: <FaCheckCircle className="text-green-500 w-8 h-8 mx-auto" />, text: 'Sans engagement' },
              { icon: <FaCheckCircle className="text-green-500 w-8 h-8 mx-auto" />, text: 'Réponse sous 24h' },
              { icon: <FaCheckCircle className="text-green-500 w-8 h-8 mx-auto" />, text: 'Devis personnalisé' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  {item.icon}
                </div>
                <p className="text-lg font-medium text-gray-900">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServiceCards />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Form Section */}
      <div id="devis-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Demande de devis
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  N&apos;hésitez pas à nous contacter pour toute question ou demande d&apos;information complémentaire.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <DevisForm 
                  step={step}
                  formData={formData}
                  updateFormData={updateFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleSubmit={handleSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA scrollToForm={scrollToForm} />
    </div>
  );
}
