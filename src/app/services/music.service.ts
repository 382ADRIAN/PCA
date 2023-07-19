import { Injectable } from '@angular/core';
import * as listArtists from "./artist.json"
@Injectable({
  providedIn: 'root'
})
export class MusicService {
  urlServer = "https://musicback.fly.dev";
  constructor() { }

  getArtists(){
    return fetch(`${this.urlServer}/artists`).then(
      response => response.json()
    );
  }

  getArtistsFromJson(){
    return listArtists;
  }
  getArtistsTracks(artist_id: number){
    return fetch(`${this.urlServer}/tracks/artist/${artist_id}`).then(
      response => response.json()
    );
  }
}