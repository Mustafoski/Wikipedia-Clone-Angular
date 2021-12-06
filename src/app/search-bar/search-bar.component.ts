import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  term: string;

  constructor() {
    this.term = '';
  }

  ngOnInit(): void {}

  onSubmit(event: any): void {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
