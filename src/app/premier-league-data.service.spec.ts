import { TestBed } from '@angular/core/testing';

import { PremierLeagueDataService } from './premier-league-data.service';

describe('PremierLeagueDataService', () => {
  let service: PremierLeagueDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremierLeagueDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
