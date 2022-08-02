import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { CHAMPIONS } from '../mock-champions';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
   
  champions = CHAMPIONS;
  selectedChampion?: Champion;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  onSelect(champion: Champion): void {
    this.selectedChampion = champion;
    }
  
}
