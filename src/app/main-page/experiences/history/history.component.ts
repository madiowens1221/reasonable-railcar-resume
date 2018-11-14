import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rp-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  @Input('history')

  ngOnInit() {
  }

}
