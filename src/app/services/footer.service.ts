import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {


  private footerEnabled: boolean = true ;

  constructor() { }

  getFooterEnabled():boolean{
    return this.footerEnabled;
  }

  setFooterEnabled(status:boolean){
    this.footerEnabled = status;
  }


}
