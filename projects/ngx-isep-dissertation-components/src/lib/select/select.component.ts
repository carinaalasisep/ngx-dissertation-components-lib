import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectModel } from './select-model';

@Component({
  selector: 'isep-lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: SelectModel[] = [];
  @Input() label: string = '';
  @Input() errorLabel: boolean = false;

  @Output() selectedItem = new EventEmitter<number>();
  dropdownOpen = false;

  onSelected(value: string) {
    const selectedId = +value;
    this.selectedItem.emit(selectedId);
  }
}