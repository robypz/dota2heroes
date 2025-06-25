import { Component, effect, input, OnInit } from '@angular/core';
import { Modal, ModalInterface } from 'flowbite';
import { Hero } from '../shared/hero';
import { HeroPortrait } from "../hero-portrait/hero-portrait";
import { HeroLore } from "../hero-lore/hero-lore";
import { HeroRoles } from "../hero-roles/hero-roles";
import { HeroBaseStats } from "../hero-base-stats/hero-base-stats";
import { HeroAbilities } from "../hero-abilities/hero-abilities";

@Component({
  selector: 'app-hero-details',
  imports: [HeroPortrait, HeroLore, HeroRoles, HeroBaseStats, HeroAbilities],
  templateUrl: './hero-details.html',
  styleUrl: './hero-details.scss'
})
export class HeroDetails implements OnInit {
  private modal!: ModalInterface;
  private modalElement!: HTMLElement;

  public _hero = input<Hero>();


  public get hero() : Hero {
    return this._hero() as Hero;
  }


  constructor(){
    effect(()=>{
        if (this.hero) {
          this.show();
        }
    });
  }

  ngOnInit(): void {
    this.modalElement = document.getElementById('default-modal') as HTMLElement;
    this.modal = new Modal(this.modalElement);
  }

  show(){
    this.modal.show();
  }

  hide(){
    (document.activeElement as HTMLElement)?.blur();
    this.modal.toggle()
  }
}
