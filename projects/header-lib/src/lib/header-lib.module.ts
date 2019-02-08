import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderLibComponent } from './header-lib.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderLibComponent, HeaderComponent],
  imports: [
    BrowserModule,
  ],
  exports: [
    HeaderLibComponent,
    HeaderComponent,
  ]
})
export class HeaderLibModule { }
