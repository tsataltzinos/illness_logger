import { TestBed } from '@angular/core/testing';

import { MiscDataService } from './misc-data.service';

describe('MiscDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiscDataService = TestBed.get(MiscDataService);
    expect(service).toBeTruthy();
  });
});
