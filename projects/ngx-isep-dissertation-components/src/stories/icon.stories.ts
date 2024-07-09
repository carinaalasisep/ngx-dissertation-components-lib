// .storybook.ts
import { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { IconComponent } from "../lib/icon/icon.component";
import { Icon } from "../lib/icon/icon.enum";
import { IconColor } from "../lib/icon/icon-color.enum";
import { within, expect } from "@storybook/test";

export default {
  title: "Components/Icon",
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
      imports: [BrowserModule, CommonModule],
    }),
  ],
  argTypes: {
    icon: { control: "select", options: Object.values(Icon) },
    color: { control: "select", options: Object.values(IconColor) },
  },
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const CloseIcon: Story = {
  args: {
    icon: Icon.CLOSE,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

export const FilterIcon: Story = {
  args: {
    icon: Icon.FILTER,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

export const ChevronRightIcon: Story = {
  args: {
    icon: Icon.CHEVRON_RIGHT,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

export const ChevronLeftIcon: Story = {
  args: {
    icon: Icon.CHEVRON_LEFT,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

export const HeartIcon: Story = {
  args: {
    icon: Icon.HEART,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

export const ShoppingBagIcon: Story = {
  args: {
    icon: Icon.SHOPPING_BAG,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

export const ArrowRightIcon: Story = {
  args: {
    icon: Icon.ARROW_RIGHT,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

export const ArrowProfileIcon: Story = {
  args: {
    icon: Icon.PROFILE,
  },
  play: async ({ canvasElement }) => {
    validateIconPresence(canvasElement);
  },
};

function validateIconPresence(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  const iconElement = canvas.getByRole('img', { name: 'Icon' });
  expect(iconElement).toBeInTheDocument();
  expect(iconElement).toHaveStyle("color: rgb(0, 0, 0)");
}