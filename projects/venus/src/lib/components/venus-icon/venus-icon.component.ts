import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  OnInit,
  OnChanges,
  HostBinding,
} from '@angular/core';
import { VenusIcons } from './venus-icons';
import { VenusIconStyle } from './venus-icon.styles';

@Component({
  selector: 'venus-icon',
  template: `<ng-content></ng-content>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VenusIconsComponent implements OnInit, OnChanges {
  constructor(private element: ElementRef) {}

  @Input() set name(iconName: string) {
    this.element.nativeElement.innerHTML = VenusIcons[iconName] || null;
  }

  @Input() color: 'dark' | 'light' | 'primary' = 'dark';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  style: string = '';

  ngOnInit(): void {
    this.style = VenusIconStyle({
      fill: this.color,
      size: this.size,
    }).className;
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  @HostBinding('class') get IconClass() {
    return this.style;
  }
}
