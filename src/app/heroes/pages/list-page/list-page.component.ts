import { Component, OnInit } from '@angular/core';
import { HeroI } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit{


  public heroes: HeroI[] = [];

  // hacemos la inyección del servicio
  constructor( private heroesService: HeroesService ){}


  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( heroes => this.heroes = heroes );
  }
}
