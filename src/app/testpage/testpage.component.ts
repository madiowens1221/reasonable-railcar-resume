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
  
})

export class TestpageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
 
}
