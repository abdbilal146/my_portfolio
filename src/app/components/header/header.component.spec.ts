import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { TranslateLangService } from '../../services/translate-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockTranslateLangService: jasmine.SpyObj<TranslateLangService>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockTranslateLangService = jasmine.createSpyObj('TranslateLangService', ['setTranslateLang', 'getTranslateLang']);

    await TestBed.configureTestingModule({
      imports: [HeaderComponent, TranslateModule.forRoot()],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: TranslateLangService, useValue: mockTranslateLangService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Language Switching', () => {
    it('should switch to French', () => {
      component.switchLanguage('fr');
      expect(component.isSpanCheckvisibleFR).toBeTrue();
      expect(component.isSpanCheckvisibleENG).toBeFalse();
      expect(mockTranslateLangService.setTranslateLang).toHaveBeenCalledWith('fr');
    });

    it('should switch to English', () => {
      component.switchLanguage('en');
      expect(component.isSpanCheckvisibleFR).toBeFalse();
      expect(component.isSpanCheckvisibleENG).toBeTrue();
      expect(mockTranslateLangService.setTranslateLang).toHaveBeenCalledWith('en');
    });
  });

  describe('Mobile Menu', () => {
    it('should open mobile menu', () => {
      component.isVisibleMobileMenuOpenBtn = true;
      component.openMobileMenu();
      expect(component.isVisibleMobileMenu).toBeTrue();
      expect(component.isVisibleMobileMenuOpenBtn).toBeFalse();
      expect(component.isVisibleMobileMenuCloseBtn).toBeTrue();
    });

    it('should close mobile menu', () => {
      component.isVisibleMobileMenuOpenBtn = false;
      component.openMobileMenu();
      expect(component.isVisibleMobileMenu).toBeFalse();
      expect(component.isVisibleMobileMenuOpenBtn).toBeTrue();
      expect(component.isVisibleMobileMenuCloseBtn).toBeFalse();
    });
  });

  describe('Language Menu', () => {
    it('should open language menu', () => {
      component.openLanguageMenu();
      expect(component.languageMenuVisibility).toBeTrue();
    });

    it('should close language menu', () => {
      component.closeLanguageMenu();
      expect(component.languageMenuVisibility).toBeFalse();
    });

    it('should close language menu on document click if open', () => {
      component.languageMenuVisibility = true;
      component.onDocumentClick();
      expect(component.languageMenuVisibility).toBeFalse();
    });
  });

  describe('Navigation', () => {
    it('should navigate to experience', () => {
      component.goToExperiencePage();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['experience']);
    });

    it('should navigate to certifications', () => {
      component.goToCertificationsPage();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['certifications']);
    });

    it('should navigate to skills', () => {
      component.goToSkillsPage();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['skills']);
    });

    it('should navigate to home', () => {
      component.goToHomePage();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['']);
    });

    it('should navigate to contact', () => {
      component.goToContactPage();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['contact-me']);
    });

    it('should navigate to about me', () => {
      component.goToAboutMePage();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['about-me']);
    });
  });
});
