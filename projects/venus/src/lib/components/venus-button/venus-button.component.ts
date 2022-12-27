import { Component, Input, OnInit } from '@angular/core';
import { VenusButtonStyle } from './venus-button.styles';

@Component({
  selector: 'venus-button',
  template: `
    <button [ngClass]="[style]" [disabled]="isDisabled" [type]="type">
      <ng-content></ng-content>
    </button>
  `,
  styles: [],
})
export class VenusButtonComponent implements OnInit {
  @Input() type: 'button' | 'reset' | 'submit' = 'button';
  @Input() bg: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' =
    'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() isDisabled: boolean = false;
  @Input() full: boolean = false;
  style: string = '';

  ngOnInit(): void {
    let props: any = { bg: this.bg, size: this.size };
    if (this.full) {
      props.width = 'full';
    }

    this.style = VenusButtonStyle(props).className;
  }
}
