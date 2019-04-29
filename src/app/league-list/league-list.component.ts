import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html'
})
export class LeagueListComponent implements OnInit {

  constructor(private _route: ActivatedRoute, public _league: GameService) { }

  ngOnInit() {
  }

}
