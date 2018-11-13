import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rp-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  @Input('title') title;

  constructor() { }

  ngOnInit() {
  }

}
