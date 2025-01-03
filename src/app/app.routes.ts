import { Routes } from '@angular/router';
import { SkillsPageComponent } from './components/skills-page/skills-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path: 'skills', component: SkillsPageComponent },
    {path:'contact-me', component: ContactPageComponent}
];
