// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from '../lib/select/select.component';
import { SelectModel } from '../lib/select/select-model';

export default {
    title: 'Components/Select',
    component: SelectComponent,
    decorators: [
        moduleMetadata({
            declarations: [SelectComponent],
            imports: [BrowserModule, FormsModule],
        }),
    ],
    argTypes: {
        options: { control: 'object' },
        label: { control: 'text' },
        errorLabel: { control: 'boolean' },
        selectedItem: { action: 'selectedItem' },
    },
} as Meta;

type Story = StoryObj<SelectComponent>;

const exampleOptions: SelectModel[] = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
];

export const Default: Story = {
    args: {
        options: exampleOptions,
        label: 'Select an Option',
        errorLabel: false,
    }
};

export const WithErrorLabel: Story = {
    args: {
        options: exampleOptions,
        label: 'Select an Option',
        errorLabel: true,
    }
};