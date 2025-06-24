import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-roles',
  imports: [],
  templateUrl: './hero-roles.html',
  styleUrl: './hero-roles.scss'
})
export class HeroRoles {
  public _roles = input<string[]>()


  public get roles() : string[] {
    return this._roles() as string[];
  }

}
