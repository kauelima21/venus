import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CssResetComponent } from './components/css-reset/css-reset.component';
import { VenusButtonComponent } from '../public-api';
import { VenusInputComponent } from './components/venus-input/venus-input.component';
import { VenusIconsComponent } from './components/venus-icon/venus-icon.component';
import { VenusBreadcrumbComponent } from './components/venus-breadcrumb/venus-breadcrumb.component';
import { VenusCardComponent } from './components/venus-card/venus-card.component';
import { VenusCardHeaderComponent } from './components/venus-card/venus-card-header/venus-card-header.component';
import { VenusCardContentComponent } from './components/venus-card/venus-card-content/venus-card-content.component';

@NgModule({
  declarations: [
    CssResetComponent,
    VenusButtonComponent,
    VenusInputComponent,
    VenusIconsComponent,
    VenusBreadcrumbComponent,
    VenusCardComponent,
    VenusCardHeaderComponent,
    VenusCardContentComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CssResetComponent,
    VenusButtonComponent,
    VenusInputComponent,
    VenusIconsComponent,
    VenusBreadcrumbComponent,
    VenusCardComponent,
    VenusCardHeaderComponent,
    VenusCardContentComponent,
  ],
})
export class VenusModule {}
