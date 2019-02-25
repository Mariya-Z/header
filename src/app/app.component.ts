import { Component, EventEmitter } from '@angular/core';
import '../../node_modules/font-awesome/css/font-awesome.css';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  env = 'Dev';
  projectName = 'NEXT - NIBR';
  description = 'External Science';

  onProjectNameClick() {
    console.log('onProjectNameClick');
  }

  onMenuClick(): void {
    console.log('onMenuClick');
  }

  onBellClick(): void {
    console.log('onBellClick');
  }

  onQuestionClick(): void {
    console.log('onQuestionClick');
  }

  onLogoutClick(): void {
    console.log('onLogoutClick');
  }
}
