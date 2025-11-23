import { TestBed } from '@angular/core/testing';
import { SanityCmsService } from './sanity-cms.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment.prod';

describe('SanityCmsService', () => {
  let service: SanityCmsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SanityCmsService]
    });
    service = TestBed.inject(SanityCmsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get certifications', () => {
    const mockData = { result: [] };
    service.getCertifications().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(environment.API_CERTIFICATIONS);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get projects', () => {
    const mockData = { result: [] };
    service.getProjects().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(environment.API_PROJECTS);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get home page projects', () => {
    const mockData = { result: [] };
    service.getHomePageprojects().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(environment.API_HOME_PAGE_PROJECTS);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get socials', () => {
    const mockData = { result: [] };
    service.getSocials().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(environment.API_SOCIALS);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
