import { TestBed } from '@angular/core/testing';
import { TranslateLangService } from './translate-lang.service';
import { TranslateService } from '@ngx-translate/core';

describe('TranslateLangService', () => {
  let service: TranslateLangService;
  let mockTranslateService: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    mockTranslateService = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);
    // Mock currentLang property getter
    Object.defineProperty(mockTranslateService, 'currentLang', { get: () => 'fr' });

    TestBed.configureTestingModule({
      providers: [
        TranslateLangService,
        { provide: TranslateService, useValue: mockTranslateService }
      ]
    });
    service = TestBed.inject(TranslateLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set default lang to fr on construction', () => {
    expect(mockTranslateService.setDefaultLang).toHaveBeenCalledWith('fr');
  });

  it('should set translate lang', () => {
    service.setTranslateLang('en');
    expect(mockTranslateService.use).toHaveBeenCalledWith('en');
  });

  it('should get translate lang', () => {
    const lang = service.getTranslateLang();
    expect(lang).toBe('fr');
  });
});
