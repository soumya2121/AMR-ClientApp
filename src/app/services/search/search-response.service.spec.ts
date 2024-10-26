import { TestBed } from '@angular/core/testing';

import { SearchResponseService } from './search-response.service';

describe('SearchResponseService', () => {
  let service: SearchResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
