"use client";

import { useState } from 'react';
import { FaTicketAlt, FaPlus } from 'react-icons/fa';
import SupportModalTicket from './SupportModalTicket';

export default function SupportTicketButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="inline-flex items-center justify-center px-6 py-3 bg-[#2b3343] text-white font-medium rounded-lg hover:bg-[#3d4759] transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <FaPlus className="mr-2" />
        Créer un ticket
      </button>
      
      <SupportModalTicket isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
