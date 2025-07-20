"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTicketAlt, FaSpinner, FaExclamationTriangle, FaCheckCircle, FaClock, FaUser, FaCalendarAlt, FaCommentAlt, FaDownload, FaPhone, FaEnvelope, FaHistory, FaBell } from 'react-icons/fa';
import SupportTicketButton from './SupportTicketButton';

type TicketStatus = 'pending' | 'in_progress' | 'resolved' | 'closed';

type Ticket = {
  id: string;
  subject: string;
  description: string;
  status: TicketStatus;
  priority: 'low' | 'medium' | 'high' | 'critical';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  estimatedResolution?: string;
  category: string;
  location?: string;
  contactPhone?: string;
  progress: number; // 0-100
  attachments?: string[];
  comments: {
    id: string;
    author: string;
    content: string;
    timestamp: string;
    type: 'comment' | 'status_change' | 'assignment' | 'resolution';
  }[];
};

export default function SupportTicketTracker() {
  const [ticketId, setTicketId] = useState('');
  const [email, setEmail] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [error, setError] = useState('');

  // Mock ticket data for demonstration
  const mockTicket: Ticket = {
    id: 'TKT-2023-12345',
    subject: 'Ascenseur bloqué au 3ème étage',
    description: 'L\'ascenseur est bloqué entre le 3ème et le 4ème étage. Les portes ne s\'ouvrent pas et le bouton d\'alarme ne fonctionne pas.',
    status: 'in_progress',
    priority: 'high',
    createdAt: '2023-11-15T09:30:00Z',
    updatedAt: '2023-11-15T14:45:00Z',
    assignedTo: 'Technicien Jean Dupont',
    estimatedResolution: '2023-11-16T10:00:00Z',
    category: 'Panne technique',
    location: 'Immeuble Résidentiel - 123 Rue de la Paix, Paris 75001',
    contactPhone: '+33 1 23 45 67 89',
    progress: 65,
    attachments: ['diagnostic-initial.pdf', 'photo-probleme.jpg'],
    comments: [
      {
        id: 'c1',
        author: 'Support Client',
        content: 'Nous avons reçu votre demande et un technicien a été assigné à votre cas.',
        timestamp: '2023-11-15T09:45:00Z',
        type: 'assignment'
      },
      {
        id: 'c2',
        author: 'Technicien Jean Dupont',
        content: 'Je suis en route pour votre bâtiment. Temps d\'arrivée estimé : 30 minutes.',
        timestamp: '2023-11-15T10:15:00Z',
        type: 'comment'
      },
      {
        id: 'c3',
        author: 'Technicien Jean Dupont',
        content: 'Après inspection, j\'ai identifié un problème avec le système de contrôle. J\'ai commandé la pièce nécessaire qui devrait arriver demain matin.',
        timestamp: '2023-11-15T14:45:00Z',
        type: 'comment'
      },
      {
        id: 'c4',
        author: 'Système',
        content: 'Statut mis à jour: En cours de traitement',
        timestamp: '2023-11-15T14:50:00Z',
        type: 'status_change'
      }
    ]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      if (ticketId === 'TKT-2023-12345' && email.includes('@')) {
        setTicket(mockTicket);
      } else {
        setError('Aucun ticket trouvé avec ces informations. Veuillez vérifier l\'ID du ticket et l\'email.');
        setTicket(null);
      }
      setIsSearching(false);
    }, 1500);
  };

  const getStatusBadge = (status: TicketStatus) => {
    switch (status) {
      case 'pending':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            En attente
          </span>
        );
      case 'in_progress':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            En cours
          </span>
        );
      case 'resolved':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Résolu
          </span>
        );
      case 'closed':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Fermé
          </span>
        );
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'low':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Basse
          </span>
        );
      case 'medium':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            Moyenne
          </span>
        );
      case 'high':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
            Haute
          </span>
        );
      case 'critical':
        return (
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Critique
          </span>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaTicketAlt className="w-6 h-6 text-[#2b3343]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Suivi de Ticket</h2>
          <p className="text-xl text-gray-600">
            Consultez l&apos;état d&apos;avancement de votre demande d&apos;assistance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-8"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#2b3343] mb-4">Rechercher un ticket</h3>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ticketId" className="block text-sm font-medium text-[#2b3343] mb-1">
                    Numéro de ticket
                  </label>
                  <input
                    type="text"
                    id="ticketId"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    placeholder="ex: TKT-2023-12345"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2b3343] focus:border-[#2b3343] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2b3343] mb-1">
                    Email associé
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#2b3343] focus:border-[#2b3343] sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSearching}
                  className={`inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#2b3343] hover:bg-[#3a4456] transition-all duration-300 ${isSearching ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSearching ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Recherche en cours...
                    </>
                  ) : (
                    <>
                      <FaSearch className="mr-2" />
                      Rechercher
                    </>
                  )}
                </button>
              </div>
            </form>
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaExclamationTriangle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-4 text-sm text-gray-500">
              <p>Pour tester, utilisez ID: TKT-2023-12345 et n&apos;importe quel email valide</p>
            </div>
          </div>
        </motion.div>

        {ticket && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            {/* Header with status and priority */}
            <div className="bg-gradient-to-r from-[#2b3343] to-[#3d4759] text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FaTicketAlt className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Ticket #{ticket.id}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(ticket.status)}
                  {getPriorityBadge(ticket.priority)}
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progression</span>
                  <span className="text-sm font-medium">{ticket.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${ticket.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <h4 className="text-lg font-medium">{ticket.subject}</h4>
            </div>
            
            <div className="p-6">
              {/* Key Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="flex items-start space-x-3">
                  <FaCalendarAlt className="w-5 h-5 text-[#2b3343] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Créé le</p>
                    <p className="font-medium">{formatDate(ticket.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaClock className="w-5 h-5 text-[#2b3343] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Dernière mise à jour</p>
                    <p className="font-medium">{formatDate(ticket.updatedAt)}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaUser className="w-5 h-5 text-[#2b3343] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Assigné à</p>
                    <p className="font-medium">{ticket.assignedTo || 'Non assigné'}</p>
                  </div>
                </div>
                {ticket.estimatedResolution && (
                  <div className="flex items-start space-x-3">
                    <FaBell className="w-5 h-5 text-[#2b3343] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Résolution estimée</p>
                      <p className="font-medium">{formatDate(ticket.estimatedResolution)}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start space-x-3">
                  <FaTicketAlt className="w-5 h-5 text-[#2b3343] mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Catégorie</p>
                    <p className="font-medium">{ticket.category}</p>
                  </div>
                </div>
                {ticket.contactPhone && (
                  <div className="flex items-start space-x-3">
                    <FaPhone className="w-5 h-5 text-[#2b3343] mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="font-medium">{ticket.contactPhone}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Location */}
              {ticket.location && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <FaEnvelope className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Localisation</p>
                      <p className="text-blue-700">{ticket.location}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Description */}
              <div className="mb-6">
                <p className="text-sm font-medium text-[#2b3343] mb-2">Description du problème</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-gray-700">
                  {ticket.description}
                </div>
              </div>
              
              {/* Attachments */}
              {ticket.attachments && ticket.attachments.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-medium text-[#2b3343] mb-3">Pièces jointes</p>
                  <div className="flex flex-wrap gap-2">
                    {ticket.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                        <FaDownload className="w-4 h-4 text-[#2b3343]" />
                        <span className="text-sm font-medium text-[#2b3343]">{attachment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaHistory className="w-5 h-5 text-[#2b3343]" />
                  <h4 className="text-md font-semibold text-[#2b3343]">Historique des commentaires</h4>
                </div>
                <div className="space-y-4">
                  {ticket.comments.map((comment) => {
                    const getCommentIcon = (type: string) => {
                      switch (type) {
                        case 'assignment':
                          return <FaUser className="w-4 h-4 text-blue-600" />;
                        case 'status_change':
                          return <FaBell className="w-4 h-4 text-green-600" />;
                        case 'resolution':
                          return <FaCheckCircle className="w-4 h-4 text-green-600" />;
                        default:
                          return <FaCommentAlt className="w-4 h-4 text-gray-600" />;
                      }
                    };
                    
                    const getCommentBorder = (type: string) => {
                      switch (type) {
                        case 'assignment':
                          return 'border-l-4 border-blue-500 bg-blue-50';
                        case 'status_change':
                          return 'border-l-4 border-green-500 bg-green-50';
                        case 'resolution':
                          return 'border-l-4 border-green-600 bg-green-100';
                        default:
                          return 'border-l-4 border-gray-300 bg-gray-50';
                      }
                    };
                    
                    return (
                      <div key={comment.id} className={`p-4 rounded-lg ${getCommentBorder(comment.type)}`}>
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {getCommentIcon(comment.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-medium text-[#2b3343]">{comment.author}</p>
                              <p className="text-xs text-gray-500">{formatDate(comment.timestamp)}</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-8 flex justify-between items-center">
                <div className="flex items-center text-green-600">
                  <FaCheckCircle className="mr-2" />
                  <span className="text-sm">Mise à jour il y a {Math.floor(Math.random() * 60)} minutes</span>
                </div>
                <button
                  className="inline-flex items-center justify-center px-4 py-2 border border-[#2b3343] text-sm font-medium rounded-md text-[#2b3343] hover:bg-[#2b3343] hover:text-white transition-all duration-300"
                >
                  Ajouter un commentaire
                </button>
              </div>
            </div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Vous n&apos;avez pas encore de numéro de ticket ?
          </p>
          <SupportTicketButton />
        </motion.div>
      </div>
    </section>
  );
}
