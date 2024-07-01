// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from '../lib/checkbox/checkbox.component';
import { userEvent, within, expect } from '@storybook/test';

export default {
    title: 'Components/Checkbox',
    component: CheckboxComponent,
    decorators: [
        moduleMetadata({
            declarations: [CheckboxComponent],
            imports: [],
        }),
    ],
    argTypes: {
        checked: { control: 'boolean' },
        label: { control: 'text' },
        change: { action: 'change' },
    },
} as Meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
    args: {
        checked: false,
        label: '',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const checkbox = canvas.getByRole('checkbox');
        await userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
      },
};

export const WithCustomLabel: Story = {
    args: {
        checked: false,
        label: 'Custom Label',
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const checkbox = canvas.getByRole('checkbox');
      const label = canvas.getByText('Custom Label');
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(label).toBeInTheDocument();
    },
};