import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TdFadeInOutAnimation } from '@covalent/core/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flyInOut', [
      // state('false', style({transform: 'translateX(0px)'}), {params : { dist: 30}}),
      // state('true',  style({transform: 'translateX(0px)'}), {params : { dist: 30}}),
      transition('true <=> false', animate('{{speed}}ms', keyframes([
        style({opacity: 1, transform: 'rotate(0deg) translateX({{dist}}px) rotate(0deg)', offset: 0}),
        style({opacity: 1, transform: 'rotate(360deg) translateX({{dist}}px) rotate(-360deg)', offset: 1}) //Orbital Velocity
      ])),{params : { dist: 150, speed: 5000 }}),
    ])
  ]
})
export class HomeComponent implements OnInit  {
  triggerState: boolean = false;
  triggerState1: boolean = false;
  triggerState2: boolean = false;
  triggerState3: boolean = false;
  constructor() { 
    
  }

  ngOnInit() {
  }
  

}
