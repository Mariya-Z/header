import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'next-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() env: string;
  @Input() role: string;

  constructor() { }

  ngOnInit() {
  }

}
