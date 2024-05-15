import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'isep-lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: string[] = [];

  @Output() selectedItem = new EventEmitter<string>();

  onSelected(value: string) {
    this.selectedItem.emit(value);
  }
}
