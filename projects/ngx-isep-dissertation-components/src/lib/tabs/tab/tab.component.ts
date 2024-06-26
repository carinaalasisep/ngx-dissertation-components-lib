import { Component, Input } from '@angular/core';

@Component({
  selector: 'isep-lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() title: string = '';
  isActive: boolean = false;
  @Input() disabled: boolean = false;
}