import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'header-lib-app';
  public nameClicked = new EventEmitter();

  onPress() {
    console.log('app');
  }
}
