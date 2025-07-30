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
      imageUrl: "assets/0_5dVwWHWX-Nz96rzY.png",
      description : "",
      technologies: ['Dart', 'Flutter'],
      categories : ['Mobile', 'Android', 'IOS'],
      githubRepo: "https://github.com/abdbilal146/wordhurdle"

    },
    {
      title : "Visit Card App",
      imageUrl: "assets/0_5dVwWHWX-Nz96rzY.png",
      description : "",
      technologies: ['Dart', 'Flutter'],
      categories : ['Mobile', 'Android', 'IOS'],
      githubRepo: "https://github.com/abdbilal146/vscard"

    },
    {
      title : "Earthquake App",
      imageUrl: "assets/0_5dVwWHWX-Nz96rzY.png",
      description : "",
      technologies: ['Dart', 'Flutter', 'USGS API'],
      categories : ['Mobile', 'Android', 'IOS'],
      githubRepo: "https://github.com/abdbilal146/earthquake-app"

    }
  ]

}
