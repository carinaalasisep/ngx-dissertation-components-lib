import { Component, Input } from '@angular/core';
import { Icon } from './icon.enum';

@Component({
  selector: 'isep-lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() icon!: Icon;
}
