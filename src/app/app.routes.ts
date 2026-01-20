import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Project } from './services/project';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Publications } from './components/publications/publications';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'publications', component: Publications },
];
