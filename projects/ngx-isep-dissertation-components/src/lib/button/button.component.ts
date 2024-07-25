import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ButtonColor } from './button-color.enum';
import { ButtonSize } from './button-size.enum';
import { ButtonIcon } from './button-icon.enum';
import { ICONS } from '../icon/constants/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
	selector: 'isep-lib-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit {

	@Input()
	public color: ButtonColor = ButtonColor.BLACK;

	black: ButtonColor = ButtonColor.BLACK;
	white: ButtonColor = ButtonColor.WHITE;
	coral: ButtonColor = ButtonColor.CORAL;
	heart = ButtonIcon.HEART;
	iconHtml: SafeHtml = '';

	@Input()
	public size: ButtonSize = ButtonSize.MEDIUM;

	@Input()
	public icon?: ButtonIcon;

	@Input() label?: string;

	@Input() disabled: boolean = false;

	@Output() buttonClick = new EventEmitter<void>();

	@HostBinding('class') hostClass = 'button-container';
	medium: ButtonSize = ButtonSize.MEDIUM;
	large: ButtonSize = ButtonSize.LARGE;
	small: ButtonSize = ButtonSize.SMALL;
	
	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		if(this.icon){
			this.getIconHTML(this.icon!);
		}
	}

	ngOnChanges() {
		this.updateHostClass(
			this.size,
			this.color,
			this.disabled,
		);

		if(this.icon){
			this.getIconHTML(this.icon!);
		}
	}

	updateHostClass(
		size: ButtonSize,
		color: ButtonColor,
		isDisabled: boolean,
	) {
		const classes = ['button-container', `${size}`, `${color}`];

		if (isDisabled) {
			classes.push('disabled');
		}

		this.hostClass = classes.join(' ');
	}

	getIconHTML(icon: string) {
		this.iconHtml = this.sanitizeHtml(ICONS[icon]) || '';
	}

	sanitizeHtml(html: string): SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(html);
	  }
}
