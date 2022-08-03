import { Component, OnInit, Input } from '@angular/core';
import { Champion } from '../champion';
import { Location } from '@angular/common';

import { ChampionService } from '../champion.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit {

  champion: Champion | undefined;

  constructor(
    private route: ActivatedRoute,
    private championService: ChampionService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getChampion().subscribe(champion => this.champion = champion);
  }

  getChampion(): Observable<Champion> {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    return this.championService.getChampion(id)
      
  }
  goBack(): void {
    this.location.back();
  }
}
