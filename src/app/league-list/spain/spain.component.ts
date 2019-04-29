import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html'
})
export class SpainComponent implements OnInit {

  leagues:any[] = [];

  constructor(public _route: ActivatedRoute, public _league: GameService) { }

  ngOnInit() {
    this._league.getLeagueList('England').subscribe(
      (england:any) => {
        this.leagues = england;
        console.log(this.leagues);
        
      }
    )
  }

}
