import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { TOLGEE_INSTANCE } from '@tolgee/ngx';
import type { TolgeeInstance } from '@tolgee/core';
import { filter } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_portfolio';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      const isAnchorLink = url.includes('#');

      if (!isAnchorLink && typeof window !== 'undefined') {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }
    });
  }

}
