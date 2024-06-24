import { Component, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';
import { ButtonColor } from './button-color.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonIcon } from './button-icon.enum';

@Component({
  selector: 'isep-lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges{
  @Input()
  public color: ButtonColor = ButtonColor.BLACK;

  public black: ButtonColor = ButtonColor.BLACK;
  public white: ButtonColor = ButtonColor.WHITE;
  public coral: ButtonColor = ButtonColor.CORAL;

  @Input()
  public size: ButtonSize = ButtonSize.MEDIUM;

  @Input()
  public icon: ButtonIcon | undefined;

  @Input() label?: string;

  @Input() disabled: boolean = false;

  @Input() isSelected: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  @HostBinding('class') hostClass = 'button-container';

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
		const classes = ['button-container', `${size}`, `${color}`];

		if (isDisabled) {
			classes.push('disabled');
		}

		if (isSelected) {
			classes.push('selected');
		}

		this.hostClass = classes.join(' ');
	}
}
