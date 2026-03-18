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

    {
      id: 3,
      title: 'CodeWars Solutions',
      description: 'A link to my codewars profile showcasing my problem-solving skills and proficiency in multiple programming languages.',
      problem: '',
      contribution:
        '.',
      tags: ['Python', 'C'],
      link: 'https://www.codewars.com/users/Johnchampion',
      isOpen: false,
    },

    {
      id: 4,
      title: 'Euro AWS Gameday (16/03/2026)',
      description: 'A gamified learning experience where participants engage in simulated cyber attack scenarios to enhance their skills in cloud security, incident response, and threat hunting within an AWS environment.',
      problem: 'A series of simulated cyber attack scenarios designed to test and enhance participants\' skills in cloud security, incident response, and threat hunting within an AWS environment.',
      contribution:
        'Utilized AWS services, including VPC, CloudWatch, GuardDuty, and Systems Manager to monitor infrastructure and investigate threats.',
      tags: ['Python', 'C'],
      link: 'https://it-beratung-reinke.de/',
      isOpen: false,
    },

    {
      id: 5,
      title: 'Cloud-Native Database Utility (Python)',
      description: 'A command-line interface (CLI) utility for backing up any type of database.',
      problem: 'Inefficient database backup processes leading to data loss and increased storage costs.',
      contribution:
        'Compression functionality using gzip, encryption using AES-256, and seamless integration with AWS S3 for secure and efficient database backup management.',
      tags: ['Python', 'AWS S3', 'Docker', 'PostgreSQL'],
      link: 'https://it-beratung-reinke.de/',
      isOpen: false,
    },
  ];

  getProjects() {
    return this.projects;
  }
}
