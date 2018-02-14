import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
  issRaised: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  isRaised():void {
    this.issRaised = !this.issRaised;
  }

}
