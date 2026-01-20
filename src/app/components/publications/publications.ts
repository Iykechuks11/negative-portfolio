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
      title: 'An Analysis of MITM Attack Vectors in Local Area Networks',
      publisher: 'Swingment Internal Research',
      date: 'Dec 2025',
      category: 'Whitepaper',
      abstract:
        'Exploring the psychological and technical vulnerabilities that lead to successful ARP poisoning in corporate environments.',
      link: '#',
      tags: ['Network Security', 'MITM'],
    },
    // Add more here...
  ];
}
