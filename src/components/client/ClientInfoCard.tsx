'use client';

import { FaBuilding, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

interface ClientInfoCardProps {
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export default function ClientInfoCard({
  name,
  contactPerson,
  phone,
  email,
  address,
  city,
  postalCode,
  country
}: ClientInfoCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Informations client</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <FaBuilding className="h-5 w-5 text-steel-blue mt-0.5 mr-3" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{address}</p>
            <p className="text-sm text-gray-500">{postalCode} {city}, {country}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <FaUser className="h-5 w-5 text-steel-blue mr-3" />
          <span>{contactPerson}</span>
        </div>
        
        <div className="flex items-center">
          <FaPhone className="h-5 w-5 text-steel-blue mr-3" />
          <span>{phone}</span>
        </div>
        
        <div className="flex items-center">
          <FaEnvelope className="h-5 w-5 text-steel-blue mr-3" />
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}
