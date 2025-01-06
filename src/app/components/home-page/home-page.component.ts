import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private title:Title, private meta:Meta){}


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle('Acceuil');
    this.meta.updateTag({name:'description', content:'Hello , my name is Abd-ElFetah (Bilal) Mancer, this is my portfolio'});
    this.meta.addTags([
      {name:'keywords', content:'portfolio, web developer, angular, frontend'},
      {name:'author',content:'Bilal Mancer'},
      {property:'og:url', content:'https://mancerbilal.netlify.app/'}, 
      {name:'google-site-verification',content:'mPmHyWfMqcaDuddfT_Kb9PHF8jF0eSM4wDUB2MAsGs0'}
    ])
    
  }
}
