import { Component, Input } from '@angular/core';
import { ButtonStyle } from './button.styles';
import { ButtonVariants } from './button.variants';

@Component({
  selector: 'venus-button',
  template: `
    <button [ngClass]="style">
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'danger' = 'primary';
  style = ButtonStyle({ color: this.variant }).className;
}
