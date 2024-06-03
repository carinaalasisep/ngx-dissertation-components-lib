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
    console.log(checked);
    option.isSelected = checked;
    const selectedOptions = this.options.filter(option => option.isSelected);
    this.selectionChange.emit(selectedOptions);

    console.log('is selected multi:', option.isSelected);
    const selectedNames = selectedOptions.map(opt => opt.name);
    console.log('selectedOptions:', selectedNames);
  }
}
