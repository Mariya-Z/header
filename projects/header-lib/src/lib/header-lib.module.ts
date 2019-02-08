import { NgModule } from '@angular/core';
import { HeaderLibComponent } from './header-lib.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderLibComponent, HeaderComponent],
  imports: [
  ],
  exports: [
    HeaderLibComponent,
    HeaderComponent,
  ]
})
export class HeaderLibModule { }
