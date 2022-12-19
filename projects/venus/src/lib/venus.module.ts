import { NgModule } from '@angular/core';
import { VenusComponent } from './venus.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../public-api';

@NgModule({
  declarations: [VenusComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [VenusComponent, ButtonComponent],
})
export class VenusModule {}
