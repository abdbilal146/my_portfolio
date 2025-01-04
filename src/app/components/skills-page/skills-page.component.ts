import { Component } from '@angular/core';
import { Cards } from '../models/cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {
  cards : Array<Cards> = [
    {
      title: 'Front-End',
      first_category : 'Langages : HTML , CSS , JS , TS',
      second_category : 'Frameworks : Angular',
    },
    {
      title: 'Back-End',
      first_category : 'Langages: Java',
      second_category : 'Frameworks : Spring Boot'
    },
    {
      title: 'Automation Test',
      first_category : 'Langages : Java , Js , Ts , Python',
      second_category : 'Frameworks & Tools : Selenium , PlayWright , Cypress'
    },
    {
      title: 'Cloud',
      first_category : 'Cloud Computing : AWS',
      second_category : ''
    }
  ]

}
