import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-icons',
  template: `
    <div class="mas-icon-wrapper">
      <div *ngFor="let icon of iconClasses">
        <div class="icon-tile" (click)="copyCode(icon)" [title]="'Copy ' + icon + ' to clipboard'">
          <i [className]="icon" [ngClass]="{ 'mas-icon': true }"></i>
          <span class="mas-icon-label">{{ icon }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./mas-icon-examples.component.scss'],
})
export class MasIconExamples implements OnInit {
  @Input() iconClasses: string[] = [];
  ngOnInit() {}
  copyCode(icon: string) {
    const textArea = document.createElement('textarea');
    textArea.value = icon;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('Copy');
    textArea.remove();
  }
}
