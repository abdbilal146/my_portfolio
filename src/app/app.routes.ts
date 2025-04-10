import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'experience', component: ExperiencePageComponent}
];
