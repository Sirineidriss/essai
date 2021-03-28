import { TestBed } from '@angular/core/testing';

import { ServeururlsService } from './serveururls.service';

describe('ServeururlsService', () => {
  let service: ServeururlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeururlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
