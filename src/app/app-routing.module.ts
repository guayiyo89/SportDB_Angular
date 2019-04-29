import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { PlayerComponent } from './player/player.component';
import { LeagueComponent } from './league/league.component';
import { LeagueListComponent } from './league-list/league-list.component';

const routes: Routes = [
  {path: 'teams', component: GamelistComponent},
  {path: 'team/:id', component: TeamsComponent},
  {path: 'player/:id', component: PlayerComponent},
  {path: 'league/:id', component: LeagueComponent},
  {path: 'leagues', component: LeagueListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
