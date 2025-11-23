import { Component, OnInit } from '@angular/core';
import { Certification } from '../models/certification';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SanityCmsService } from '../../services/sanity-cms.service';

@Component({
  selector: 'app-certification-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './certification-page.component.html',
  styleUrl: './certification-page.component.css'
})
export class CertificationPageComponent implements OnInit {

  public certifications:Array<Certification> = [];
  public modalVisibility:boolean = false;
  public imageLink: string = '';

  constructor(private readonly sanityCmsService:SanityCmsService){}

  
  ngOnInit(): void {
    this.sanityCmsService.getCertifications().subscribe({
      next:(data:any)=>{
        const result: any[] = data.result;

        result.forEach((certification:any)=>{
          this.certifications.push({
            id:certification.id,
            name:certification.title,
            issuingBody:certification.issuingBody,
            date:certification.date,
            imageLink:certification.image
          })
        })
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  closeModalPopin():void{
    this.modalVisibility = false;
  }

  openModalPopin(link:string):void{
    this.imageLink = link;
    this.modalVisibility = true;
  }

}


