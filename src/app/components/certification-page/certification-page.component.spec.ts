import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationPageComponent } from './certification-page.component';
import { SanityCmsService } from '../../services/sanity-cms.service';
import { TranslateModule } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';

describe('CertificationPageComponent', () => {
  let component: CertificationPageComponent;
  let fixture: ComponentFixture<CertificationPageComponent>;
  let mockSanityCmsService: jasmine.SpyObj<SanityCmsService>;

  beforeEach(async () => {
    mockSanityCmsService = jasmine.createSpyObj('SanityCmsService', ['getCertifications']);
    mockSanityCmsService.getCertifications.and.returnValue(of({ result: [] }));

    await TestBed.configureTestingModule({
      imports: [CertificationPageComponent, TranslateModule.forRoot()],
      providers: [
        { provide: SanityCmsService, useValue: mockSanityCmsService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should fetch certifications on init', () => {
    const mockCertifications = [
      { id: '1', title: 'C1', issuingBody: 'IB1', date: 'D1', image: 'img1' },
      { id: '2', title: 'C2', issuingBody: 'IB2', date: 'D2', image: 'img2' }
    ];
    mockSanityCmsService.getCertifications.and.returnValue(of({ result: mockCertifications }));

    fixture.detectChanges();

    expect(component.certifications.length).toBe(2);
    expect(component.certifications[0].name).toBe('C1');
    expect(component.certifications[1].name).toBe('C2');
  });

  it('should handle error when fetching certifications', () => {
    spyOn(console, 'log');
    mockSanityCmsService.getCertifications.and.returnValue(throwError(() => new Error('Error fetching certifications')));

    fixture.detectChanges();

    expect(console.log).toHaveBeenCalled();
    expect(component.certifications.length).toBe(0);
  });

  describe('Modal', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should open modal with image link', () => {
      component.openModalPopin('test-link');
      expect(component.modalVisibility).toBeTrue();
      expect(component.imageLink).toBe('test-link');
    });

    it('should close modal', () => {
      component.modalVisibility = true;
      component.closeModalPopin();
      expect(component.modalVisibility).toBeFalse();
    });
  });
});
