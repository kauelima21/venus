import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VenusModule } from 'venus';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, VenusModule, AppRoutingModule],
})
export class AppModule {}
