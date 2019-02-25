import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'next-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() env: string;
  @Input() projectName: string;
  @Input() description: string;
  @Output() projectNameClick = new EventEmitter<void>();

  onProjectNameClick(): void {
    this.projectNameClick.emit();
  }

}
