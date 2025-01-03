import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    constructor(private router: Router){}

    goToSkillsPage():void{
      this.router.navigate(['skills'])
    }

    goToHomePage():void{
      this.router.navigate([''])
    }

    goToContactPage(){
      this.router.navigate(['contact-me'])
    }
}
