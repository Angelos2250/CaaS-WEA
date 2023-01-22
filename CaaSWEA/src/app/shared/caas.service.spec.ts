import { TestBed } from '@angular/core/testing';

import { CaasService } from './caas.service';

describe('CaasService', () => {
  let service: CaasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
