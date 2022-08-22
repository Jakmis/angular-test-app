import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Champion[] = [];

  constructor(private championService: ChampionService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getChampions();
  }
  getChampions(): void {
    this.championService.getChampions()
      .subscribe(champions => this.champions = champions);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.championService.addChampion({ name } as Champion)
      .subscribe(champion => {
        this.champions.push(champion);
      });
  }
  delete(champion: Champion): void {
    this.champions = this.champions.filter(h => h !== champion);
    this.championService.deleteChampion(champion.id).subscribe();
  }
}
