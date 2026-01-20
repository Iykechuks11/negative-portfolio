import { Component, inject } from '@angular/core';
import { ProjectService, Project } from '../../services/project';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
  projects: Project[] = this.projectService.getProjects();
  toggleDetails(project: any) {
    project.isOpen = !project.isOpen;
  }
}
