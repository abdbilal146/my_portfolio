import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarList } from '../../models/nav-bar-list';
import { CourseContentComponent } from "./course-content/course-content.component";

@Component({
  selector: 'app-course-description',
  standalone: true,
  imports: [CommonModule, CourseContentComponent],
  templateUrl: './course-description.component.html',
  styleUrl: './course-description.component.css'
})
export class CourseDescriptionComponent {
  div: Array<NavBarList> = [
    {
      id : 1,
      value : "Contenu de Cours"
    },
    {
      id : 2,
      value : "Présentation"
    },
    {
      id : 3,
      value : "outils d'apprentissage"
    }
  ]
}