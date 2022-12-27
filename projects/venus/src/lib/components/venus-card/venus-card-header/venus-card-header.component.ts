import { Component, Input, OnInit } from '@angular/core';
import { VenusCardHeaderStyle } from './venus-card-header.styles';

@Component({
  selector: 'venus-card-header',
  template: `
    <header [ngClass]="style">
      <h2>{{ title }}</h2>
      <ng-content></ng-content>
    </header>
  `,
  styles: [],
})
export class VenusCardHeaderComponent implements OnInit {
  @Input() title!: string;
  style: string = '';

  ngOnInit() {
    this.style = VenusCardHeaderStyle().className;
  }
}
