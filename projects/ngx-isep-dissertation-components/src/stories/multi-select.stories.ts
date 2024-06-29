// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MultiSelectComponent } from '../lib/multi-select/multi-select.component';
import { MultiSelectModel } from '../lib/multi-select/multi-select-model';

export default {
    title: 'Components/MultiSelect',
    component: MultiSelectComponent,
    decorators: [
        moduleMetadata({
            declarations: [MultiSelectComponent],
            imports: [BrowserModule, FormsModule],
        }),
    ],
    argTypes: {
        title: { control: 'text' },
        options: { control: 'object' },
        errorLabel: { control: 'boolean' },
        selectionChange: { action: 'selectionChange' },
    },
} as Meta;

type Story = StoryObj<MultiSelectComponent>;

const exampleOptions: MultiSelectModel[] = [
    { id: 1, name: 'Option 1', isSelected: false },
    { id: 2, name: 'Option 2', isSelected: false },
    { id: 3, name: 'Option 3', isSelected: false },
];

export const Default: Story = {
    args: {
        title: 'Select Options',
        options: exampleOptions,
        errorLabel: false,
    }
};

export const WithErrorLabel: Story = {
    args: {
        title: 'Select Options',
        options: exampleOptions,
        errorLabel: true,
    }
};

export const PreSelectedOptions: Story = {
    args: {
        title: 'Select Options',
        options: [
            { id: 1, name: 'Option 1', isSelected: true },
            { id: 2, name: 'Option 2', isSelected: false },
            { id: 3, name: 'Option 3', isSelected: true },
        ],
        errorLabel: false,
    }
};