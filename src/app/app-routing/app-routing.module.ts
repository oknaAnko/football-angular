import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingPageComponent } from '../ranking-page/ranking-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'ranking',
    component: RankingPageComponent,
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
