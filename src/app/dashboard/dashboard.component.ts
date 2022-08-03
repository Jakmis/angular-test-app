import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  champions: Champion[] = [];

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.getChampions()
  }

  getChampions(): void {
    this.championService.getChampions()
      .subscribe(champions => this.champions = champions.slice(1, 5));
  }
}
