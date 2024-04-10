import { NgModule } from '@angular/core';
import { NgxIsepDissertationComponentsComponent } from './ngx-isep-dissertation-components.component';
import { ButtonModule } from './button/button.module';
import { ProductTileModule } from './product-tile/product-tile.module';

@NgModule({
  declarations: [
    NgxIsepDissertationComponentsComponent,
  ],
  imports: [
    ButtonModule,
    ProductTileModule
  ],
  exports: [
    NgxIsepDissertationComponentsComponent
  ]
})
export class NgxIsepDissertationComponentsModule { }
