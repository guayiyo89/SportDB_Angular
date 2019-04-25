import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  jugador:any = {};
  carrera:any[] = [];
  logros:any[] = [];
  contrato:any = {};


  constructor(public _player: GameService, private _route: ActivatedRoute) { }

  ngOnInit() {

    let idTeam:string = "";
    this._route.params.pipe
      (map(params => params['id'])).subscribe(
        id => {
          console.log(id);

          this._player.getPlayer(id).subscribe(
            player => {              
              this.jugador = player[0];    
              idTeam = player[0].idTeam;
              console.log(idTeam);
              return idTeam         
            }
          )

          idTeam = this.jugador.idTeam;
          console.log(idTeam);

          this._player.getPlayerCareer(id).subscribe(
            career => {
              this.carrera = career;
              console.log(this.carrera);
            }
          )

          this._player.getPlayerHonours(id).subscribe(
            honours => {
              this.logros = honours;              
            }
          )

          this._player.getPlayerContract(id).subscribe(
            contracts => {
              this.contrato = contracts;
              console.log(this.contrato);              
            }
          )
          
        }
      )    
  }


}
