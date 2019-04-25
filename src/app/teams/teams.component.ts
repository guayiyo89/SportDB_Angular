import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

	equipo: any = {};
	jugadores: any[] = [];
	resultados: any[] = [];
	proximos: any[] = [];

  constructor(public _team:GameService, private _route:ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params.pipe
  		(map(params=>params['id']))
  		.subscribe(
  		id=>{
				console.log(id);
				
  			this._team.showTeam(id).subscribe(
  				equipo => {
					console.log(equipo);
  					this.equipo = equipo[0]; //asigno el artista del id al objeto artista vacio
  				}
				);
				//el id lo obtiene del map
			this._team.getPlayerbyTeam(id).subscribe(
				jugadores => {
					console.log(jugadores);
					this.jugadores = jugadores;
				}
			)

			this._team.getLastEventbyTeam(id).subscribe(
				lastEvents => {
					console.log(lastEvents);
					this.resultados = lastEvents;					
				}
			)

			this._team.getNextEventbyTeam(id).subscribe(
				nextEvents => {
					console.log(nextEvents);
					
					this.proximos = nextEvents;
				}
			)

		}
		)
	}
	
	

}
