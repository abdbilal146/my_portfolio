import { TestBed } from '@angular/core/testing';

import { SanityCmsService } from './sanity-cms.service';

describe('SanityCmsService', () => {
  let service: SanityCmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanityCmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
