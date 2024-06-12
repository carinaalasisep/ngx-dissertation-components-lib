import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template: `
    <div [ngStyle]="{ width: width + 'px', height: height + 'px', position: 'relative' }">
      <input #inputElement type="text" [ngStyle]="{ width: width + 'px', height: (height - 2) + 'px' }" 
             (input)="onInput($event)" />
      <div [ngStyle]="{
            width: width + 'px',
            height: '0px',
            left: '0px',
            top: height + 'px',
            position: 'absolute',
            border: border
          }"></div>
    </div>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() width: number = 245;
  @Input() height: number = 32;
  @Input() border: string = '2px black solid';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputElement') inputElement!: ElementRef;

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }

  getValue(): string {
    return this.inputElement.nativeElement.value;
  }
}