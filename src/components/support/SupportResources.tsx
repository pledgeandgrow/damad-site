"use client";

import React, { ReactElement, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaVideo, FaTools, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

type Resource = {
  title: string;
  description: string;
  icon: ReactElement;
  link: string;
  category: string;
};

export default function SupportResources() {
  const resources = useMemo<Resource[]>(() => [
    {
      title: "Guide d'utilisation - Ascenseurs résidentiels",
      description: "Instructions détaillées pour l'utilisation quotidienne et la maintenance de base de votre ascenseur résidentiel.",
      icon: <FaFileAlt className="w-6 h-6 text-[#2b3343]" />,
      link: "/resources/guide-ascenseur-residentiel.pdf",
      category: "document"
    },
    {
      title: "Guide d'utilisation - Ascenseurs collectifs",
      description: "Manuel complet pour la gestion et l'entretien des ascenseurs dans les immeubles collectifs.",
      icon: <FaFileAlt className="w-6 h-6 text-[#2b3343]" />,
      link: "/resources/guide-ascenseur-collectif.pdf",
      category: "document"
    },
    {
      title: "Vidéo - Comment réinitialiser votre ascenseur",
      description: "Tutoriel vidéo montrant la procédure de réinitialisation en cas de dysfonctionnement mineur.",
      icon: <FaVideo className="w-6 h-6 text-[#2b3343]" />,
      link: "/resources/videos/reset-procedure",
      category: "video"
    },
    {
      title: "Vidéo - Maintenance préventive",
      description: "Conseils et astuces pour maintenir votre ascenseur en bon état et prévenir les pannes.",
      icon: <FaVideo className="w-6 h-6 text-[#2b3343]" />,
      link: "/resources/videos/preventive-maintenance",
      category: "video"
    },
    {
      title: "Outil de diagnostic en ligne",
      description: "Identifiez rapidement les problèmes courants et obtenez des solutions recommandées.",
      icon: <FaTools className="w-6 h-6 text-[#2b3343]" />,
      link: "/tools/diagnostic",
      category: "tool"
    },
    {
      title: "Mise à jour du firmware - Série E2000",
      description: "Dernière version du firmware pour les ascenseurs de la série E2000 avec instructions d'installation.",
      icon: <FaDownload className="w-6 h-6 text-[#2b3343]" />,
      link: "/resources/firmware/e2000-v3.2.1",
      category: "download"
    }
  ], []);

  const categories = [
    { id: "all", name: "Toutes les ressources" },
    { id: "document", name: "Documents" },
    { id: "video", name: "Vidéos" },
    { id: "tool", name: "Outils" },
    { id: "download", name: "Téléchargements" }
  ];

  const [activeCategory, setActiveCategory] = React.useState("all");
  const [filteredResources, setFilteredResources] = React.useState(resources);

  React.useEffect(() => {
    if (activeCategory === "all") {
      setFilteredResources(resources);
    } else {
      setFilteredResources(resources.filter(resource => resource.category === activeCategory));
    }
  }, [activeCategory, resources]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#2b3343] mb-4">Ressources Utiles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consultez nos guides, vidéos et outils pour vous aider à résoudre les problèmes courants
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#2b3343] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2b3343]">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 h-16">{resource.description}</p>
                <Link 
                  href={resource.link}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#2b3343] hover:bg-[#3a4456] transition-all duration-300"
                >
                  {resource.category === "document" && "Consulter le document"}
                  {resource.category === "video" && "Regarder la vidéo"}
                  {resource.category === "tool" && "Utiliser l'outil"}
                  {resource.category === "download" && "Télécharger"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune ressource disponible dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
}
