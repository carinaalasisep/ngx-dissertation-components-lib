import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'isep-lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCheckboxChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.change.emit(inputElement.checked);
    event.stopPropagation();
  }
}
