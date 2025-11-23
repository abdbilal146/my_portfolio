import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsPageComponent } from './projects-page.component';
import { CanonicalService } from '../../services/canonical.service';
import { SanityCmsService } from '../../services/sanity-cms.service';
import { TranslateModule } from '@ngx-translate/core';
import { of, throwError } from 'rxjs';

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;
  let mockCanonicalService: jasmine.SpyObj<CanonicalService>;
  let mockSanityCmsService: jasmine.SpyObj<SanityCmsService>;

  beforeEach(async () => {
    mockCanonicalService = jasmine.createSpyObj('CanonicalService', ['setCanonicaUrl']);
    mockSanityCmsService = jasmine.createSpyObj('SanityCmsService', ['getProjects']);

    // Default mock return
    mockSanityCmsService.getProjects.and.returnValue(of({ result: [] }));

    await TestBed.configureTestingModule({
      imports: [ProjectsPageComponent, TranslateModule.forRoot()],
      providers: [
        { provide: CanonicalService, useValue: mockCanonicalService },
        { provide: SanityCmsService, useValue: mockSanityCmsService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should set canonical url on init', () => {
    fixture.detectChanges();
    expect(mockCanonicalService.setCanonicaUrl).toHaveBeenCalledWith('https://bilalmancer.com/projects');
  });

  it('should fetch projects on init', () => {
    const mockProjects = [
      { title: 'P1', image: 'img1', description: 'desc1', technologies: ['t1'], categories: ['c1'], githubLink: 'link1' },
      { title: 'P2', image: 'img2', description: 'desc2', technologies: ['t2'], categories: ['c2'], githubLink: 'link2' }
    ];
    mockSanityCmsService.getProjects.and.returnValue(of({ result: mockProjects }));

    fixture.detectChanges();

    expect(component.projects.length).toBe(2);
    expect(component.projects[0].title).toBe('P1');
    expect(component.projects[1].title).toBe('P2');
  });

  it('should handle error when fetching projects', () => {
    spyOn(console, 'log');
    mockSanityCmsService.getProjects.and.returnValue(throwError(() => new Error('Error fetching projects')));

    fixture.detectChanges();

    expect(console.log).toHaveBeenCalled();
    expect(component.projects.length).toBe(0);
  });
});
