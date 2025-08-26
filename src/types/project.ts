import { ReactNode } from 'react';

export interface Project {
  id: number;
  image: string;
  alt: string;
}

export interface ProjectCategory {
  name: string;
  icon: ReactNode;
  value: string;
}
