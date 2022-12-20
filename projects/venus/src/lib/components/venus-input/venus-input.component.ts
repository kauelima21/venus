import { Component, Input, OnInit } from '@angular/core';
import { VenusInputStyle } from './venus-input.styles';

@Component({
  selector: 'venus-input',
  template: `
    <input
      [placeholder]="placeholder"
      [ngClass]="style"
      [name]="name"
      [type]="type"
      value=""
    />
  `,
  styles: [],
})
export class VenusInputComponent implements OnInit {
  @Input() type: 'text' | 'number' | 'password' = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  style: string = '';

  ngOnInit() {
    this.style = VenusInputStyle().className;
  }
}
