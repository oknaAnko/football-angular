import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((response: any) => {
      // console.log('PRODUCT FETCHING', response.premierLeagueData);
      this.title = response.premierLeagueData.data.name;
      this.season = response.premierLeagueData.data.season;
      this.standings = response.premierLeagueData.data.standings;
      // console.log('PRODUCT FETCHED');
    });
  }
}
