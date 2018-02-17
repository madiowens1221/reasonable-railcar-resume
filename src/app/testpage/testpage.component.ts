import { Component, OnInit } from '@angular/core';
import { TdFadeInOutAnimation } from '@covalent/core/common';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css'],
  animations: [
    TdFadeInOutAnimation({duration:1500}),
  ]
})

export class TestpageComponent implements OnInit {
  triggerState: boolean = false;
  constructor() { }

  ngOnInit() {
    this.triggerState = true;
  }
 
}
