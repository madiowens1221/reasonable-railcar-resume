import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TdFadeInOutAnimation } from '@covalent/core/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit  {
  fadeInText: boolean;
  constructor() { 
    this.fadeInText = true;
  }

  ngOnInit() {
  }
  

}
