// .storybook.ts
import { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { InputComponent } from "../lib/input/input.component";
import { within, expect, fireEvent } from "@storybook/test";
import { IconModule } from "../public-api";

export default {
  title: "Components/Input",
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [BrowserModule, FormsModule, IconModule],
    }),
  ],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    placeholder: { control: "text" },
    errorLabel: { control: "boolean" },
    valueChange: { action: "valueChange" },
    type: { action: "text" }
  },
} as Meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    width: 245,
    height: 32,
    placeholder: "Enter text",
    errorLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole("textbox");

    // Interaction test example: input value and check if it's reflected
    fireEvent.input(inputElement, { target: { value: "Test input" } });
    expect(inputElement).toHaveValue("Test input");
  },
};

export const WithErrorLabel: Story = {
  args: {
    width: 245,
    height: 32,
    placeholder: "Enter text",
    errorLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole("textbox");

    expect(inputElement).toHaveClass("error");
  },
};

export const CustomSize: Story = {
  args: {
    width: 300,
    height: 40,
    placeholder: "Custom size input",
    errorLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputContainer = canvas.getByRole("textbox").parentElement;
    expect(inputContainer).toHaveStyle(`width: 300px`);
    expect(inputContainer).toHaveStyle(`height: 40px`);
  },
};

export const Password: Story = {
  args: {
    width: 245,
    height: 32,
    type: 'password',
    errorLabel: false,
  }, play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole('textbox');
    const toggleIcon = canvas.getByRole('button');

    // Initial state should be password
    expect(inputElement).toHaveAttribute('type', 'password');

    // Click the toggle icon to show the password
    fireEvent.click(toggleIcon);
    expect(inputElement).toHaveAttribute('type', 'text');

    // Click the toggle icon again to hide the password
    fireEvent.click(toggleIcon);
    expect(inputElement).toHaveAttribute('type', 'password');
  }
};
