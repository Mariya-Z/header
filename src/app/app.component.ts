import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onPress() {
    console.log('app');
  }

  helpSlotClicked(): void {
    console.log('helpSlot');
  }

  userNameClicked(): void {
    console.log('userName');
  }

  logoutClicked(): void {
    console.log('logout');
  }
}
