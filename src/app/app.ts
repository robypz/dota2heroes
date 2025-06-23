import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Heroes } from "./heroes/heroes";

@Component({
  selector: 'app-root',
  imports: [Heroes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'dota2heroes';

  ngOnInit(): void {
    initFlowbite();
  }
}
