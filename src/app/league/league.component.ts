import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html'
})
export class LeagueComponent implements OnInit {

  tablaLiga:any[] = [];
  liga:any = {};
  fixture = 1;
  jornada:any[] = [];
  equipos:any[] = [];
  resultados:any[] = [];

  constructor(private _route: ActivatedRoute, public _league:GameService) { }

  ngOnInit() {
    this._route.params.pipe
      (map(params => params['id'])).subscribe(
        id => {
          this._league.getLeagueTable(id,1819).subscribe(
            (tabla:any[]) => {
              this.tablaLiga = tabla;
              console.log(this.tablaLiga);              
            }
          )

          this._league.getLeague(id).subscribe(
            (liga:any) => {
              this.liga = liga;
              console.log(this.liga);              
            }
          )

          this._league.getFixtureLeague(id,1819,this.fixture).subscribe(
            (fecha:any) => {
              this.jornada = fecha;
              console.log(this.jornada);              
            }
          )

          this._league.getLeagueTeams(id).subscribe(
            (teams:any) => {
              this.equipos = teams;
              console.log(this.equipos);              
            }
          )

          this._league.getResultsbyLeague(id).subscribe(
            (events:any) => {
              this.resultados = events;
              console.log(this.resultados);
              
            }
          )

        }
      )
  }

}
