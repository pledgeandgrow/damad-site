import { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  images?: string[];
  client: string;
  year: string;
  location: string;
  duration?: string;
  features?: string[];
  challenge?: string;
  solution?: string;
}

export interface ProjectCategory {
  name: string;
  icon: ReactNode;
  value: string;
}
