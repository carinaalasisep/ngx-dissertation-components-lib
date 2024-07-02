// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from '../lib/select/select.component';
import { SelectModel } from '../lib/select/select-model';
import { within, expect, fireEvent } from "@storybook/test";

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
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      // Click the select to open dropdown
      const selectElement = canvas.getByText('Select an Option');
      await fireEvent.focus(selectElement);
  
      // Check if the options are present
      const option1 = canvas.getByText('Option 1');
      const option2 = canvas.getByText('Option 2');
      const option3 = canvas.getByText('Option 3');
  
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
      expect(option3).toBeInTheDocument();
    }
};

export const WithErrorLabel: Story = {
    args: {
        options: exampleOptions,
        label: 'Select an Option',
        errorLabel: true,
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
  
      // Click the select to open dropdown
      const selectElement = canvas.getByRole('select');
      await fireEvent.focus(selectElement);
  
      // Check if the options are present
      const option1 = canvas.getByText('Option 1');
      const option2 = canvas.getByText('Option 2');
      const option3 = canvas.getByText('Option 3');
  
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
      expect(option3).toBeInTheDocument();
  
      // Check if error class is present
      expect(selectElement).toHaveClass('error');
    }
};