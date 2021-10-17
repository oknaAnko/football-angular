import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingPageComponent } from '../ranking-page/ranking-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { DataResolverService } from '../data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'ranking',
    component: RankingPageComponent,
    resolve: { premierLeagueData: DataResolverService },
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
