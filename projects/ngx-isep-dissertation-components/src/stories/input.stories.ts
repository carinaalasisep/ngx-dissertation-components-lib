// .storybook.ts
import { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { InputComponent } from "../lib/input/input.component";
import { within, expect, fireEvent } from "@storybook/test";

export default {
  title: "Components/Input",
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [BrowserModule, FormsModule],
    }),
  ],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    placeholder: { control: "text" },
    errorLabel: { control: "boolean" },
    valueChange: { action: "valueChange" },
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
