import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductTileComponent } from './product-tile.component';
import { DecimalPipe } from '@angular/common';

describe('ProductTileComponent', () => {
  let component: ProductTileComponent;
  let fixture: ComponentFixture<ProductTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTileComponent ],
      providers: [ DecimalPipe ] // Providing DecimalPipe for testing
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format finalPriceToDisplay correctly', () => {
    component.finalPrice = 20.99;
    component.ngOnInit();
    expect(component.finalPriceToDisplay).toBe('20.99');
  });

  it('should format priceWithoutPromoToDisplay correctly and set isRed to true', () => {
    component.priceWithoutPromo = 25.99;
    component.ngOnInit();
    expect(component.priceWithoutPromoToDisplay).toBe('25.99');
    expect(component.isRed).toBe(true);
  });

  it('should have default values for inputs when not provided', () => {
    expect(component.imageSrc).toBe('https://via.placeholder.com/312x400');
    expect(component.hasTag).toBe(false);
    expect(component.tagColor).toBe('#1E2832');
    expect(component.tagText).toBe('SALE');
    expect(component.productCategory).toBe('');
    expect(component.productName).toBe('');
    expect(component.finalPrice).toBe(0);
    expect(component.priceWithoutPromo).toBeUndefined();
  });
});