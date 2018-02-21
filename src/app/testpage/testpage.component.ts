import { Component, OnInit } from '@angular/core';
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
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css'],
  animations: [
    trigger('flyInOut', [
      state('false', style({transform: 'translateX(150px)'})),
      state('true', style({transform: 'translateX(150px)'})),
      transition('true <=> false', animate('5000ms', keyframes([
        style({opacity: 1, transform: 'rotate(0deg) translateX(150px) rotate(0deg)', offset: 0}),
        style({opacity: 1, transform: 'rotate(360deg) translateX(150px) rotate(-360deg)', offset: 1})
      ]))),
    ])
  ]
})

export class TestpageComponent implements OnInit {
  triggerState: boolean = false;
  constructor() { }

  ngOnInit() {
    this.triggerState = true;
  }
  print() {
    console.log('i work');    
  }
}
