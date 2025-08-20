import { ReactNode } from 'react';

export interface Project {
  id: number;
  image: string;
}

export interface ProjectCategory {
  name: string;
  icon: ReactNode;
  value: string;
}
