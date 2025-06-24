import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HeroAbilities } from './hero-abilities';
import { env } from '../../../../../env';

@Injectable({
  providedIn: 'root'
})
export class HeroAbilitiesService {
  private http = inject(HttpClient);
  private _heroAbilities = signal<HeroAbilities|null>(null);
  private apiUrl = env.apiUrl;
  constructor() {
    this.listAbilities();
  }


  public get heroAbilities() : WritableSignal<HeroAbilities|null> {
    return this._heroAbilities
  }


  listAbilities(){
    this.http.get<HeroAbilities>(this.apiUrl+'/constants/hero_abilities').subscribe({
      next : (value)=> {
        this._heroAbilities.set(value);
      },
      error : (err)=> {

      },
    })
  }
}
