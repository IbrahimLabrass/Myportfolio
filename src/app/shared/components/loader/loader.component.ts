import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    // animation triggers go here
  ]
})
export class LoaderComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    anime({
      targets: '#loader circle',
      easing: 'easeInOutQuart',
      duration: 1500,
      delay: 300,
      direction: 'alternate',
      loop: false,
    });

    anime({
      targets: '#loader path',
      fill: '#00FFB3',
      easing: 'easeInOutQuart',
      duration: 1500,
      delay: 500,
      direction: 'alternate',
      loop: false,
    });
  }
  ngOnInit(): void {}
}
