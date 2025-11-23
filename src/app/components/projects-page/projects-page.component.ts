import { Component, OnInit } from '@angular/core';
import ProjteCard from '../models/project-card';
import { CommonModule } from '@angular/common';
import { CanonicalService } from '../../services/canonical.service';
import { SanityCmsService } from '../../services/sanity-cms.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent implements OnInit{


  public projects : Array<ProjteCard> = []

  private url = 'https://bilalmancer.com/projects'

  constructor(private canonicalService: CanonicalService, private readonly sanityCmsService: SanityCmsService){}

  ngOnInit(){
    this.canonicalService.setCanonicaUrl(this.url)
    this.sanityCmsService.getProjects().subscribe({
      next:(data:any)=>{
        const result = data.result
        result.forEach((project:any)=>{
          this.projects.push({
            title:project.title,
            imageUrl:project.image,
            description:project.description,
            technologies:project.technologies,
            categories:project.categories,
            githubRepo:project.githubLink
          })
        })
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }

}
