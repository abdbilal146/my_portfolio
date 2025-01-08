import { CommonModule } from '@angular/common';
import { Component, Input, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoCategory } from '../models/video-category';

@Component({
  selector: 'app-tuto-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tuto-page.component.html',
  styleUrl: './tuto-page.component.css'
})
export class TutoPageComponent {

  categoris: Array<VideoCategory> = [
    {
      id: 1,
      name: 'TypeScript',
      url:'https://www.youtube.com/embed/XDz0LstP9Ko?si=pXn9WU1-DEhxu79r'
    },
    {
      id: 2,
      name: 'Playwright',
      url:'https://www.youtube.com/embed/D9N3d3Kai58?si=iM1DPR1NRRGL_eVi'
    },
    {
      id: 3,
      name: 'TypeScript',
      url:'https://www.youtube.com/embed/XDz0LstP9Ko?si=pXn9WU1-DEhxu79r'
    },

  ]
  firstCategory: string = ''

  videoSectionEnabled: boolean = false;
  videoUrl: string = '';
  @Input() safeVideoUrl: SafeResourceUrl | undefined;
  
  constructor(private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl)
    ;//
    
  }


  // this methode to change the display depending on the categorie
  showVideoSection(category:VideoCategory):void{
      this.videoUrl = category.url
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl)
      this.videoSectionEnabled = true;
  }

  //this method to create caroussel

  currendVideoId = 0 ;

  
}
