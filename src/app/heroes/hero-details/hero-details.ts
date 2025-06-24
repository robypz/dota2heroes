import { Component, OnInit } from '@angular/core';
import { Modal, ModalInterface } from 'flowbite';

@Component({
  selector: 'app-hero-details',
  imports: [],
  templateUrl: './hero-details.html',
  styleUrl: './hero-details.scss'
})
export class HeroDetails implements OnInit {
  private modal!: ModalInterface;
  private modalElement!: HTMLElement;

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
