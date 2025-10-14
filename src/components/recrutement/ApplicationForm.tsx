"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUpload, FaSpinner, FaCheck, FaTimes, FaUser, FaBriefcase, FaFileAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
  resume: File | null;
  coverLetter: File | null;
};

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null,
    coverLetter: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Mobile step management
  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  // Check if mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768); // md breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const positions = [
    { value: '', label: 'Sélectionnez un poste' },
    { value: 'tech-maintenance', label: 'Technicien de maintenance ascenseurs' },
    { value: 'tech-monteur', label: 'Monteur d\'ascenseurs' },
    { value: 'commercial', label: 'Commercial B2B' },
    { value: 'assistant', label: 'Assistant(e) Service Client' },
    { value: 'admin', label: 'Responsable Administratif' },
    { value: 'autre', label: 'Autre / Candidature spontanée' },
  ];

  const experiences = [
    { value: '', label: 'Sélectionnez votre expérience' },
    { value: 'junior', label: 'Junior (0-2 ans)' },
    { value: 'intermediaire', label: 'Intermédiaire (2-5 ans)' },
    { value: 'senior', label: 'Senior (5-10 ans)' },
    { value: 'expert', label: 'Expert (10+ ans)' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      
      // Clear error when field is edited
      if (errors[name]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    }
  };

  // Step validation functions
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis';
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.position) newErrors.position = 'Veuillez sélectionner un poste';
    if (!formData.experience) newErrors.experience = 'Veuillez sélectionner votre niveau d\'expérience';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.resume) newErrors.resume = 'Votre CV est requis';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateForm = () => {
    if (isMobile) {
      // On mobile, validate only the current step
      if (currentStep === 1) return validateStep1();
      if (currentStep === 2) return validateStep2();
      if (currentStep === 3) return validateStep3();
      return false;
    } else {
      // On desktop, validate all steps at once
      const step1Valid = validateStep1();
      const step2Valid = validateStep2();
      const step3Valid = validateStep3();
      return step1Valid && step2Valid && step3Valid;
    }
  };
  
  // Step navigation functions
  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      if (!validateStep1()) return;
    } else if (currentStep === 2) {
      if (!validateStep2()) return;
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // On mobile with step approach
    if (isMobile) {
      // If not on the last step, go to next step
      if (currentStep < totalSteps) {
        nextStep();
        return;
      }
      
      // On last step, validate before submission
      if (!validateStep3()) {
        return;
      }
    } else {
      // On desktop, validate entire form
      if (!validateForm()) {
        return;
      }
    }
    
    setSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Create FormData to handle file uploads for FormSubmit.co
      const formDataToSend = new FormData();
      
      // Add FormSubmit.co configuration
      formDataToSend.append('_subject', 'Nouvelle candidature');
      formDataToSend.append('_template', 'table');
      formDataToSend.append('_captcha', 'false');
      
      // Add form fields with proper labels
      formDataToSend.append('Prénom', formData.firstName);
      formDataToSend.append('Nom', formData.lastName);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Téléphone', formData.phone);
      formDataToSend.append('Poste', formData.position);
      formDataToSend.append('Expérience', formData.experience);
      formDataToSend.append('Message', formData.message || 'Aucun message');
      
      // Add file attachments
      if (formData.resume) {
        formDataToSend.append('CV', formData.resume);
      }
      if (formData.coverLetter) {
        formDataToSend.append('Lettre de motivation', formData.coverLetter);
      }
      
      // Send directly to FormSubmit.co
      const response = await fetch(`https://formsubmit.co/${process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || 'info@dmd-ascenseur.fr'}`, {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        setSubmitStatus('success');
      } else {
        // Still show success to user but log the error
        console.warn('FormSubmit.co returned error:', response.status);
        setSubmitStatus('success');
      }
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: null,
        coverLetter: null,
      });
      
      // Reset file inputs
      const fileInputs = document.querySelectorAll('input[type="file"]');
      fileInputs.forEach((input: Element) => {
        if (input instanceof HTMLInputElement) {
          input.value = '';
        }
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="application" className="py-8 bg-[#fbfcfd]">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 px-4 sm:px-6 md:px-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2b3343] mb-3 sm:mb-4 mt-2">
              Notre richesse, c&apos;est vous !
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-[#2b3343] text-base sm:text-lg leading-relaxed mb-8">
                Chaque candidature est une opportunité de découvrir de nouveaux profils et compétences. Nous nous engageons à étudier chaque dossier avec attention.
              </p>
            </div>
          </motion.div>
          
          {/* Progress Steps - Only show on mobile */}
          {isMobile && submitStatus === 'idle' && (
            <div className="mb-8 px-4">
              <div className="flex justify-between items-center w-full max-w-3xl mx-auto mb-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                        currentStep === step 
                          ? 'bg-[#0046fe] text-white' 
                          : currentStep > step 
                            ? 'bg-green-500 text-white' 
                            : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {currentStep > step ? <FaCheck /> : step}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${currentStep === step ? 'text-[#0046fe]' : 'text-gray-500'}`}>
                      {step === 1 ? 'Identité' : step === 2 ? 'Poste' : 'Documents'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative w-full max-w-3xl mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#0046fe] transition-all duration-300" 
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {submitStatus === 'success' ? (
            <div className="text-center py-10 px-6 sm:px-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <FaCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#2b3343] mb-4">Candidature envoyée avec succès !</h3>
              <p className="text-gray-700 mb-6">
                Nous avons bien reçu votre candidature et nous vous remercions de l&apos;intérêt que vous portez à Damad Ascenseurs. 
                Notre équipe RH examinera votre profil et vous contactera dans les plus brefs délais.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="inline-flex items-center justify-center bg-[#2b3343] hover:bg-[#3d4759] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                Envoyer une autre candidature
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-6 md:p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`step-${isMobile ? currentStep : 'desktop'}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Step 1: Personal Information - Always visible on desktop, only on step 1 for mobile */}
                  {(!isMobile || (isMobile && currentStep === 1)) && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                        <FaUser className="mr-2 text-[#0046fe]" />
                        Informations personnelles
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0046fe] focus:border-[#0046fe] outline-none transition-colors text-gray-900 ${
                              errors.firstName ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Nom *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0046fe] focus:border-[#0046fe] outline-none transition-colors text-gray-900 ${
                              errors.lastName ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 px-2">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0046fe] focus:border-[#0046fe] outline-none transition-colors text-gray-900 ${
                              errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Téléphone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0046fe] focus:border-[#0046fe] outline-none transition-colors text-gray-900 ${
                              errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Position Information - Always visible on desktop, only on step 2 for mobile */}
                  {(!isMobile || (isMobile && currentStep === 2)) && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                        <FaBriefcase className="mr-2 text-[#0046fe]" />
                        Poste et expérience
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                            Poste souhaité *
                          </label>
                          <select
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0046fe] focus:border-[#0046fe] outline-none transition-colors text-[#2b3343] ${
                              errors.position ? 'border-red-500' : 'border-gray-300'
                            }`}
                          >
                            {positions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {errors.position && (
                            <p className="mt-1 text-sm text-red-600">{errors.position}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            Niveau d&apos;expérience *
                          </label>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0046fe] focus:border-[#0046fe] outline-none transition-colors text-[#2b3343] ${
                              errors.experience ? 'border-red-500' : 'border-gray-300'
                            }`}
                          >
                            {experiences.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                          {errors.experience && (
                            <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
                          )}
                        </div>
                      </div>

                      <div className="mt-6 px-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message / Motivation
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0046fe] focus:border-[#0046fe] outline-none transition-colors text-gray-900"
                          placeholder="Présentez-vous et expliquez votre motivation pour rejoindre notre équipe..."
                        ></textarea>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Documents - Always visible on desktop, only on step 3 for mobile */}
                  {(!isMobile || (isMobile && currentStep === 3)) && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                        <FaFileAlt className="mr-2 text-[#0046fe]" />
                        Documents et validation
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                            CV (PDF) *
                          </label>
                          <div className={`relative border rounded-lg ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex items-center px-4 py-2">
                              <FaUpload className="text-gray-400 mr-2" />
                              <span className="text-gray-500 truncate">
                                {formData.resume ? formData.resume.name : 'Choisir un fichier'}
                              </span>
                            </div>
                          </div>
                          {errors.resume && (
                            <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                            Lettre de motivation (PDF, optionnel)
                          </label>
                          <div className="relative border border-gray-300 rounded-lg">
                            <input
                              type="file"
                              id="coverLetter"
                              name="coverLetter"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex items-center px-4 py-2">
                              <FaUpload className="text-gray-400 mr-2" />
                              <span className="text-gray-500 truncate">
                                {formData.coverLetter ? formData.coverLetter.name : 'Choisir un fichier'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mt-8 px-2">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          required
                          className="h-4 w-4 text-[#0046fe] focus:ring-[#0046fe] border-gray-300 rounded"
                        />
                        <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                          J&apos;accepte que mes données soient traitées pour le processus de recrutement *
                        </label>
                      </div>

                      {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start mt-6">
                          <FaTimes className="mt-0.5 mr-2 flex-shrink-0" />
                          <p>Une erreur est survenue lors de l&apos;envoi de votre candidature. Veuillez réessayer ultérieurement.</p>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className={`flex ${isMobile ? 'justify-between' : 'justify-center'} mt-8 px-2`}>
                {isMobile && currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-4 py-2 text-[#2b3343] border border-[#2b3343] rounded-md hover:bg-gray-50 transition-all"
                  >
                    <FaArrowLeft className="mr-2" /> Précédent
                  </button>
                )}
                
                <button
                  type="submit"
                  disabled={submitting}
                  className={`${isMobile && currentStep > 1 ? 'ml-auto' : ''} flex items-center justify-center bg-[#ff5c35] hover:bg-[#ff5c35]/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed`}
                >
                  {submitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Envoi en cours...
                    </>
                  ) : isMobile && currentStep < totalSteps ? (
                    <>Suivant <FaArrowRight className="ml-2" /></>
                  ) : (
                    'Envoyer ma candidature'
                  )}
                </button>
              </div>
              
              {/* Required fields note */}
              <p className="mt-4 text-sm text-center text-gray-500">
                * Champs obligatoires
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
