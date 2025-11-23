import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let routerEventsSubject: Subject<any>;
  let mockRouter: any;

  beforeEach(async () => {
    routerEventsSubject = new Subject<any>();
    mockRouter = {
      events: routerEventsSubject.asObservable(),
      navigate: jasmine.createSpy('navigate')
    };

    await TestBed.configureTestingModule({
      imports: [
        AppComponent, 
        RouterTestingModule, 
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my_portfolio' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my_portfolio');
  });

  it('should scroll to top on navigation end if not anchor link', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // triggers ngOnInit

    spyOn(window, 'scrollTo');

    routerEventsSubject.next(new NavigationEnd(1, '/test', '/test'));
    tick();

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  }));

  it('should NOT scroll to top if anchor link', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    spyOn(window, 'scrollTo');

    routerEventsSubject.next(new NavigationEnd(1, '/test#anchor', '/test#anchor'));
    tick();

    expect(window.scrollTo).not.toHaveBeenCalled();
  }));
});
