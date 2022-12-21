import { Component, Input, OnInit } from '@angular/core';
import { VenusButtonStyle } from './venus-button.styles';

@Component({
  selector: 'venus-button',
  template: `
    <button [ngClass]="[style]" [type]="type">
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
})
export class VenusButtonComponent implements OnInit {
  @Input() type: 'button' | 'reset' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' =
    'primary';
  @Input() full: boolean = false;
  style: string = '';

  ngOnInit(): void {
    if (this.full) {
      this.style = VenusButtonStyle({
        bg: this.variant,
        size: 'full',
      }).className;
      return;
    }

    this.style = VenusButtonStyle({ bg: this.variant }).className;
  }
}
