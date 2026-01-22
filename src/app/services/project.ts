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
      link: 'https://github.com/Iykechuks11/negative-portfolio', // Link to your repo
      isOpen: false,
    },
    // {
    //   id: 2,
    //   title: 'Secure AI Dashboard',
    //   description: 'A real-time monitoring interface for AI-driven security analytics.',
    //   problem:
    //     'Visualizing high-velocity security data often leads to browser bottlenecks and unreadable UI components.',
    //   contribution:
    //     'Leveraged RxJS streams to pipe real-time data efficiently. Integrated custom CSS-grid layouts to ensure data density remains readable on mobile devices.',
    //   tags: ['RxJS', 'Security', 'Data Viz'],
    //   link: 'https://github.com/your-username/ai-dashboard',
    //   isOpen: false,
    // },
  ];

  getProjects() {
    return this.projects;
  }
}
