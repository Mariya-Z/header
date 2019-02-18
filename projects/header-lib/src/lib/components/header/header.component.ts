import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'next-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() env: string;
  @Input() role: string;
  @Input() descr: string;
  @Output() ProjectNameClickedEmmiter = new EventEmitter<void>();

  onProjectNameClick(): void {
    this.ProjectNameClickedEmmiter.emit();
  }

}
