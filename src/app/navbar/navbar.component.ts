import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
  ]
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    anime({
      targets: '.nav__list li',
      translateY: [-50, 0],
      duration: 1000,
      easing: 'easeOutSine',
    });
  }

  ngOnInit(): void {
  }

}
