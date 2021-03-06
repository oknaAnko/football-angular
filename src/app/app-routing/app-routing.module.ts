import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    loadChildren: () =>
      import('../ranking-page/ranking-page.module').then(
        (m) => m.RankingPageModule
      ),
    resolve: { premierLeagueData: DataResolverService },
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
