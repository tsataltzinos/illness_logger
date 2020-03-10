import { TestBed } from '@angular/core/testing';

import { Admobfree.Service.TsService } from './admobfree.service.ts.service';

describe('Admobfree.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Admobfree.Service.TsService = TestBed.get(Admobfree.Service.TsService);
    expect(service).toBeTruthy();
  });
});
