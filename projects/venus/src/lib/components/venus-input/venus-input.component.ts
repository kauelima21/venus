import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { VenusInputStyle } from './venus-input.styles';

@Component({
  selector: 'venus-input',
  template: `
    <input
      [formControlName]="name"
      [placeholder]="placeholder"
      [disabled]="isDisabled"
      [ngClass]="style"
      [name]="name"
      [type]="type"
      value=""
    />
  `,
  styles: [],
})
export class VenusInputComponent implements OnInit, OnChanges {
  @Input() type: 'text' | 'number' | 'password' = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  style: string = '';

  ngOnInit(): void {
    this.style = VenusInputStyle().className;
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }
}
