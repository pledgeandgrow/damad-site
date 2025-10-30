// Helper functions for formatting form data
// These are used by API routes that send data to FormSubmit.co

export function getServiceName(serviceCode: string): string {
  switch (serviceCode) {
    case 'installation': return 'Installation';
    case 'modernisation': return 'Modernisation';
    case 'maintenance': return 'Maintenance';
    case 'depannage': return 'Dépannage';
    case 'audit': return 'Audit';
    case 'other': return 'Autre';
    default: return serviceCode;
  }
}

export function getBuildingTypeName(buildingCode: string): string {
  switch (buildingCode) {
    case 'residential': return 'Résidentiel';
    case 'commercial': return 'Commercial';
    case 'industrial': return 'Industriel';
    case 'public': return 'Établissement public';
    case 'other': return 'Autre';
    default: return buildingCode;
  }
}

export function getServiceTypeForDevis(serviceType: string): string {
  switch (serviceType) {
    case 'installation': return 'Installation nouvelle';
    case 'modernisation': return 'Modernisation';
    case 'maintenance': return 'Contrat de maintenance';
    case 'depannage': return 'Dépannage';
    default: return serviceType || 'Non spécifié';
  }
}

export function getBuildingTypeForDevis(buildingType: string): string {
  switch (buildingType) {
    case 'residential': return 'Résidentiel';
    case 'commercial': return 'Commercial';
    case 'industrial': return 'Industriel';
    case 'public': return 'Établissement public';
    case 'other': return 'Autre';
    default: return buildingType || 'Non spécifié';
  }
}

export function formatDates(dates: string[] | string): string {
  // Handle both array and string inputs
  if (Array.isArray(dates)) {
    return dates.join(', ');
  }
  // If it's already a string, return as-is
  return dates || 'Non spécifié';
}

export function formatTime(time: string): string {
  return time || 'Non spécifiée';
}
