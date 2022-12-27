import { Component, OnInit, OnChanges } from '@angular/core';
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
export class VenusCardContentComponent implements OnInit, OnChanges {
  style: string = '';

  ngOnInit(): void {
    this.style = VenusCardContentStyle().className;
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
}
