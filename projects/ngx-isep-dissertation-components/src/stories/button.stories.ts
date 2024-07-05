import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from '../lib/button/button.component';
import { ButtonColor } from '../lib/button/button-color.enum';
import { ButtonSize } from '../lib/button/button-size.enum';
import { ButtonIcon } from '../lib/button/button-icon.enum';
import { userEvent, within, expect } from '@storybook/test';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [BrowserModule],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(ButtonColor),
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
    },
    icon: {
      control: 'select',
      options: Object.values(ButtonIcon),
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    buttonClick: { action: 'buttonClick' },
  },
} as Meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    color: ButtonColor.BLACK,
    size: ButtonSize.MEDIUM,
    label: 'Button',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button' });

    await userEvent.click(button);
  },
};

export const WithIcon: Story = {
  args: {
    color: ButtonColor.CORAL,
    size: ButtonSize.LARGE,
    label: 'Button',
    icon: ButtonIcon.HEART,
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'icon Button' });
    const icon = button.getElementsByClassName('button-icon').item(0);
    expect(icon).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  args: {
    color: ButtonColor.WHITE,
    size: ButtonSize.SMALL,
    label: 'Button',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: 'Button' });
    expect(button).toHaveAttribute('aria-disabled', 'true');
  },
};