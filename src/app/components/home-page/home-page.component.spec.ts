import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { TranslateLangService } from '../../services/translate-lang.service';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';
import { SanityCmsService } from '../../services/sanity-cms.service';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockTranslateLangService: jasmine.SpyObj<TranslateLangService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockCanonicalService: jasmine.SpyObj<CanonicalService>;
  let mockSanityCmsService: jasmine.SpyObj<SanityCmsService>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockMeta: jasmine.SpyObj<Meta>;

  beforeEach(async () => {
    mockTranslateLangService = jasmine.createSpyObj('TranslateLangService', ['']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockCanonicalService = jasmine.createSpyObj('CanonicalService', ['setCanonicaUrl']);
    mockSanityCmsService = jasmine.createSpyObj('SanityCmsService', ['getHomePageprojects', 'getSocials']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);
    mockMeta = jasmine.createSpyObj('Meta', ['updateTag', 'addTags']);

    // Setup default return values for observables
    mockSanityCmsService.getHomePageprojects.and.returnValue(of({ result: [] }));
    mockSanityCmsService.getSocials.and.returnValue(of({ result: [] }));

    await TestBed.configureTestingModule({
      imports: [
        HomePageComponent, // Standalone component
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: TranslateLangService, useValue: mockTranslateLangService },
        { provide: Router, useValue: mockRouter },
        { provide: CanonicalService, useValue: mockCanonicalService },
        { provide: SanityCmsService, useValue: mockSanityCmsService },
        { provide: Title, useValue: mockTitle },
        { provide: Meta, useValue: mockMeta }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Ignore unknown elements/attributes (like GSAP related if any issues)
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    // Note: detectChanges() triggers ngOnInit
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set title and meta tags', () => {
      fixture.detectChanges();
      expect(mockTitle.setTitle).toHaveBeenCalledWith('Acceuil');
      expect(mockMeta.updateTag).toHaveBeenCalled();
      expect(mockMeta.addTags).toHaveBeenCalled();
    });

    it('should set canonical url', () => {
      fixture.detectChanges();
      expect(mockCanonicalService.setCanonicaUrl).toHaveBeenCalledWith('https://bilalmancer.com');
    });

    it('should fetch projects and populate projects array', () => {
      const mockProjects = [
        { id: '1', name: 'P1', description: 'D1', image: 'img1', githubLink: 'link1' },
        { id: '2', name: 'P2', description: 'D2', image: 'img2', githubLink: 'link2' }
      ];
      mockSanityCmsService.getHomePageprojects.and.returnValue(of({ result: mockProjects }));

      fixture.detectChanges(); // Triggers ngOnInit

      expect(mockSanityCmsService.getHomePageprojects).toHaveBeenCalled();
      expect(component.projects.length).toBe(2);
      expect(component.projects[0].name).toBe('P1');
      expect(component.projects[1].name).toBe('P2');
    });

    it('should fetch socials and populate socialLink array', () => {
      const mockSocials = [
        { name: 'S1', url: 'url1' },
        { name: 'S2', url: 'url2' }
      ];
      mockSanityCmsService.getSocials.and.returnValue(of({ result: mockSocials }));

      fixture.detectChanges();

      expect(mockSanityCmsService.getSocials).toHaveBeenCalled();
      expect(component.socialLink.length).toBe(2);
      expect(component.socialLink[0].name).toBe('S1');
    });
  });

  describe('goToProjectPage', () => {
    it('should set loader to true and navigate after delay', fakeAsync(() => {
      fixture.detectChanges();
      component.goToProjectPage();
      
      expect(component.loader).toBeTrue();
      expect(mockRouter.navigate).not.toHaveBeenCalled(); // Should wait

      tick(2000); // Simulate 2s delay

      expect(mockRouter.navigate).toHaveBeenCalledWith(['projects']);
    }));
  });
});
