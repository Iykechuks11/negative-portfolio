import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  problem: string; // The "Why"
  contribution: string; // The "What you did"
  tags: string[];
  link?: string; // External URL
  isOpen?: boolean; // For the dropdown state
}

export interface Publication {
  id: number;
  title: string;
  publisher: string; // e.g., IEEE, personal blog, or University
  date: string;
  category: 'Whitepaper' | 'Research' | 'Article';
  abstract: string;
  link: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root', // This makes the service available everywhere
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Negative Portfolio',
      description:
        'A high-performance minimalist portfolio built for speed and technical storytelling.',
      problem:
        'Standard portfolios often hide the developer\'s "why" and focus only on the "what," leading to poor engagement from technical recruiters.',
      contribution:
        'Architected a custom Angular 19 standalone architecture with a "Negative" design system. Implemented reactive state management for UI toggles and optimized asset delivery for a sub-1s load time.',
      tags: ['Angular', 'Tailwind v4', 'TypeScript'],
      link: 'https://github.com/Iykechuks11/negative-portfolio',
      isOpen: false,
    },
    {
      id: 2,
      title: 'IT Consulting Reinke',
      description: 'A start-up company that provides automation services.',
      problem: 'Defunct appointment button. Non-responsive features and obsolete web contents.',
      contribution:
        'Implemented Calendly and LinkedIn recommendation widget by inline-embedding booking calendar directly into website and leveraging Reacts component/routing functionalities.',
      tags: ['React', 'JS', 'TS'],
      link: 'https://it-beratung-reinke.de/',
      isOpen: false,
    },
  ];

  getProjects() {
    return this.projects;
  }
}
