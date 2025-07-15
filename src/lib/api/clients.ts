import { supabase } from '@/lib/supabase';

export interface Client {
  id: string;
  slug: string;
  name: string;
  contact_person: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
  contract_type: string;
  contract_start: string;
  contract_end: string;
  created_at: string;
  updated_at: string;
}

export async function getClients() {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('name');
      
    if (error) {
      console.error('Error fetching clients:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception fetching clients:', error);
    return [];
  }
}

export async function getClientBySlug(slug: string) {
  try {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .eq('slug', slug)
      .single();
      
    if (error) {
      console.error(`Error fetching client with slug ${slug}:`, error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error(`Exception fetching client with slug ${slug}:`, error);
    return null;
  }
}

export async function getClientDevices(clientId: string) {
  try {
    const { data, error } = await supabase
      .from('devices')
      .select('*')
      .eq('client_id', clientId)
      .order('name');
      
    if (error) {
      console.error(`Error fetching devices for client ${clientId}:`, error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error(`Exception fetching devices for client ${clientId}:`, error);
    return [];
  }
}

export async function getClientInterventions(clientId: string) {
  try {
    const { data, error } = await supabase
      .from('interventions')
      .select('*, devices(name)')
      .eq('client_id', clientId)
      .order('scheduled_date', { ascending: false });
      
    if (error) {
      console.error(`Error fetching interventions for client ${clientId}:`, error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error(`Exception fetching interventions for client ${clientId}:`, error);
    return [];
  }
}

export async function getClientFinancials(clientId: string) {
  try {
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('client_id', clientId)
      .order('date', { ascending: false });
      
    if (error) {
      console.error(`Error fetching financials for client ${clientId}:`, error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error(`Exception fetching financials for client ${clientId}:`, error);
    return [];
  }
}

export async function getClientDocuments(clientId: string) {
  try {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .eq('client_id', clientId)
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error(`Error fetching documents for client ${clientId}:`, error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error(`Exception fetching documents for client ${clientId}:`, error);
    return [];
  }
}
