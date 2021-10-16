import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PremierLeagueDataService {
  basePath = `https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc`;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.basePath);
  }
}
