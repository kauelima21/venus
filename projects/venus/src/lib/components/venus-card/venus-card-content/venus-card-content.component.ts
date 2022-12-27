import { Component, OnInit } from '@angular/core';
import { VenusCardContentStyle } from './venus-card-content.styles';

@Component({
  selector: 'venus-card-content',
  template: `
    <section [ngClass]="style">
      <ng-content></ng-content>
    </section>
  `,
  styles: [],
})
export class VenusCardContentComponent implements OnInit {
  style: string = '';

  ngOnInit() {
    this.style = VenusCardContentStyle().className;
  }
}
