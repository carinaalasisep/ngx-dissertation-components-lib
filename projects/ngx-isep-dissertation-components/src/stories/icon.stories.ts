// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../lib/icon/icon.component';
import { Icon } from '../lib/icon/icon.enum';
import { IconColor } from '../lib/icon/icon-color.enum';

export default {
  title: 'Components/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
      imports: [BrowserModule, CommonModule],
    }),
  ],
  argTypes: {
    icon: { control: 'select', options: Object.values(Icon) },
    color: { control: 'select', options: Object.values(IconColor) },
  },
} as Meta<IconComponent>;

type Story = StoryObj<IconComponent>;

export const CloseIcon: Story = {
  args: {
    icon: Icon.CLOSE,
  },
};

export const FilterIcon: Story = {
  args: {
    icon: Icon.FILTER,
  },
};

export const ChevronRightIcon: Story = {
  args: {
    icon: Icon.CHEVRON_RIGHT,
  },
};

export const ChevronLeftIcon: Story = {
  args: {
    icon: Icon.CHEVRON_LEFT,
  },
};

export const HeartIcon: Story = {
  args: {
    icon: Icon.HEART,
  },
};

export const ShoppingBagIcon: Story = {
  args: {
    icon: Icon.SHOPPING_BAG,
  },
};

export const ArrowRightIcon: Story = {
  args: {
    icon: Icon.ARROW_RIGHT,
  },
};