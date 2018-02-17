import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TdFadeInOutAnimation } from '@covalent/core/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    TdFadeInOutAnimation({duration:15000}),
  ]
})
export class HomeComponent implements OnInit  {
  fadeInText: boolean;
  constructor() { 
    this.fadeInText = true;
  }

  ngOnInit() {
  }
  

}
