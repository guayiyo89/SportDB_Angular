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
import { EnglandComponent } from './league-list/england/england.component';
import { EuropaComponent } from './league-list/europa/europa.component';
import { WorldComponent } from './league-list/world/world.component';
import { SpainComponent } from './league-list/spain/spain.component';
import { GermanyComponent } from './league-list/germany/germany.component';
import { PortugalComponent } from './league-list/portugal/portugal.component';
import { FranceComponent } from './league-list/france/france.component';
import { ItaliaComponent } from './league-list/italia/italia.component';

@NgModule({
  declarations: [
    AppComponent,
    GamelistComponent,
    TeamsComponent,
    PlayerComponent,
    ImageSinFotoPipe,
    LeagueComponent,
    LeagueListComponent,
    EnglandComponent,
    EuropaComponent,
    WorldComponent,
    SpainComponent,
    GermanyComponent,
    PortugalComponent,
    FranceComponent,
    ItaliaComponent
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
