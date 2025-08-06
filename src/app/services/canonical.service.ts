import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) { 
    this.renderer = this.rendererFactory.createRenderer(null, null)
  }

  setCanonicaUrl(url: string): void{
    const existingLink: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if(existingLink){
      existingLink.setAttribute('href', url);
    }
    else{
      const link:HTMLLIElement = this.renderer.createElement('link');
      link.setAttribute('rel','canonical');
      link.setAttribute('href',url);
      this.renderer.appendChild(this.document.head, link);
    }
  }


}
