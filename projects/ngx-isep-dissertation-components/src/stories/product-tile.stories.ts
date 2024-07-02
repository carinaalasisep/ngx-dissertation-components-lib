// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ProductTileComponent } from '../lib/product-tile/product-tile.component';
import { within, expect, fireEvent } from "@storybook/test";

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
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const img = canvas.getByRole('img');
      expect(img).toBeInTheDocument();
  
      const category = canvas.getByText('Category');
      expect(category).toBeInTheDocument();
  
      const name = canvas.getByText('Product Name');
      expect(name).toBeInTheDocument();
  
      const price = canvas.getByText('$100.00');
      expect(price).toBeInTheDocument();
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
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const tag = canvas.getByText('NEW');
      expect(tag).toBeInTheDocument();
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
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      const finalPrice = canvas.getByText('$80.00');
      expect(finalPrice).toBeInTheDocument();
  
      const priceWithoutPromo = canvas.getByText('$100.00');
      expect(priceWithoutPromo).toBeInTheDocument();
    }
};