import { Component, Input, OnInit } from '@angular/core';
import {
  VenusCardStyle,
  VenusCardHeader,
  VenusCardSection,
} from './venus-card.styles';

@Component({
  selector: 'venus-card',
  template: `
    <article [ngClass]="[style]">
      <header [ngClass]="[header]">
        <h2>Resultado</h2>
      </header>
      <section [ngClass]="[section]">
        <ng-content></ng-content>
      </section>
    </article>
  `,
  styles: [],
})
export class VenusCardComponent implements OnInit {
  style: string = '';
  header: string = '';
  section: string = '';

  @Input() variant: 'default' | 'full' = 'default';

  ngOnInit(): void {
    this.header = VenusCardHeader().className;
    this.section = VenusCardSection().className;
    if (this.variant == 'full') {
      this.style = VenusCardStyle({ size: 'full' }).className;
      return;
    }
    this.style = VenusCardStyle().className;
  }
}
