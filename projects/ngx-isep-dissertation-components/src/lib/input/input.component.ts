import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'isep-lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
  @Input() width: number = 245;
  @Input() height: number = 32;
  @Input() placeholder?: string = '';
  @Input() errorLabel: boolean = false;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputElement') inputElement!: ElementRef;

  value: string = '';
  isPlaceholder: boolean = true;

  ngAfterViewInit() {
    this.setPlaceholder();
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.isPlaceholder = !this.value;
    this.valueChange.emit(this.value);
  }

  onFocus() {
    if (this.isPlaceholder) {
      this.value = '';
      this.isPlaceholder = false;
    }
  }

  onBlur() {
    if (!this.value) {
      this.setPlaceholder();
    }
  }

  setPlaceholder() {
    this.value = this.placeholder || '';
    this.isPlaceholder = true;
  }

  getValue(): string {
    return this.inputElement.nativeElement.value;
  }
}