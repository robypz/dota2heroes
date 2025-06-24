import { Component, computed, effect, inject, input } from '@angular/core';
import { HeroLoreService } from './shared/hero-lore-service';
import { HeroLore as HeroLoreInterface } from './shared/hero-lore';

@Component({
  selector: 'app-hero-lore',
  imports: [],
  templateUrl: './hero-lore.html',
  styleUrl: './hero-lore.scss'
})
export class HeroLore {
  private heroLoreService = inject(HeroLoreService);
  private _heroLore = computed(() => this.heroLoreService.heroLore());
  public _name = input<string>();

  public lore!: string;

  public get heroLore(): HeroLoreInterface|null {
    return this._heroLore();
  }

  public get name(): string {
    return this._name() as string;
  }


  constructor() {
    effect(() => {
     if (this.heroLore) {
      this.lore = this.heroLore[this.name.split('npc_dota_hero_')[1]]
     }
    });
  }
}
