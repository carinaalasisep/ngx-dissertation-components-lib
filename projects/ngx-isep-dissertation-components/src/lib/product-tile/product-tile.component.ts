import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'isep-lib-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent {
  @Input() imageSrc: string ="https://via.placeholder.com/312x400";
  @Input() hasTag: boolean = false;
  @Input() tagColor: string = "#1E2832";
  @Input() tagText: string = "SALE";
  @Input() productCategory: string = "";
  @Input() productName: string = "";
  @Input() finalPrice: number = 0;
  finalPriceToDisplay: string | null = '';
  @Input() priceWithoutPromo: number | undefined;
  priceWithoutPromoToDisplay: string | null = '';
  isRed: boolean = false;

  constructor(private decimalPipe: DecimalPipe) {
    this.finalPriceToDisplay = this.decimalPipe.transform(this.finalPrice, '1.2-2');
    if(this.priceWithoutPromo){
      this.priceWithoutPromoToDisplay = this.decimalPipe.transform(this.priceWithoutPromo, '1.2-2');
      this.isRed = true;
    }
  }
}
