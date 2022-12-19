import { Component, Input, OnInit } from '@angular/core';
import { css } from '../styles';
import { ButtonStyle } from './button.styles';

@Component({
  selector: 'venus-button',
  template: `
    <button [ngClass]="[style]">
      {{ height }}
    </button>
  `,
  styles: [],
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' =
    'primary';
  @Input() height = '';
  @Input() backgroundColor = '';
  @Input() border = '';
  style: any = '';

  ngOnInit(): void {
    // this.style = ButtonStyle({ bg: this.variant }).className;
    this.style = css({
      height: this.height,
      backgroundColor: this.backgroundColor,
      border: this.border,
    }).className;
  }
}
