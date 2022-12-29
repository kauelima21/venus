import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { VenusCardStyle } from './venus-card.styles';

@Component({
  selector: 'venus-card',
  template: `
    <article [ngClass]="[style]">
      <ng-content></ng-content>
    </article>
  `,
  styles: [],
})
export class VenusCardComponent implements OnInit, OnChanges {
  style: string = '';

  @Input() full: boolean = false;
  @Input() radius: 'sm' | 'md' | 'lg' | 'xl' = 'sm';

  ngOnInit(): void {
    if (this.full) {
      this.style = VenusCardStyle({
        size: 'full',
        radii: this.radius,
      }).className;
      return;
    }
    this.style = VenusCardStyle({ radii: this.radius }).className;
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
}
