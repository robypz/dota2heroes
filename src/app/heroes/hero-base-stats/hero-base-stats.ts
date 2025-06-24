import { Component, input } from '@angular/core';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-hero-base-stats',
  imports: [],
  templateUrl: './hero-base-stats.html',
  styleUrl: './hero-base-stats.scss'
})
export class HeroBaseStats {
  public _hero = input<Hero>()


  public get hero() : Hero {
    return this._hero() as Hero;
  }

}
