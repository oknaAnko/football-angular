import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PremierLeagueDataService } from './premier-league-data.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<any> {
  constructor(private premierLeagueData: PremierLeagueDataService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // console.log('Called Get data in resolver...', route);
    return this.premierLeagueData.getData().pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
