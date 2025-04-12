import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateLangService } from '../../services/translate-lang.service';
import { NgxTolgeeModule, TOLGEE_INSTANCE } from '@tolgee/ngx';
import type { Tolgee } from '@tolgee/web'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    public languageMenuVisibility: boolean = false;
    public isSpanCheckvisibleFR:boolean = true;
    public isSpanCheckvisibleENG:boolean = false;

    constructor(private router: Router, private translateService:TranslateLangService ){
      
    }

    @HostListener('document:click')
    onDocumentClick() {
    // Close the element if it's open and the click reaches the document
      if (this.languageMenuVisibility) {
        this.languageMenuVisibility = false;
      }
    }
    

    switchLanguage(lang:string):void{
      if(lang==='fr'){
        this.isSpanCheckvisibleFR = true;
        this.isSpanCheckvisibleENG = false;
        
        this.translateService.setTranslateLang(lang)
      }
      else if(lang==='en'){
        this.isSpanCheckvisibleFR = false;
        this.isSpanCheckvisibleENG = true;
        this.translateService.setTranslateLang(lang)
      }

      
     
      //console.log("current language is : " +this.translateService.getTranslateLang())
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
