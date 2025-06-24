import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { HeroLore } from './hero-lore';
import { env } from '../../../../../env';

@Injectable({
  providedIn: 'root'
})
export class HeroLoreService {
  public http = inject(HttpClient);
  private _heroLore = signal<HeroLore|null>(null);
  private apiUrl = env.apiUrl;

  public get heroLore() : WritableSignal<HeroLore|null> {
    return this._heroLore;
  }

  constructor() {
    this.loreList();
  }

  loreList(){
    this.http.get<HeroLore>(this.apiUrl+'/constants/hero_lore').subscribe({
      next : (value) => {
        this._heroLore.set(value);
      },
      error : (err)=> {

      },
    })
  }

}
