import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'next-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() env: string;
  @Input() role: string;


  @Output() refClicked = new EventEmitter();
  @Output() helpSlot = new EventEmitter();
  @Output() userName = new EventEmitter();
  @Output() logout = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  test(): void {
    console.log('press');
    this.refClicked.emit();
  }

}
