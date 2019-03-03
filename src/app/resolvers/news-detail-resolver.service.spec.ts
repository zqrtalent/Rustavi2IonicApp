import { TestBed } from '@angular/core/testing';

import { NewsDetailResolverService } from './news-detail-resolver.service';

describe('NewsDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsDetailResolverService = TestBed.get(NewsDetailResolverService);
    expect(service).toBeTruthy();
  });
});
