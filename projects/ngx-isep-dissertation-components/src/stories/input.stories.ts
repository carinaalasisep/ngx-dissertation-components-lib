// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from '../lib/input/input.component';

export default {
    title: 'Components/Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            declarations: [InputComponent],
            imports: [BrowserModule, FormsModule],
        }),
    ],
    argTypes: {
        width: { control: 'number' },
        height: { control: 'number' },
        placeholder: { control: 'text' },
        errorLabel: { control: 'boolean' },
        valueChange: { action: 'valueChange' },
    },
} as Meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
    args: {
        width: 245,
        height: 32,
        placeholder: 'Enter text',
        errorLabel: false,
    }
};

export const WithErrorLabel: Story = {
    args: {
        width: 245,
        height: 32,
        placeholder: 'Enter text',
        errorLabel: true,
    }
};

export const CustomSize: Story = {
    args: {
        width: 300,
        height: 40,
        placeholder: 'Custom size input',
        errorLabel: false,
    }
};