import { Component, computed, inject, input } from '@angular/core';
import { HeroAbilitiesService } from './shared/hero-abilities-service';
import { HeroAbilities as  HeroAbilitiesInterface} from './shared/hero-abilities';
import { Abilities } from "../../abilities/abilities";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-hero-abilities',
  imports: [Abilities],
  templateUrl: './hero-abilities.html',
  styleUrl: './hero-abilities.scss'
})
export class HeroAbilities {
  public _name = input<string>();

  private heroAbilitiesService = inject(HeroAbilitiesService);
  private _heroAbilities = computed(()=>this.heroAbilitiesService.heroAbilities());


  public get name() : string {
    return this._name() as string;
  }


  public get heroAbilities() : HeroAbilitiesInterface {
    return this._heroAbilities() as HeroAbilitiesInterface;
  }

  constructor(){
  }

}
