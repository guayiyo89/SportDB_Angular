import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-germany',
  templateUrl: './germany.component.html'
})
export class GermanyComponent implements OnInit {

  leagues:any[] = [];

  constructor(public _route: ActivatedRoute, public _league: GameService) { }

  ngOnInit() {
    this._league.getLeagueList('Germany').subscribe(
      (england:any) => {
        this.leagues = england;
        console.log(this.leagues);
        
      }
    )
  }

}
