import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routes.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoinComponent } from './components/coin/coin.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { GradeCoinComponent } from './components/grade-coin/grade-coin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    CoinComponent,
    AboutMeComponent,
    GradeCoinComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
