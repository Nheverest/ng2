import { TestBed, inject } from '@angular/core/testing';

import { FormObserverService } from './form-observer.service';

describe('FormObserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormObserverService]
    });
  });

  it('should be created', inject([FormObserverService], (service: FormObserverService) => {
    expect(service).toBeTruthy();
  }));
});
