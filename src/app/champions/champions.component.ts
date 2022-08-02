import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Champion[] = [];
  selectedChampion!: Champion;
  
  
  constructor(private championService: ChampionService) { }

  getChampions(): void {
    this.championService.getChampions()
    .subscribe(champions => this.champions = champions);
  }

  ngOnInit(): void {
    this.getChampions();
  }
  onSelect(champion: Champion): void {
    this.selectedChampion = champion;
  }
  
}
