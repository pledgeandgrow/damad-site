'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaArrowLeft, FaCheck, FaBuilding, FaUser, FaFileAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function PartenariatForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    siret: '',
    address: '',
    city: '',
    services: '',
    contactName: '',
    contactFirstName: '',
    email: '',
    phone: '',
    // Project 1
    project1Title: '',
    project1Date: '',
    project1Location: '',
    project1Amount: '',
    // Project 2
    project2Title: '',
    project2Date: '',
    project2Location: '',
    project2Amount: '',
    // Project 3
    project3Title: '',
    project3Date: '',
    project3Location: '',
    project3Amount: '',
    // Documents
    insurance: null,
    fiscalCertificate: null,
    kbis: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  
  // Mobile detection has been removed as it was unused

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const { name } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: e.target.files?.[0]
      }));
    }
  };

  const handleRadioChange = (project: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [project]: value
    }));
  };

  // Step validation functions
  const validateStep1 = () => {
    if (!formData.companyName || !formData.siret || !formData.address || !formData.city || !formData.services) {
      setError('Veuillez remplir tous les champs obligatoires de l\'information de l\'entreprise.');
      return false;
    }
    setError('');
    return true;
  };

  const validateStep2 = () => {
    if (!formData.contactName || !formData.contactFirstName || !formData.email || !formData.phone) {
      setError('Veuillez remplir tous les champs obligatoires des informations de contact.');
      return false;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Veuillez entrer une adresse email valide.');
      return false;
    }
    setError('');
    return true;
  };

  // Step navigation functions
  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      if (!validateStep1()) {
        return;
      }
    } else if (currentStep === 2) {
      if (!validateStep2()) {
        return;
      }
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Validation for the final step (documents)
  const validateStep3 = () => {
    if (!formData.insurance || !formData.fiscalCertificate || !formData.kbis) {
      setError('Veuillez télécharger tous les documents obligatoires.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation before submission
    if (currentStep === totalSteps) {
      // Check if we need to validate the current step first
      if (!validateStep3()) {
        return;
      }
      
      setLoading(true);
      setError('');
      
      // Additional validation for all steps
      if (!validateStep1() || !validateStep2()) {
        setLoading(false);
        return;
      }
      
      try {
        // Send data to our email API endpoint
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            formType: 'partenariat'
          }),
        });
        
        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.message || 'Erreur lors de l\'envoi du formulaire');
        }
        
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
        setError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    } else {
      nextStep();
    }
  };

  return (
    <section className="py-20 bg-[#fbfcfd] text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#2b3343] mb-3 sm:mb-4">
              Devenez partenaire de DAMAD dès aujourd&apos;hui
            </h2>
            <div className="w-16 h-1 bg-[#0046fe] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complétez le formulaire ci-dessous pour soumettre votre candidature de partenariat.
            </p>
          </div>
          
          {/* Progress Steps */}
          {!submitted && (
            <div className="mb-10">
              <div className="flex justify-between items-center w-full max-w-3xl mx-auto mb-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${currentStep === step 
                        ? 'bg-[#0046fe] text-white' 
                        : currentStep > step 
                          ? 'bg-[#0046fe] text-white' 
                          : 'bg-gray-200 text-gray-600'}`}
                    >
                      {currentStep > step ? <FaCheck /> : step}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${currentStep === step ? 'text-[#0046fe]' : 'text-gray-500'}`}>
                      {step === 1 ? 'Entreprise' : step === 2 ? 'Contact' : 'Documents'}
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
          
          <div className="bg-white shadow-lg border border-gray-200 p-8 md:p-10 rounded-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg mb-6">{error}</div>}
                
                {/* Step content container */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                  {/* Step 1: Informations de l'entreprise */}
                  {currentStep === 1 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                        <FaBuilding className="mr-2 text-[#0046fe]" />
                        Informations de l&apos;entreprise
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-medium mb-2 text-gray-700">
                            NOM DE L&apos;ENTREPRISE
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="siret" className="block text-sm font-medium mb-2 text-gray-700">
                            SIRET
                          </label>
                          <input
                            type="text"
                            id="siret"
                            name="siret"
                            value={formData.siret}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium mb-2 text-gray-700">
                            ADRESSE
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-700">
                            VILLE
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <label htmlFor="services" className="block text-sm font-medium mb-2 text-gray-700">
                          SERVICES PROPOSÉS
                        </label>
                        <textarea
                          id="services"
                          name="services"
                          value={formData.services}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          required
                        />
                      </div>
                    </div>
                  )}
                
                  {/* Step 2: Personne à contacter */}
                  {currentStep === 2 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                        <FaUser className="mr-2 text-[#0046fe]" />
                        Personne à contacter
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <div>
                          <label htmlFor="contactName" className="block text-sm font-medium mb-2 text-gray-700">
                            NOM
                          </label>
                          <input
                            type="text"
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="contactFirstName" className="block text-sm font-medium mb-2 text-gray-700">
                            PRÉNOM
                          </label>
                          <input
                            type="text"
                            id="contactFirstName"
                            name="contactFirstName"
                            value={formData.contactFirstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                            EMAIL
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">
                            TÉLÉPHONE
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                
                  {/* Step 3: Documents and Projects */}
                  {currentStep === 3 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                        <FaFileAlt className="mr-2 text-[#0046fe]" />
                        Documents
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="insurance" className="block text-sm font-medium mb-2 text-gray-700">
                            Assurance décennale et professionnelle*
                          </label>
                          <input
                            type="file"
                            id="insurance"
                            name="insurance"
                            onChange={handleFileChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="fiscalCertificate" className="block text-sm font-medium mb-2 text-gray-700">
                            Attestation de régularité fiscale*
                          </label>
                          <input
                            type="file"
                            id="fiscalCertificate"
                            name="fiscalCertificate"
                            onChange={handleFileChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="kbis" className="block text-sm font-medium mb-2 text-gray-700">
                            Kbis*
                          </label>
                          <input
                            type="file"
                            id="kbis"
                            name="kbis"
                            onChange={handleFileChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                            required
                          />
                        </div>
                      </div>
                      
                      <p className="mt-4 text-sm text-gray-500 mb-8">
                        Attention Assurance décennale et professionnelle valide. Attestation de régularité et Kbis de moins de 3 mois
                      </p>

                      <h3 className="text-xl font-semibold mb-4 text-[#2b3343] mt-8">Références de projets</h3>
                      <p className="text-sm text-gray-600 mb-6">Présentez des services ou des travaux réalisés au cours de 6 derniers mois.</p>
                      
                      {/* Projet 1 */}
                      <div className="mb-8 border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-[#2b3343]">1/ Projet</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-4">
                          <div>
                            <label htmlFor="project1Title" className="block text-sm font-medium mb-2 text-gray-700">
                              Intitulé
                            </label>
                            <input
                              type="text"
                              id="project1Title"
                              name="project1Title"
                              value={formData.project1Title}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                          </div>
                          <div>
                            <label htmlFor="project1Date" className="block text-sm font-medium mb-2 text-gray-700">
                              Date de réalisation
                            </label>
                            <input
                              type="text"
                              id="project1Date"
                              name="project1Date"
                              value={formData.project1Date}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <label htmlFor="project1Location" className="block text-sm font-medium mb-2 text-gray-700">
                            VILLE DE CHANTIER OU LIEU DE LA PRESTATION DE SERVICE
                          </label>
                          <input
                            type="text"
                            id="project1Location"
                            name="project1Location"
                            value={formData.project1Location}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          />
                        </div>
                        
                        <div>
                          <p className="block text-sm font-medium mb-2 text-gray-700">MONTANT</p>
                          <div className="flex flex-wrap items-center gap-4">
                            <label className="inline-flex items-center">
                              <input 
                                type="radio" 
                                name="project1Amount" 
                                value="Inférieur à 1000€" 
                                checked={formData.project1Amount === "Inférieur à 1000€"}
                                onChange={() => handleRadioChange('project1Amount', 'Inférieur à 1000€')}
                                className="h-4 w-4 text-blue-600"
                              />
                              <span className="ml-2 text-sm text-gray-700">Inférieur à 1000€</span>
                            </label>
                            <label className="inline-flex items-center">
                              <input 
                                type="radio" 
                                name="project1Amount" 
                                value="compris en 1000€ et 5000€" 
                                checked={formData.project1Amount === "compris en 1000€ et 5000€"}
                                onChange={() => handleRadioChange('project1Amount', 'compris en 1000€ et 5000€')}
                                className="h-4 w-4 text-blue-600"
                              />
                              <span className="ml-2 text-sm text-gray-700">compris en 1000€ et 5000€</span>
                            </label>
                            <label className="inline-flex items-center">
                              <input 
                                type="radio" 
                                name="project1Amount" 
                                value="Supérieur à 5000" 
                                checked={formData.project1Amount === "Supérieur à 5000"}
                                onChange={() => handleRadioChange('project1Amount', 'Supérieur à 5000')}
                                className="h-4 w-4 text-blue-600"
                              />
                              <span className="ml-2 text-sm text-gray-700">Supérieur à 5000</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation and Submit buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors duration-300"
                    >
                      <FaArrowLeft className="mr-2" /> Précédent
                    </button>
                  )}
                  
                  {currentStep < 3 && (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center px-6 py-3 bg-[#0046fe] hover:bg-[#0046fe]/90 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ml-auto"
                    >
                      Suivant <FaArrowRight className="ml-2" />
                    </button>
                  )}
                  
                  {currentStep === 3 && (
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center px-8 py-3 bg-[#0046fe] hover:bg-[#0046fe]/90 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ml-auto"
                    >
                      {loading ? 'Envoi en cours...' : 'Je candidate'}
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Merci pour votre intérêt !</h3>
                <p className="text-gray-300 mb-6">
                  Notre équipe commerciale vous contactera très prochainement pour discuter des possibilités de partenariat.
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center text-white hover:text-gray-300 transition-all"
                >
                  <span>Retour à l&apos;accueil</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            )}
          </div>
          
          {/* Contact information section removed as requested */}
        </div>
      </div>
    </section>
  );
}
