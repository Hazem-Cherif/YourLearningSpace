import { TestBed } from '@angular/core/testing';

import { InscrirService } from './inscrir.service';

describe('InscrirService', () => {
  let service: InscrirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscrirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
