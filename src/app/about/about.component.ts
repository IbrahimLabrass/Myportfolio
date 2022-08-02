import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import "core-js/stable";
import "regenerator-runtime/runtime"; 
import { Observable } from 'rxjs';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  about$: Observable<any> | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }


}

