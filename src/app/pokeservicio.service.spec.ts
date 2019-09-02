import { TestBed } from '@angular/core/testing';

import { PokeservicioService } from './pokeservicio.service';

describe('PokeservicioService', () => {
  let service: PokeservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(PokeservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
