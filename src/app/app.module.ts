import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderLibModule } from 'header-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
