import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Abilities } from './abilities';
import { env } from '../../../../env';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  private http = inject(HttpClient);
  private _abilities = signal<Abilities | null>(null);
  private apiUrl = env.apiUrl;

  public get abilities() {
    return this._abilities
  }

  constructor() {
    this.listAbilities();
  }

  private listAbilities() {
    this.http.get<Abilities>(this.apiUrl + '/constants/abilities').subscribe({
      next: (value) => {
        this._abilities.set(value);
      },
      error: (err) => {

      },
    })
  }
}
