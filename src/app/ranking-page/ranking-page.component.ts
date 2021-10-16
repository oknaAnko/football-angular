import { Component, OnInit } from '@angular/core';

import { PremierLeagueDataService } from '../premier-league-data.service';

interface Logos {
  href: string;
}

interface Standings {
  note: {
    // color: string;
    // description: string;
    rank: number;
  };
  team: {
    abbreviation: string;
    displayName: string;
    logos: Logos[];
  };
}

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
})
export class RankingPageComponent implements OnInit {
  title: string;
  season: string;
  standings: Standings[];

  constructor(private premierLeagueData: PremierLeagueDataService) {}

  ngOnInit() {
    this.premierLeagueData.getData().subscribe((data) => {
      this.title = data.data.name;
      this.season = data.data.season;
      this.standings = data.data.standings;
      console.log('data', data);
    });
  }
}
