import { Component, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';
import { ButtonColor } from './button-color.enum';
import { ButtonSize } from './button-size.enum';

@Component({
  selector: 'isep-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges{
  @Input()
  public color: ButtonColor = ButtonColor.BLACK;

  @Input()
  public size: ButtonSize = ButtonSize.MEDIUM;

  @Input() label!: string;

  @Input() disabled: boolean = false;

  @Input() isSelected: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  @HostBinding('class') hostClass = 'isep-lib-button';

  ngOnChanges() {
		this.updateHostClass(
			this.size,
			this.color,
			this.disabled,
			this.isSelected,
		);
	}

	updateHostClass(
		size: ButtonSize,
		color: ButtonColor,
		isDisabled: boolean,
		isSelected: boolean,
	) {
		const classes = ['isep-lib-button', `${size}`, `${color}`];

		if (isDisabled) {
			classes.push('disabled');
		}

		if (isSelected) {
			classes.push('selected');
		}

		this.hostClass = classes.join(' ');
	}
}
