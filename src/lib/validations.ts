import { z } from 'zod';

// Contact Form Validation
export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().regex(/^[0-9\s\-\+\(\)]+$/, 'Numéro de téléphone invalide'),
  postalCode: z.string().regex(/^[0-9]{5}$/, 'Code postal invalide (5 chiffres)'),
  city: z.string().min(2, 'La ville doit contenir au moins 2 caractères'),
  buildingType: z.string().min(1, 'Veuillez sélectionner un type de bâtiment'),
  service: z.string().min(1, 'Veuillez sélectionner un service'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  preferredDays: z.string().optional(),
  preferredTime: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Devis Form Validation
export const devisFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().regex(/^[0-9\s\-\+\(\)]+$/, 'Numéro de téléphone invalide'),
  company: z.string().min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères'),
  postalCode: z.string().regex(/^[0-9]{5}$/, 'Code postal invalide (5 chiffres)'),
  city: z.string().min(2, 'La ville doit contenir au moins 2 caractères'),
  buildingType: z.string().min(1, 'Veuillez sélectionner un type de bâtiment'),
  equipmentType: z.string().min(1, 'Veuillez sélectionner un type d\'équipement'),
  currentSituation: z.string().min(1, 'Veuillez sélectionner la situation actuelle'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type DevisFormData = z.infer<typeof devisFormSchema>;

// Interventions Form Validation
export const interventionsFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().regex(/^[0-9\s\-\+\(\)]+$/, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  postalCode: z.string().regex(/^[0-9]{5}$/, 'Code postal invalide (5 chiffres)'),
  city: z.string().min(2, 'La ville doit contenir au moins 2 caractères'),
  equipmentType: z.string().min(1, 'Veuillez sélectionner un type d\'équipement'),
  problemDescription: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
  urgencyLevel: z.string().min(1, 'Veuillez sélectionner le niveau d\'urgence'),
  acceptTerms: z.boolean().refine(val => val === true, 'Vous devez accepter les conditions'),
});

export type InterventionsFormData = z.infer<typeof interventionsFormSchema>;

// Partenariat Form Validation
export const partenariatFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().regex(/^[0-9\s\-\+\(\)]+$/, 'Numéro de téléphone invalide'),
  company: z.string().min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères'),
  partnershipType: z.string().min(1, 'Veuillez sélectionner un type de partenariat'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type PartenariatFormData = z.infer<typeof partenariatFormSchema>;

// Application Form Validation
export const applicationFormSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  phone: z.string().regex(/^[0-9\s\-\+\(\)]+$/, 'Numéro de téléphone invalide'),
  position: z.string().min(1, 'Veuillez sélectionner un poste'),
  experience: z.string().min(1, 'Veuillez sélectionner votre niveau d\'expérience'),
  message: z.string().optional(),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
