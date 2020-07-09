import { TestBed } from '@angular/core/testing';

import { CadastroCarrosService } from './cadastro-carros.service';

describe('CadastroCarrosService', () => {
  let service: CadastroCarrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroCarrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
