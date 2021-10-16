import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RankingPageComponent } from './ranking-page/ranking-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ErrorPageComponent,
    RankingPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
