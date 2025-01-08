import { CommonModule } from '@angular/common';
import { Component, Input, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoCategory } from '../models/video-category';
import { NestedVideoArray } from '../models/nested-of-video-array';

@Component({
  selector: 'app-tuto-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tuto-page.component.html',
  styleUrl: './tuto-page.component.css'
})
export class TutoPageComponent {

  categories : Array<NestedVideoArray> = [
    {
      id: 1,
      name: "TypeScript",
      video: [
        {
          id: 1,
          name: 'Chapter 1',
          url:'https://www.youtube.com/embed/XDz0LstP9Ko?si=pXn9WU1-DEhxu79r'
        },
        {
          id: 2,
          name: 'Chapter 2',
          url:'https://www.youtube.com/embed/U7QBiqxcTYo?si=xLEeHs6C8lnBpieg'
        }
      ]
    },

    {
      id: 2,
      name: "Playwright",
      video: [
        {
          id: 1,
          name: 'Chapter 1',
          url:'https://www.youtube.com/embed/D9N3d3Kai58?si=uLzk14Q9p5FyxsP1'
        }
      ]
    }
  ]

  firstCategory: string = ''
  currentTutoId : number = 0 ;
  currendVideoId = 0 ;

  videoSectionEnabled: boolean = false;
  bnt_next_previousEnabled: boolean = false;
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
  showVideoSection(category:NestedVideoArray, currentTutoId:number):void{
      this.bnt_next_previousEnabled = true ;
      this.currentTutoId = currentTutoId-1;
      this.currendVideoId = 0;
      this.videoUrl = category.video[this.currendVideoId].url
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl)
      this.videoSectionEnabled = true; 
      
  }

  //this method to create caroussel

  getTheCurrentVideo(){
    return this.categories[this.currentTutoId].video[this.currendVideoId].url
  }

  nextVideo():void{

    if(this.currendVideoId < this.categories[this.currentTutoId].video.length -1){
      this.currendVideoId++
    }
    else{
      this.currendVideoId=0
    }
    this.videoUrl = this.categories[this.currentTutoId].video[this.currendVideoId].url;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl)

    console.log('Hello')

  }

  previousVideo() : void{
    if(this.currendVideoId > 0){
      this.currendVideoId--
    }
    else{
      this.currendVideoId = this.categories[this.currentTutoId].video.length-1
    }

    this.videoUrl = this.categories[this.currentTutoId].video[this.currendVideoId].url;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl)
  }

}
