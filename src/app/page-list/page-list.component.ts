import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit, OnChanges {
  @Input() pages = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    console.log('BEfore', this.pages);
  }
}
