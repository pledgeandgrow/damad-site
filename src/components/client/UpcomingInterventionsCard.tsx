'use client';

import Link from 'next/link';
import { FaTools, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

interface Intervention {
  id: string;
  type: 'maintenance' | 'repair';
  date: string;
  time: string;
  deviceName: string;
}

interface UpcomingInterventionsCardProps {
  interventions: Intervention[];
  clientSlug: string;
}

export default function UpcomingInterventionsCard({
  interventions,
  clientSlug
}: UpcomingInterventionsCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Interventions à venir</h2>
      {interventions.length === 0 ? (
        <p className="text-gray-500">Aucune intervention planifiée.</p>
      ) : (
        <div className="space-y-4">
          {interventions.map((intervention) => (
            <div key={intervention.id} className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="mr-4">
                {intervention.type === 'maintenance' ? (
                  <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <FaTools className="h-5 w-5" />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                    <FaExclamationTriangle className="h-5 w-5" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">
                  {intervention.type === 'maintenance' ? 'Maintenance' : 'Réparation'} - {intervention.deviceName}
                </h3>
                <div className="mt-1 flex items-center text-xs text-gray-500">
                  <FaCalendarAlt className="mr-1" />
                  {intervention.date}, {intervention.time}
                </div>
              </div>
              <Link 
                href={`/client/${clientSlug}/interventions/${intervention.id}`}
                className="text-steel-blue hover:text-blue-700 text-sm font-medium"
              >
                Détails
              </Link>
            </div>
          ))}
          <div className="pt-2">
            <Link 
              href={`/client/${clientSlug}/interventions`}
              className="text-sm text-steel-blue hover:text-blue-700 font-medium"
            >
              Voir toutes les interventions →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
