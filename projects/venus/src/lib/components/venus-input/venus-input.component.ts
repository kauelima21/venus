import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { VenusInputStyle } from './venus-input.styles';

@Component({
  selector: 'venus-input',
  template: `
    <input
      [ngModel]="model"
      (ngModelChange)="updateData($event)"
      [placeholder]="placeholder"
      [disabled]="isDisabled"
      [ngClass]="style"
      [required]="isRequired"
      [name]="name"
      [type]="type"
      [step]="step"
      value=""
    />
  `,
  styles: [],
})
export class VenusInputComponent implements OnInit, OnChanges {
  @Input() type:
    | 'text'
    | 'number'
    | 'password'
    | 'date'
    | 'time'
    | 'datetime-local' = 'text';
  @Input() step = '1';
  @Input() name: string = '';
  @Input() model: string = '';
  @Output() modelChange: any = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() isDisabled: boolean = false;
  @Input() isRequired: boolean = false;
  style: string = '';

  ngOnInit(): void {
    this.style = VenusInputStyle().className;
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  updateData(event: any) {
    this.model = event;
    this.modelChange.emit(event);
  }
}
