import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Icon } from './icon.enum';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './constants/icons';
import { IconColor } from './icon-color.enum';

@Component({
  selector: 'isep-lib-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit, OnChanges{
  @Input() icon!: Icon;
  @Input() color: IconColor = IconColor.BLACK;
  iconHtml: SafeHtml = '';
  
	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		if(this.icon){
			this.getIconHTML(this.icon!);
		}
	}
  ngOnChanges(): void {
    if(this.icon){
      this.getIconHTML(this.icon!);
    }
  }

  getIconHTML(icon: string) {
		this.iconHtml = this.sanitizeHtml(ICONS[icon]) || '';
	}

	sanitizeHtml(html: string): SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(html);
	  }
}
