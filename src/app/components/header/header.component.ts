import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    public languageMenuVisibility: boolean = false;
    public translate = inject(TranslateService);
   

    constructor(private router: Router){
      this.translate.setDefaultLang('fr');
      this.translate.use('fr')
    }

    @HostListener('document:click')
    onDocumentClick() {
    // Close the element if it's open and the click reaches the document
      if (this.languageMenuVisibility) {
        this.languageMenuVisibility = false;
      }
    }
    

    switchLanguage(lang:string):void{
      this.translate.use(lang)
    }

    openLanguageMenu():void{
      this.languageMenuVisibility = true;
    }
    closeLanguageMenu():void{
      this.languageMenuVisibility = false;
    }

    goToExperiencePage():void{
      this.router.navigate(['experience'])
    }

    goToCertificationsPage():void{
      this.router.navigate(['certifications'])
    }

    goToSkillsPage():void{
      this.router.navigate(['skills'])
    }

    goToHomePage():void{
      this.router.navigate([''])
    }

    goToContactPage(){
      this.router.navigate(['contact-me'])
    }

    goToAboutMePage():void{
      this.router.navigate(['about-me'])
    }
}
