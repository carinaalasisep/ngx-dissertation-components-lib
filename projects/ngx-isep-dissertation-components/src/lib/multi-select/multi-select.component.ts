import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultiSelectModel } from './multi-select-model';

@Component({
  selector: 'isep-lib-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() title: string = "";
  @Input() options: MultiSelectModel[] = [];

  @Output() selectionChange = new EventEmitter<MultiSelectModel[]>();

  dropdownOpen = false;

  constructor() { }

  ngOnInit(): void { }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onSelected(option: MultiSelectModel, checked: boolean): void {
    option.isSelected = checked;
    const selectedOptions = this.options.filter(option => option.isSelected);
    this.selectionChange.emit(selectedOptions);

    const selectedNames = selectedOptions.map(opt => opt.name);
  }
}
