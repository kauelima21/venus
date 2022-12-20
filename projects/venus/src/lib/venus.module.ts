import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenusButtonComponent } from '../public-api';
import { VenusInputComponent } from './components/venus-input/venus-input.component';
import { VenusCardComponent } from './components/venus-card/venus-card.component';
import { CssResetComponent } from './components/css-reset/css-reset.component';

@NgModule({
  declarations: [
    VenusButtonComponent,
    VenusInputComponent,
    VenusCardComponent,
    CssResetComponent,
  ],
  imports: [CommonModule],
  exports: [
    VenusButtonComponent,
    VenusInputComponent,
    VenusCardComponent,
    CssResetComponent,
  ],
})
export class VenusModule {}
