import { NgModule } from "@angular/core";
import { ProductTileComponent } from "./product-tile.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ProductTileComponent],
    imports: [CommonModule],
    exports: [ProductTileComponent]
})
export class ProductTileModule { }