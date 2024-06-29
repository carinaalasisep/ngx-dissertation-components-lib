// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductTileComponent } from '../lib/product-tile/product-tile.component';

export default {
    title: 'Components/ProductTile',
    component: ProductTileComponent,
    decorators: [
        moduleMetadata({
            declarations: [ProductTileComponent],
            imports: [BrowserModule],
            providers: [DecimalPipe]
        }),
    ],
    argTypes: {
        imageSrc: { control: 'text' },
        hasTag: { control: 'boolean' },
        tagColor: { control: 'color' },
        tagText: { control: 'text' },
        productCategory: { control: 'text' },
        productName: { control: 'text' },
        finalPrice: { control: 'number' },
        priceWithoutPromo: { control: 'number' },
    },
} as Meta;

type Story = StoryObj<ProductTileComponent>;

export const Default: Story = {
    args: {
        imageSrc: "https://via.placeholder.com/312x400",
        hasTag: false,
        tagColor: "#1E2832",
        tagText: "SALE",
        productCategory: "Category",
        productName: "Product Name",
        finalPrice: 100.00,
        priceWithoutPromo: undefined,
    }
};

export const WithTag: Story = {
    args: {
        imageSrc: "https://via.placeholder.com/312x400",
        hasTag: true,
        tagColor: "#FF0000",
        tagText: "NEW",
        productCategory: "Category",
        productName: "Product Name",
        finalPrice: 100.00,
        priceWithoutPromo: undefined,
    }
};

export const WithPromoPrice: Story = {
    args: {
        imageSrc: "https://via.placeholder.com/312x400",
        hasTag: true,
        tagColor: "#1E2832",
        tagText: "SALE",
        productCategory: "Category",
        productName: "Product Name",
        finalPrice: 80.00,
        priceWithoutPromo: 100.00,
    }
};