import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VenusModule } from 'dist/venus';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, VenusModule],
})
export class AppModule {}
