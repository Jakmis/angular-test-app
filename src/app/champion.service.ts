import { Injectable } from '@angular/core';
import { Champion } from './champion';
import { CHAMPIONS } from './mock-champions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  getChampions(): Observable<Champion[]>{
    const champions = of(CHAMPIONS);
    this.messageService.add('ChampionService: fetched heroes');
    return champions;
  }

  constructor(private messageService: MessageService) { }
}
