import { Component, OnInit } from '@angular/core';
import { div } from './app.styles';

@Component({
  selector: 'app-root',
  template: ` <div [ngClass]="style">teste</div> `,
})
export class AppComponent implements OnInit {
  style = '';

  ngOnInit() {
    this.style = div().className;
  }
}
