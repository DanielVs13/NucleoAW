import { TestBed } from '@angular/core/testing';

import { LibrosService } from './vehiculos.service';

describe('LibrosService', () => {
  let service: LibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});