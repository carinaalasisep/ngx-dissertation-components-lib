import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'isep-lib-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  @Input() imageSrc: string = "https://via.placeholder.com/312x400";
  @Input() hasTag: boolean = false;
  @Input() tagColor: string = "#1E2832";
  @Input() tagText: string = "SALE";
  @Input() productCategory: string = "";
  @Input() productName: string = "";
  @Input() finalPrice: number = 0;
  @Input() priceWithoutPromo: number | undefined;
  finalPriceToDisplay: string | null = '';
  priceWithoutPromoToDisplay: string | null = '';
  isRed: boolean = false;

  constructor(private decimalPipe: DecimalPipe) {
  }

  ngOnInit(): void {
    this.finalPriceToDisplay = this.decimalPipe.transform(this.finalPrice, '1.2-2');

    if (this.priceWithoutPromo) {
      this.priceWithoutPromoToDisplay = this.decimalPipe.transform(this.priceWithoutPromo, '1.2-2');
      this.isRed = true;
    }  }
}
