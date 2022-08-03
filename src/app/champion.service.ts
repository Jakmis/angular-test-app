import { Injectable } from '@angular/core';
import { Champion } from './champion';
import { CHAMPIONS } from './mock-champions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getChampions(): Observable<Champion[]> {
    const champions = of(CHAMPIONS);
    this.messageService.add('ChampionService: fetched heroes');
    return champions;
  }
  getChampion(id: number): Observable<Champion> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const champion = CHAMPIONS.find(h => h.id === id)!;
    this.messageService.add(`ChampionService: fetched hero id=${id}`);
    return of(champion);
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
