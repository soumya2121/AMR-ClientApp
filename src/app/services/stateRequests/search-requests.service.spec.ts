import { TestBed } from '@angular/core/testing';

import { SearchRequestsService } from './search-requests.service';

describe('SearchRequestsService', () => {
  let service: SearchRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
