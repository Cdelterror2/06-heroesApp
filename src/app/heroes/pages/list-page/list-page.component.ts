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

  // hacemos la inyección del servicio para obtener datos
  constructor( private heroesService: HeroesService ){}

// Utiliza el servicio heroesService para llamar al método getHeroes(), que devuelve un Observable.
  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( heroes => this.heroes = heroes );
  }
}
