import { Component, input } from '@angular/core';
import { Hero as HeroInterface} from '../shared/hero';
import { env } from '../../../../env';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  public _hero = input<HeroInterface>();
  public imageBaseUrl = env.apiHeroImageBaseUrl;
  public selectedHero! : HeroInterface;
  public get hero() : HeroInterface {
    return this._hero() as HeroInterface;
  }

  selectHero(){
    this.selectedHero = this.hero;
    console.log(this.selectedHero);
  }
}
