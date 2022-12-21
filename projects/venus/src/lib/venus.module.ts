import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenusButtonComponent } from '../public-api';
import { VenusInputComponent } from './components/venus-input/venus-input.component';
import { VenusCardComponent } from './components/venus-card/venus-card.component';
import { CssResetComponent } from './components/css-reset/css-reset.component';
import { RouterModule } from '@angular/router';
import { VenusBreadcrumbComponent } from './components/venus-breadcrumb/venus-breadcrumb.component';

@NgModule({
  declarations: [
    VenusButtonComponent,
    VenusInputComponent,
    VenusCardComponent,
    CssResetComponent,
    VenusCardComponent,
    VenusBreadcrumbComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    VenusButtonComponent,
    VenusInputComponent,
    VenusCardComponent,
    CssResetComponent,
    VenusCardComponent,
    VenusBreadcrumbComponent,
  ],
})
export class VenusModule {}
