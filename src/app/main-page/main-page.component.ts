import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rp-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],

})
export class MainPageComponent implements OnInit {

  active = 'inactive'
  constructor() { }

  ngOnInit() {
  }

}
