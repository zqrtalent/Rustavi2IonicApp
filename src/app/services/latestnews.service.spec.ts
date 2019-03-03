import { TestBed } from '@angular/core/testing';

import { LatestnewsService } from './latestnews.service';

describe('LatestnewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestnewsService = TestBed.get(LatestnewsService);
    expect(service).toBeTruthy();
  });
});
