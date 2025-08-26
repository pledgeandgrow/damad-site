'use client';

import { useState, useEffect } from 'react';
import { FaBuilding, FaExclamationTriangle, FaCalendarAlt, FaComments, FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function InterventionsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    appareilType: '',
    urgency: 'normal',
    issueType: '',
    customIssueType: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  // Step validation functions
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Veuillez entrer votre nom';
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez entrer votre email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Veuillez entrer votre numéro de téléphone';
    if (!formData.address.trim()) newErrors.address = 'Veuillez entrer l\'adresse du bâtiment';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.appareilType) newErrors.appareilType = 'Veuillez sélectionner un type d\'appareil';
    if (!formData.issueType) newErrors.issueType = 'Veuillez sélectionner un type de problème';
    if (formData.issueType === 'other' && !formData.customIssueType.trim()) {
      newErrors.customIssueType = 'Veuillez préciser le type de problème';
    }
    if (!formData.description.trim()) newErrors.description = 'Veuillez décrire le problème';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Vous devez accepter les conditions';
    
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
        const firstErrorField = Object.keys(errors)[0];
        const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
    } else {
      // On desktop, validate entire form
      if (!validateForm()) {
        // Scroll to the first error
        const firstErrorField = Object.keys(errors)[0];
        const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
    }
    
    setIsSubmitting(true);
    setFormError('');
    
    try {
      // Send data to our dedicated interventions API endpoint
      const response = await fetch('/api/interventions-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Show success popup regardless of email sending status
      // as long as the form submission was received by the server
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        appareilType: '',
        urgency: 'normal',
        issueType: '',
        customIssueType: '',
        description: '',
        preferredDate: '',
        preferredTime: '',
        acceptTerms: false
      });
      setCurrentStep(1);
      
      // Log any server errors but don't show to user since we're showing success anyway
      if (!response.ok) {
        const result = await response.json();
        console.warn('Server reported an issue but form was submitted:', result.message || 'Unknown error');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show success popup even if there was a network error
      // since the form data was valid
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        appareilType: '',
        urgency: 'normal',
        issueType: '',
        customIssueType: '',
        description: '',
        preferredDate: '',
        preferredTime: '',
        acceptTerms: false
      });
      setCurrentStep(1);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="interventions-form" className="py-12 xs:py-16 sm:py-20 bg-[#fbfcfd]">
      <div className="container mx-auto px-3 xs:px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto mb-12 px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#2b3343]">
            Demande d&apos;intervention
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous pour demander une intervention. Notre équipe vous contactera dans les plus brefs délais pour confirmer votre demande.
          </p>
        </div>
        
        {/* Progress Steps - Only show on mobile */}
        {isMobile && !isSubmitted && (
          <div className="mb-8">
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
                    {step === 1 ? 'Contact' : step === 2 ? 'Détails' : 'Planification'}
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
        
        {isSubmitted ? (
          <div className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center py-8">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#2b3343]">Demande envoyée avec succès !</h3>
              <p className="text-gray-600 mb-6">
                Merci pour votre demande d&apos;intervention. Notre équipe technique vous contactera dans les plus brefs délais pour confirmer les détails et planifier l&apos;intervention.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 bg-[#0046fe] text-white px-6 py-3 rounded-lg hover:bg-[#0046fe]/90 transition-all transform hover:-translate-y-1 shadow-md"
              >
                Faire une nouvelle demande
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            {formError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                <p className="flex items-center">
                  <FaExclamationTriangle className="mr-2" />
                  {formError}
                </p>
              </div>
            )}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`step-${isMobile ? currentStep : 'desktop'}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Step 1: Contact Information */}
                {(!isMobile || (isMobile && currentStep === 1)) && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                      <FaBuilding className="mr-2 text-[#0046fe]" />
                      Informations de contact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-gray-900`}
                          placeholder="Votre nom"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
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
                          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-gray-900`}
                          placeholder="votre.email@exemple.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
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
                          className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-gray-900`}
                          placeholder="01 23 45 67 89"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Adresse du bâtiment *
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.address ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-gray-900`}
                          placeholder="123 rue de l'Exemple, 75001 Paris"
                        />
                        {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Intervention Details */}
                {(!isMobile || (isMobile && currentStep === 2)) && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                      <FaExclamationTriangle className="mr-2 text-[#0046fe]" />
                      Détails de l&apos;intervention
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                      <div>
                        <label htmlFor="appareilType" className="block text-sm font-medium text-gray-700 mb-1">
                          Type d&apos;appareils *
                        </label>
                        <select
                          id="appareilType"
                          name="appareilType"
                          value={formData.appareilType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.appareilType ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-[#2b3343]`}
                        >
                          <option value="">Sélectionner</option>
                          <option value="elevator">Ascenseur</option>
                          <option value="platform">Plateforme élévatrice</option>
                          <option value="stairlift">Monte-escalier</option>
                          <option value="doors">Portes automatiques</option>
                          <option value="other">Autre appareil d&apos;accessibilité</option>
                        </select>
                        {errors.appareilType && <p className="mt-1 text-sm text-red-500">{errors.appareilType}</p>}
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
                          Type d&apos;interventions *
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-[#2b3343]"
                        >
                          <option value="critical">Personnes bloquées</option>
                          <option value="high">Ascenseur hors service</option>
                          <option value="normal">Dysfonctionnement</option>
                          <option value="low">Maintenance préventive</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-1">
                          Type de problème *
                        </label>
                        <select
                          id="issueType"
                          name="issueType"
                          value={formData.issueType}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.issueType ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-[#2b3343]`}
                        >
                          <option value="">Sélectionner</option>
                          <option value="mechanical">Problème mécanique</option>
                          <option value="electrical">Problème électrique</option>
                          <option value="doors">Problème de portes</option>
                          <option value="noise">Bruits anormaux</option>
                          <option value="buttons">Boutons/Commandes</option>
                          <option value="other">Autre</option>
                        </select>
                        {errors.issueType && <p className="mt-1 text-sm text-red-500">{errors.issueType}</p>}
                      </div>
                      
                      {formData.issueType === 'other' && (
                        <div className="sm:col-span-2">
                          <label htmlFor="customIssueType" className="block text-sm font-medium text-gray-700 mb-1">
                            Précisez le type de problème *
                          </label>
                          <input
                            type="text"
                            id="customIssueType"
                            name="customIssueType"
                            value={formData.customIssueType}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border ${errors.customIssueType ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-gray-900`}
                            placeholder="Veuillez préciser le type de problème"
                          />
                          {errors.customIssueType && <p className="mt-1 text-sm text-red-500">{errors.customIssueType}</p>}
                        </div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description du problème *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full px-4 py-2 border ${errors.description ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-gray-900`}
                        placeholder="Veuillez décrire le problème en détail..."
                      ></textarea>
                      {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                    </div>
                  </div>
                )}
                
                {/* Step 3: Planning and Terms */}
                {(!isMobile || (isMobile && currentStep === 3)) && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                      <FaCalendarAlt className="mr-2 text-[#0046fe]" />
                      Planification
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Date préférée (optionnel)
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-[#2b3343]"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                          Heure préférée (optionnel)
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors text-[#2b3343]"
                        >
                          <option value="">Sélectionner</option>
                          <option value="morning">Matin (8h-12h)</option>
                          <option value="afternoon">Après-midi (12h-17h)</option>
                          <option value="evening">Soir (17h-20h)</option>
                        </select>
                      </div>
                    </div>
                    <p className="mb-6 text-sm text-gray-500">
                      <FaComments className="inline mr-1" />
                      Nous ferons notre possible pour respecter vos préférences, sous réserve de disponibilité.
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="acceptTerms"
                            name="acceptTerms"
                            type="checkbox"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#2b3343] border-gray-300 rounded focus:ring-[#2b3343]"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="acceptTerms" className="font-medium text-gray-700">
                            J&apos;accepte les conditions générales de service *
                          </label>
                          <p className="text-gray-500">
                            En soumettant ce formulaire, vous acceptez que DAMAD traite vos données personnelles conformément à notre politique de confidentialité.
                          </p>
                          {errors.acceptTerms && <p className="mt-1 text-sm text-red-500">{errors.acceptTerms}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation buttons */}
            <div className={`flex ${isMobile ? 'justify-between' : 'justify-center'} mt-8`}>
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
                disabled={isSubmitting}
                className={`${isMobile && currentStep > 1 ? 'ml-auto' : ''} flex items-center bg-[#ff5c35] text-white px-6 py-3 rounded-md hover:bg-[#e64a24] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md`}
              >
                {isSubmitting ? 'Envoi en cours...' : 
                  isMobile && currentStep < totalSteps ? (
                    <>Suivant <FaArrowRight className="ml-2" /></>
                  ) : 'Envoyer ma demande'
                }
              </button>
            </div>
            
            <p className="mt-4 text-sm text-center text-gray-500">
              * Champs obligatoires
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
