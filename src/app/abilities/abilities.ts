import { Component, computed, inject, input } from '@angular/core';
import { AbilityService } from './shared/ability-service';
import { Abilities as AbilitiesInterface, Ability } from './shared/abilities';
import { env } from '../../../env';

@Component({
  selector: 'app-abilities',
  imports: [],
  templateUrl: './abilities.html',
  styleUrl: './abilities.scss'
})
export class Abilities {

  _heroAbilities = input<string[]>();
  private abilityService = inject(AbilityService);
  private _abilities = computed(() => this.abilityService.abilities());
  public imgbaseUrl = env.apiHeroImageBaseUrl;

  public innateAbility! : Ability;

  public get heroAbilities(): string[] {
    return this._heroAbilities() as string[];
  }

  public get abilities(): AbilitiesInterface {
    return this._abilities() as AbilitiesInterface;
  }

  constructor(){
  }

}
