import { TestBed } from '@angular/core/testing';

import { AgregarItemService } from './agregar-item.service';

describe('AgregarItemService', () => {
  let service: AgregarItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
