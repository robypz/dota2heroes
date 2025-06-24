import { Component, computed, effect, inject, signal } from '@angular/core';
import { Hero as HeroComponent } from "../hero/hero";
import { HeroService } from '../shared/hero-service';
import { Hero } from '../shared/hero';
import { HeroDetails } from "../hero-details/hero-details";

@Component({
  selector: 'app-hero-list',
  imports: [HeroComponent, HeroDetails],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.scss'
})
export class HeroList {
  private heroService = inject(HeroService);
  private _heroes = computed(() => this.heroService.heroes());

  public _hero = signal<Hero|null>(null);


  public set setHero(h : Hero) {
    this._hero.set(h);
  }


  public get hero() : Hero {
    return this._hero() as Hero;
  }



  public get heroes(): Hero[] {
    return this._heroes();
  }

  constructor() {
    this.heroService.heroList();
  }
}
