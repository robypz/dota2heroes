import { Component, computed, effect, inject } from '@angular/core';
import { Hero as HeroComponent } from "../hero/hero";
import { HeroService } from '../shared/hero-service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-hero-list',
  imports: [HeroComponent],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.scss'
})
export class HeroList {
  private heroService = inject(HeroService);
  private _heroes = computed(() => this.heroService.heroes());

  public get heroes(): Hero[] {
    return this._heroes();
  }

  constructor() {
    this.heroService.heroList();
  }
}
