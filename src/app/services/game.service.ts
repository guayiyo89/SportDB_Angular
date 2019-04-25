import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  team: any;
  teamlist: any[] = [];
  playerlistTeam: any [] = [];
  game: any;

  baseUrl:string = 'https://www.thesportsdb.com/api/v1/json';

  constructor(private http:HttpClient) { }

  searchTeam(termino:string){
    let url = `${this.baseUrl}/1/searchteams.php?t=${termino}&s=Soccer`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        this.teamlist = resp.teams;
        return this.teamlist;
      })
    )
  }

  showTeam(id:string){
    let url = `${this.baseUrl}/1/lookupteam.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        this.team = resp.teams;
        return this.team;
      })
    )
  }

  getPlayerbyTeam(id:string){
    let url = `${this.baseUrl}/1/lookup_all_players.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.player;
      })
    )
  }

  getNextEventbyTeam(id:string){
    let url = `${this.baseUrl}/1/eventsnext.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.events;
      })
    )
  }

  getLastEventbyTeam(id:string){
    let url = `${this.baseUrl}/1/eventslast.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.results;
      })
    )
  }

  // Ahora comienzo con datos de jugadores

  getPlayer(id:string){
    let url = `${this.baseUrl}/1/lookupplayer.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.players;
      })
    )
  }

  getPlayerCareer(id:string){
    let url = `${this.baseUrl}/1/lookupformerteams.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.formerteams;
      })
    )
  }

  getPlayerHonours(id:string){
    let url = `${this.baseUrl}/1/lookuphonors.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.honors;
      })
    )
  }

  getPlayerContract(id:string){
    let url = `${this.baseUrl}/1/lookupcontracts.php?id=${id}`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.contracts[0];
      })
    )
  }

  //Obtengo Las Ligas

  getLeagueList(){
    let url = `${this.baseUrl}/1/all_leagues.php?&s=Soccer`;
    return this.http.get(url).pipe(
      map((resp:any) => {
        return resp.leagues;
      })
    )
  }


}
