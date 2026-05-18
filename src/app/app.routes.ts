import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Publications } from './components/publications/publications';
import { Talks } from './components/talks/talks';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'publications', component: Publications },
  { path: 'talks', component: Talks },
  { path: '**', redirectTo: '' },
];
