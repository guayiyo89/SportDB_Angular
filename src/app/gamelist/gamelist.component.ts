import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  public termino:string = '';

  constructor(public _gamelist:GameService) { }

  buscaTeam(){

    if(this.termino.length == 0){
  		return;
  	}

    this._gamelist.searchTeam(this.termino).subscribe(
      teams => {
        console.log(teams);
      }
    );

  }

  ngOnInit() {
    console.log('Yeah!');
    
  }

}
