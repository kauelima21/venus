import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenusButtonComponent } from '../public-api';
import { VenusInputComponent } from './components/venus-input/venus-input.component';
import { VenusCardComponent } from './components/venus-card/venus-card.component';

@NgModule({
  declarations: [VenusButtonComponent, VenusInputComponent, VenusCardComponent],
  imports: [CommonModule],
  exports: [VenusButtonComponent, VenusInputComponent, VenusCardComponent],
})
export class VenusModule {}
