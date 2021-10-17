import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Standings {
  note: {
    rank: number;
  };
  team: {
    abbreviation: string;
    displayName: string;
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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((response: any) => {
      this.title = response.premierLeagueData.data.name;
      this.season = response.premierLeagueData.data.season;
      this.standings = response.premierLeagueData.data.standings;
    });
  }
}
