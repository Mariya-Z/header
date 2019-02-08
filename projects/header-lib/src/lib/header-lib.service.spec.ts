import { TestBed } from '@angular/core/testing';

import { HeaderLibService } from './header-lib.service';

describe('HeaderLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderLibService = TestBed.get(HeaderLibService);
    expect(service).toBeTruthy();
  });
});
