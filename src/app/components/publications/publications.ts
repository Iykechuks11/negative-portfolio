import { Component } from '@angular/core';
import { Publication } from '../../services/project';

@Component({
  selector: 'app-publications',
  imports: [],
  templateUrl: './publications.html',
  styleUrl: './publications.css',
})
export class Publications {
  publications: Publication[] = [
    {
      id: 1,
      title: 'Algorithm for Key Transparency with Transparent Logs',
      publisher: 'Open Research Europe',
      date: '2024',
      category: 'Article',
      abstract:
        'The research employs simulated experiments to systematically measure and analyze key operational metrics such as insertion and verification times...',
      link: 'https://open-research-europe.ec.europa.eu/articles/4-163',
      tags: ['Cryptography', 'Transparent Logs'],
    },
    {
      id: 2,
      title: 'Detecting Obfuscated Malware on Windows Using Ensemble Learning Methods',
      publisher: 'Computer Science and Automation',
      date: '2025',
      category: 'Article',
      abstract:
        'In the era of the internet and smart devices, malware detection has become a crucial factor for system security...',
      link: 'https://ia.spcras.ru/index.php/sp/article/view/16592',
      tags: ['Malware Detection', 'Machine Learning, Cybersecurity'],
    },
    {
      id: 3,
      title: 'An Analysis of MITM Attack Vectors in Local Area Networks',
      publisher: 'Swingment Internal Research',
      date: '2026',
      category: 'Whitepaper',
      abstract:
        'Exploring the psychological and technical vulnerabilities that lead to successful ARP poisoning in corporate environments.',
      link: 'https://swingment.hashnode.dev/',
      tags: ['Network Security', 'MITM'],
    },
    // Add more here...
  ];
}
