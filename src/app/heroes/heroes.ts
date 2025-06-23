import { Component } from '@angular/core';
import { HeroList } from "./hero-list/hero-list";

@Component({
  selector: 'app-heroes',
  imports: [HeroList],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss'
})
export class Heroes {

}
