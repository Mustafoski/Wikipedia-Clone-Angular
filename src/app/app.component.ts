import { WikipediaService } from './wikipedia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];
  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string): void {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
