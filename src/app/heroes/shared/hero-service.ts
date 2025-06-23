import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Hero } from './hero';
import { env } from './../../../../env';
import { HeroMap } from './hero-map';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private http = inject(HttpClient);
  private _heroes = signal<Hero[]>([]);
  private _hero = signal<Hero | null>(null);
  private apiUrl = env.apiUrl;
  private _error = signal<any>(null);


  public get heroes(): WritableSignal<Hero[]> {
    return this._heroes;
  }

  public get hero(): WritableSignal<Hero | null> {
    return this._hero;
  }

  constructor() { }

  heroList() {
    this.http.get<Hero[]>(this.apiUrl+'/constants/heroes').subscribe({
      next: (HeroMap) => {
        this._heroes.set(Object.values(HeroMap));
      },
      error: (err) => {
        this._error.set(err);
      },
    });
  }
}
