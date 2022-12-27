import { Component, Input, OnInit } from '@angular/core';
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
export class VenusCardComponent implements OnInit {
  style: string = '';

  @Input() full: boolean = false;
  @Input() radius: 'sm' | 'md' | 'lg' = 'sm';

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
}
