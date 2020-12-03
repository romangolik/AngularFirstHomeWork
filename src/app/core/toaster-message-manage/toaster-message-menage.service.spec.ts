import { TestBed } from '@angular/core/testing';

import { ToasterMessageMenageService } from './toaster-message-menage.service';

describe('ToasterMessageMenageService', () => {
  let service: ToasterMessageMenageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterMessageMenageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
