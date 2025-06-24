import { Component, input } from '@angular/core';
import { env } from '../../../../env';

@Component({
  selector: 'app-hero-portrait',
  imports: [],
  templateUrl: './hero-portrait.html',
  styleUrl: './hero-portrait.scss'
})
export class HeroPortrait {
  public imageBaseUrl = env.apiHeroImageBaseUrl;
  public _primary_attr = input<string>();
  public _img = input<string>();


  public get primary_attr(): string {
    return this._primary_attr() as string;
  }

  public get img(): string {
    return this._img() as string;
  }


}
