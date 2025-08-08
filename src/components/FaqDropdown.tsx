'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FaqDropdownProps {
  question: string;
  children: React.ReactNode;
}

export default function FaqDropdown({ question, children }: FaqDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      <button
        className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-[#2b3343]">{question}</h3>
        <span className="text-[#0046fe] transition-transform duration-300">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
