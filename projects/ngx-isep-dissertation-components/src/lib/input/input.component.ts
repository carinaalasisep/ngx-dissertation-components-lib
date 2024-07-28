import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Icon } from '../icon/icon.enum';

@Component({
  selector: 'isep-lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() width: number = 245;
  @Input() height: number = 32;
  @Input() placeholder?: string = '';
  @Input() errorLabel: boolean = false; 
  @Input() type: string = 'text'; // Default to 'text'

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputElement') inputElement!: ElementRef;
  isPasswordVisible: boolean = false;

  actualType: string = 'text';
  value: string = '';
  isPlaceholder: boolean = true;
  eyeSlash = Icon.EYE_SLASH;
  eye = Icon.EYE;  

  ngOnInit(){
    this.actualType = this.type;
  }

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

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.type = this.isPasswordVisible ? 'text' : 'password';
  }
}