import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me-page',
  standalone: true,
  imports: [],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css'
})
export class AboutMePageComponent {

  constructor(private title : Title, private meta : Meta){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title.setTitle('About-me');
    this.meta.updateTag({name:'description', content:'Bilal Mancer is a passionate computer engineer specializing in software development. Committed to optimizing development processes, he designs robust and high-performance solutions. His goal is to ensure the highest quality of software products while adhering to the highest standards of compliance and excellence'});
  }
}
