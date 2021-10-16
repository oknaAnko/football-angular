import { Component, OnInit } from '@angular/core';

import { PremierLeagueDataService } from '../premier-league-data.service';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
})
export class RankingPageComponent implements OnInit {
  title: string;
  season: string;

  constructor(private premierLeagueData: PremierLeagueDataService) {}

  ngOnInit() {
    this.premierLeagueData.getData().subscribe(
      (data) => {
        this.title = data.data.name;
        this.season = data.data.season;
        console.log('data', data);
        console.log(data.data.name);
      }
      // (error: HttpErrorResponse) => {
      //     console.log('Błąd: ', error);
      // }
    );
  }
}
