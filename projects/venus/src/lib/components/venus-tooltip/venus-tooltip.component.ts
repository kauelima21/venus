import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { VenusTooltipStyle } from './venus-tooltip.styles';

@Component({
  selector: 'venus-tooltip',
  template: `
    <div [ngClass]="[style]" [attr.data-tooltip]="tip">
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class VenusTooltipComponent implements OnInit, OnChanges {
  style: string = '';
  @Input() tip: string = '';
  ngOnInit(): void {
    this.style = VenusTooltipStyle().className;
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
}
