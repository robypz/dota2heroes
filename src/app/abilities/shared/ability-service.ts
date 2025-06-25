import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Ability } from './ability';

@Injectable({
  providedIn: 'root'
})
export class AbilityService {
  private http = inject(HttpClient);
  private _abilities = signal<Ability>
  constructor() { }
}
