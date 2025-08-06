'use client';

import { useState } from 'react';
import { FaBuilding, FaExclamationTriangle, FaCalendarAlt, FaComments } from 'react-icons/fa';

export default function InterventionsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    appareilType: '',
    urgency: 'normal',
    issueType: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
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
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields
    if (!formData.name.trim()) newErrors.name = 'Veuillez entrer votre nom';
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez entrer votre email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Veuillez entrer votre numéro de téléphone';
    if (!formData.address.trim()) newErrors.address = 'Veuillez entrer l\'adresse du bâtiment';
    if (!formData.appareilType) newErrors.appareilType = 'Veuillez sélectionner un type d\'appareil';
    if (!formData.issueType) newErrors.issueType = 'Veuillez sélectionner un type de problème';
    if (!formData.description.trim()) newErrors.description = 'Veuillez décrire le problème';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Vous devez accepter les conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setIsSubmitting(true);
    setFormError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation, you would send the data to your backend
      // const response = await fetch('/api/interventions/request', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('Erreur lors de l\'envoi de la demande');
      // }
      
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
        description: '',
        preferredDate: '',
        preferredTime: '',
        acceptTerms: false
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="interventions-form" className="py-20 bg-[#fbfcfd]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#2b3343]">
            Demande d&apos;intervention
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Remplissez le formulaire ci-dessous pour demander une intervention. Notre équipe vous contactera dans les plus brefs délais pour confirmer votre demande.
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
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
              <p className="text-gray-600">
                Un email de confirmation a été envoyé à l&apos;adresse que vous avez fournie.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 bg-[#2b3343] text-white px-6 py-3 rounded-lg hover:bg-[#3a4456] transition-all"
              >
                Faire une nouvelle demande
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            {formError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                <p className="flex items-center">
                  <FaExclamationTriangle className="mr-2" />
                  {formError}
                </p>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                <FaBuilding className="mr-2 text-[#0046fe]" />
                Informations de contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors`}
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
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors`}
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
                    className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors`}
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
                    className={`w-full px-4 py-2 border ${errors.address ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors`}
                    placeholder="123 rue de l'Exemple, 75001 Paris"
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                <FaExclamationTriangle className="mr-2 text-[#0046fe]" />
                Détails de l&apos;intervention
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="appareilType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type d&apos;appareils *
                  </label>
                  <select
                    id="appareilType"
                    name="appareilType"
                    value={formData.appareilType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.appareilType ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors`}
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
                    Niveau d&apos;urgence *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors"
                  >
                    <option value="critical">Critique - Personnes bloquées</option>
                    <option value="high">Élevé - Ascenseur hors service</option>
                    <option value="normal">Normal - Dysfonctionnement</option>
                    <option value="low">Faible - Maintenance préventive</option>
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
                    className={`w-full px-4 py-2 border ${errors.issueType ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors`}
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
                  className={`w-full px-4 py-2 border ${errors.description ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors`}
                  placeholder="Veuillez décrire le problème en détail..."
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#2b3343] flex items-center">
                <FaCalendarAlt className="mr-2" />
                Planification (optionnel)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date préférée
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Heure préférée
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2b3343]/30 focus:border-[#2b3343] transition-colors"
                  >
                    <option value="">Sélectionner</option>
                    <option value="morning">Matin (8h-12h)</option>
                    <option value="afternoon">Après-midi (12h-17h)</option>
                    <option value="evening">Soir (17h-20h)</option>
                  </select>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                <FaComments className="inline mr-1" />
                Nous ferons notre possible pour respecter vos préférences, sous réserve de disponibilité.
              </p>
            </div>
            
            <div className="mb-8">
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
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#ff5c35] text-white px-8 py-3 rounded-md hover:bg-[#e64a24] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
              <p className="mt-4 text-sm text-gray-500">
                * Champs obligatoires
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
