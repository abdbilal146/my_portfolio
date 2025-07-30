import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { CertificationPageComponent } from './components/certification-page/certification-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'experience', component: ExperiencePageComponent},
    {path:'certifications', component: CertificationPageComponent},
    {path:'projects', component: ProjectsPageComponent }
];
