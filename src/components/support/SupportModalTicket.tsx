"use client";

import { useState } from 'react';
import { FaTicketAlt, FaTimes, FaBuilding, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface SupportModalTicketProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModalTicket({ isOpen, onClose }: SupportModalTicketProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    subject: '',
    message: '',
    priority: 'normal',
    deviceId: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Dans une implémentation réelle, vous enverriez les données à votre API
    // await fetch('/api/support-tickets', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Réinitialiser le formulaire après quelques secondes
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        subject: '',
        message: '',
        priority: 'normal',
        deviceId: ''
      });
    }, 2000);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-[#2b3343] text-white rounded-t-xl">
                <div className="flex items-center">
                  <FaTicketAlt className="mr-3 text-xl" />
                  <h3 className="text-xl font-semibold">Créer un ticket de support</h3>
                </div>
                <button 
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <FaTimes />
                </button>
              </div>
              
              {/* Body */}
              <div className="p-5 sm:p-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Informations personnelles */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Téléphone
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaPhone className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="Votre numéro de téléphone"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Entreprise
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaBuilding className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Adresse
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaMapMarkerAlt className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="Adresse complète"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-5">
                      <h4 className="text-lg font-medium text-gray-800 mb-3">Détails du ticket</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Sujet <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="Sujet de votre demande"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Priorité
                          </label>
                          <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                          >
                            <option value="low">Basse</option>
                            <option value="normal">Normale</option>
                            <option value="high">Haute</option>
                            <option value="urgent">Urgente</option>
                          </select>
                        </div>
                        
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            ID de l&apos;appareil (si applicable)
                          </label>
                          <input
                            type="text"
                            name="deviceId"
                            value={formData.deviceId}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="Numéro d'identification de l'appareil"
                          />
                        </div>
                        
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full rounded-lg border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2b3343] focus:border-transparent"
                            placeholder="Décrivez votre problème en détail..."
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 bg-[#2b3343] text-white rounded-lg hover:bg-[#3d4759] transition-colors flex items-center justify-center disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                          </>
                        ) : 'Envoyer le ticket'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="mt-3 text-lg font-medium text-gray-900">Ticket envoyé avec succès!</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Nous avons bien reçu votre demande et nous vous contacterons dans les plus brefs délais.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
