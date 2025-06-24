import { Component, effect, input, OnInit } from '@angular/core';
import { Modal, ModalInterface } from 'flowbite';
import { Hero } from '../shared/hero';
import { HeroPortrait } from "../hero-portrait/hero-portrait";
import { HeroLore } from "../hero-lore/hero-lore";
import { HeroRoles } from "../hero-roles/hero-roles";
import { HeroBaseStats } from "../hero-base-stats/hero-base-stats";
import { HeroBaseSkills } from "../hero-base-skills/hero-base-skills";

@Component({
  selector: 'app-hero-details',
  imports: [HeroPortrait, HeroLore, HeroRoles, HeroBaseStats, HeroBaseSkills],
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
      if (this._hero()) {
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
    this.modal.hide()
  }
}
