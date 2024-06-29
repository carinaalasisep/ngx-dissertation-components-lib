// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from '../lib/checkbox/checkbox.component';

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
        label: 'Checkbox Label',
    }
};

export const Checked: Story = {
    args: {
        checked: true,
        label: 'Checkbox Label',
    }
};

export const WithCustomLabel: Story = {
    args: {
        checked: false,
        label: 'Custom Label',
    }
};