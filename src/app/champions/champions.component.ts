import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { CHAMPIONS } from '../mock-champions';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
   
  champion: Champion = {
    id: 1,
    name: 'Aatrox'
  }

  champions = CHAMPIONS;

  constructor() { }

  ngOnInit(): void {
  }
  
}
