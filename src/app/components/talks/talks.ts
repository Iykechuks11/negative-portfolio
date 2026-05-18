import { Component } from '@angular/core';

interface Talk {
  title: string;
  venue: string;
  date: string;
  format: string;
  summary: string;
  tags: string[];
  link?: string;
}

@Component({
  selector: 'app-talks',
  imports: [],
  templateUrl: './talks.html',
  styleUrl: './talks.css',
})
export class Talks {
  talks: Talk[] = [
    {
      title: 'Applied Cyber Security Research',
      venue: 'Selected presentations and technical talks',
      date: 'Coming soon',
      format: 'Talk',
      summary:
        'A space for conference talks, thesis presentations, seminars, demos, and security research walkthroughs.',
      tags: ['Cybersecurity', 'Research', 'Presentations'],
    },
  ];
}
