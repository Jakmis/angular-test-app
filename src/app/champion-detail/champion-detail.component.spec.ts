import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Champion } from '../champion';

import { ChampionDetailComponent } from './champion-detail.component';

describe('ChampionDetailComponent', () => {
  let component: ChampionDetailComponent;
  let fixture: ComponentFixture<ChampionDetailComponent>;
  let id = 111;
  const activatedRouteStub = {snapshot: {paramMap: {get: ()=>{return id;}}}};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionDetailComponent ],
      imports: [ AppRoutingModule, HttpClientModule ],
      providers: [ {provide: ActivatedRoute, useValue: activatedRouteStub} ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When component is initialized', () => {
    it('should load champion data', ()=>{
      //component.getChampion()
      expect(component.getChampion()).toBeTruthy();
    })
  })
});
