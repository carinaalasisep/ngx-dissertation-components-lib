import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectModel } from './select-model';

@Component({
  selector: 'isep-lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: SelectModel[] = [];

  @Output() selectedItem = new EventEmitter<number>();

  onSelected(value: string) {
    const selectedId = +value;
    this.selectedItem.emit(selectedId);
  }
}