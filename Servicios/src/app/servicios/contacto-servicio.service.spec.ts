import { TestBed } from '@angular/core/testing';

import { ContactoServicioService } from './contacto-servicio.service';

describe('ContactoServicioService', () => {
  let service: ContactoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
