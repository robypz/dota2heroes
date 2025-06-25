import { Component, input, model } from '@angular/core';
import { Hero as HeroInterface} from '../shared/hero';
import { env } from '../../../../env';
import { HeroRoles } from "../hero-roles/hero-roles";
import { HeroPortrait } from "../hero-portrait/hero-portrait";
@Component({
  selector: 'app-hero',
  imports: [HeroRoles, HeroPortrait],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  public _hero = input<HeroInterface>();
  public imageBaseUrl = env.apiHeroImageBaseUrl;
  public selectedHero = model<HeroInterface>();
  public get hero() : HeroInterface {
    return this._hero() as HeroInterface;
  }

  selectHero(){
    this.selectedHero.set({ ...this.hero });
  }
}
