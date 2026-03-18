import { Component, inject, OnInit } from '@angular/core';
import { ProjectService, Project } from '../../services/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  // 1. Inject the service
  private projectService = inject(ProjectService);

  // 2. Create a variable to hold the subset of projects
  featuredProjects: Project[] = [];

  ngOnInit() {
    // 3. Get the data and take only the first 3
    this.featuredProjects = this.projectService.getProjects().slice(0, 3);
  }
}
