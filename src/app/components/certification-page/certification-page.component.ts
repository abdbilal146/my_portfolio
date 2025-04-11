import { Component } from '@angular/core';
import { Certification } from '../models/certification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certification-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification-page.component.html',
  styleUrl: './certification-page.component.css'
})
export class CertificationPageComponent {

  public certifications:Array<Certification> = [
    {
      id:1,
      name:'Programmation Java : Résoudre des problèmes avec des logiciels',
      issuingBody:'Coursera / Duke University',
      date:'15 Avril 2023',
      imageLink:'assets/2025-04-11_11h01_17.png'
    },
    {
      id:2,
      name:'Programmation avec JavaScript',
      issuingBody:'Coursera / Meta',
      date:'04 Octobre 2024',
      imageLink:'assets/2025-04-11_10h52_53.png'
    },
  ];
  public modalVisibility:boolean = false;
  public imageLink: string = '';

  closeModalPopin():void{
    this.modalVisibility = false;
  }

  openModalPopin(link:string):void{
    this.imageLink = link;
    this.modalVisibility = true;
  }
}
