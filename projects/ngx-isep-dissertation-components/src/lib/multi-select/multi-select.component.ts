import { Component, Input } from '@angular/core';
import { MultiSelectModel } from './multi-select-model';

@Component({
  selector: 'isep-lib-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() title: string = "";
  @Input() options: MultiSelectModel[] = [];

  dropdownOpen = false;

  constructor() { }

  ngOnInit(): void { }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleCategorySelection(option: MultiSelectModel): void {
    option.isSelected = !option.isSelected;
  }
}
