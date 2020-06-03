import { TestBed } from '@angular/core/testing';

import { InfiniteScrollPaginatorService } from './infinite-scroll-paginator.service';

describe('InfiniteScrollPaginatorService', () => {
  let service: InfiniteScrollPaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfiniteScrollPaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
