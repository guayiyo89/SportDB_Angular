import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './services/game.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GamelistComponent } from './gamelist/gamelist.component';
import { FormsModule } from '@angular/forms';
import { TeamsComponent } from './teams/teams.component';
import { PlayerComponent } from './player/player.component';
import { ImageSinFotoPipe } from './pipes/image-sin-foto.pipe';
import { LeagueComponent } from './league/league.component';
import { LeagueListComponent } from './league-list/league-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GamelistComponent,
    TeamsComponent,
    PlayerComponent,
    ImageSinFotoPipe,
    LeagueComponent,
    LeagueListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
