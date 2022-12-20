import { Component, OnInit } from '@angular/core';
import { GlobalStyles } from './css-reset.styles';

@Component({
  selector: 'css-reset',
  template: ` <div><ng-content></ng-content></div> `,
  styles: [],
})
export class CssResetComponent implements OnInit {
  ngOnInit(): void {
    GlobalStyles();
  }
}
