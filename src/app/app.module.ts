import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TitleComponent } from './components/title/title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContentComponent } from './pages/content/content.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TitleComponent,
    CardsComponent,
    HomeComponent,
    ContentComponent,
    BigCardComponent,
    SmallCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
