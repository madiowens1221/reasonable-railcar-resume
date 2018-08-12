import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rp-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input('rating') rating;

  range: number[];

  constructor() { }

  ngOnInit() {
    this.range = new Array<number>(this.rating);
  }

}
