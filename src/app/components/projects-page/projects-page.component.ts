import { Component } from '@angular/core';
import ProjteCard from '../models/project-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {


  public projects : Array<ProjteCard> = [
    {
      title : "Word Hurdle",
      imageUrl: "assets/wordle_game_screen.png",
      description : "",
      technologies: ['Dart', 'Flutter'],
      categories : ['Mobile', 'Android', 'IOS'],
      githubRepo: "https://github.com/abdbilal146/wordhurdle"

    },
    {
      title : "Visit Card App",
      imageUrl: "assets/visit_card_screen.png",
      description : "",
      technologies: ['Dart', 'Flutter'],
      categories : ['Mobile', 'Android', 'IOS'],
      githubRepo: "https://github.com/abdbilal146/vscard"

    },
    {
      title : "Earthquake App",
      imageUrl: "assets/earthquake_app_screen.png",
      description : "",
      technologies: ['Dart', 'Flutter', 'USGS API'],
      categories : ['Mobile', 'Android', 'IOS'],
      githubRepo: "https://github.com/abdbilal146/earthquake-app"

    },
    {
      title : "Playwright Costum Report",
      imageUrl: "assets/earthquake_app_screen.png",
      description : "",
      technologies: ['TypeScript', 'Playwright'],
      categories : ['Test', 'Automation'],
      githubRepo: "https://github.com/abdbilal146/earthquake-app"

    }
  ]

}
