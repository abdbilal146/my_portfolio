import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateLangService {

  public translate = inject(TranslateService);
  constructor() { 
    this.translate.setDefaultLang('fr')
  }

  //this method to set the current language 
  setTranslateLang(lang:string){
    this.translate.use(lang)
  }

  getTranslateLang(){
    return this.translate.currentLang;
  }
}
