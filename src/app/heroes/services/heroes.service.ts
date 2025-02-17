import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroI } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
  constructor(private http: HttpClient) { }

  // creamos una propiedad para poder usar la variable de entorno que contiene la URL
  private baseUrl: string = environments.baseUrl;

  // endpoint http; realiza una solicitud GET a la URL
  getHeroes():Observable<HeroI[]> {

    return this.http.get<HeroI[]>(`${ this.baseUrl }/heroes`);
  }
}
