import { TestBed } from '@angular/core/testing';

import { InputFormService } from './input-form.service';

describe('InputFormService', () => {
  let service: InputFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
