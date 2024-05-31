import { Component } from '@angular/core';

@Component({
  selector: 'isep-lib-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  categories = [
    { id: 1, name: 'Coats', selected: false },
    { id: 2, name: 'Dresses', selected: false },
    { id: 3, name: 'Pants', selected: false },
    { id: 4, name: 'Shorts', selected: false },
    { id: 5, name: 'Category With A Long Name', selected: false }
  ];
  dropdownOpen = false;

  constructor() { }

  ngOnInit(): void { }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleCategorySelection(category: any): void {
    category.selected = !category.selected;
  }
}
