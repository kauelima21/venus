import { Component, Input, OnInit } from '@angular/core';
import { TransformProps } from '@stitches/core/types/styled-component';
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
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' =
    'primary';
  @Input() full: boolean = false;
  @Input() isDisabled: boolean = false;
  style: string = '';

  ngOnInit(): void {
    let props: TransformProps<
      {
        bg?:
          | 'primary'
          | 'secondary'
          | 'danger'
          | 'warning'
          | 'success'
          | undefined;
        size?: 'full' | undefined;
      },
      {}
    > = { bg: this.variant };
    if (this.full) {
      props.size = 'full';
    }

    this.style = VenusButtonStyle(props).className;
  }
}
