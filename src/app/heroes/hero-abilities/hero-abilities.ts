import { Component, computed, effect, inject, input } from '@angular/core';
import { HeroAbilitiesService } from './shared/hero-abilities-service';
import { HeroAbilities as  HeroAbilitiesInterface} from './shared/hero-abilities';

@Component({
  selector: 'app-hero-abilities',
  imports: [],
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
    effect(()=>{
      if (this.heroAbilities) {
        console.log(this.heroAbilities[this.name].abilities);
      }
    })
  }

}
