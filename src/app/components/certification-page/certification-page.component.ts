import { Component } from '@angular/core';
import { Certification } from '../models/certification';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certification-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certification-page.component.html',
  styleUrl: './certification-page.component.css'
})
export class CertificationPageComponent {

 public certifications:Array<Certification> = [
    {
      id:1,
      name:'java1_course_name',
      issuingBody:'Coursera / Duke University',
      date:'15 Avril 2023',
      imageLink:'assets/2025-04-11_11h01_17.png'
    },
    {
      id:2,
      name:'java_script_course_name',
      issuingBody:'Coursera / Meta',
      date:'04 Octobre 2024',
      imageLink:'assets/2025-04-11_10h52_53.png'
    },
    {
      id:3,
      name:'flutter_course_name',
      issuingBody:'Linkedin',
      date: '15 Janvier 2024',
      imageLink:'assets/2025-04-11_21h37_42.png'
    },
    {
      id:4,
      name:'version_control_course_name',
      issuingBody:'Coursera / Meta',
      date: '13 Avril 2025',
      imageLink:'assets/version_control_meta.png'
    },
    {
      id:5,
      name:'foundation_of_cybersecurity_course_name',
      issuingBody:'Coursera / Google',
      date: '27 Juin 2024',
      imageLink:'assets/foundations_of_cybersecurity.png'
    }
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


