// .storybook.ts
import { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MultiSelectComponent } from "../lib/multi-select/multi-select.component";
import { MultiSelectModel } from "../lib/multi-select/multi-select-model";
import { CheckboxModule } from "../public-api";
import { within, expect, fireEvent } from "@storybook/test";

export default {
  title: "Components/MultiSelect",
  component: MultiSelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [MultiSelectComponent],
      imports: [BrowserModule, FormsModule, CheckboxModule],
    }),
  ],
  argTypes: {
    title: { control: "text" },
    options: { control: "object" },
    errorLabel: { control: "boolean" },
    selectionChange: { action: "selectionChange" },
  },
} as Meta;

type Story = StoryObj<MultiSelectComponent>;

const exampleOptions: MultiSelectModel[] = [
  { id: 1, name: "Option 1", isSelected: false },
  { id: 2, name: "Option 2", isSelected: false },
  { id: 3, name: "Option 3", isSelected: false },
];

const exampleCheckedOptions: MultiSelectModel[] = [
    { id: 1, name: "Option 1", isSelected: true },
      { id: 2, name: "Option 2", isSelected: false },
      { id: 3, name: "Option 3", isSelected: true },
];

export const Default: Story = {
  args: {
    title: "Select Options",
    options: exampleOptions,
    errorLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Select Options")).toBeVisible();
    fireEvent.click(canvas.getByText("Select Options"));

    for (const option of exampleOptions) {
      const optionElement = canvas.getByText(option.name);
      expect(optionElement).toBeVisible();
      expect(
        optionElement.parentElement?.querySelector('input[type="checkbox"]')
      ).not.toBeChecked();
    }
  },
};

export const WithErrorLabel: Story = {
  args: {
    title: "Error label text",
    options: exampleOptions,
    errorLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const errorLabelElement = canvas.getByText("Error label text");
    expect(errorLabelElement).toBeVisible();
    const errorSelect = canvas.getByRole("select");
    expect(errorSelect).toHaveClass("multi-select error");
  },
};

export const PreSelectedOptions: Story = {
  args: {
    title: "Select Options",
    options: exampleCheckedOptions,
    errorLabel: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("Select Options")).toBeVisible();
    fireEvent.click(canvas.getByText("Select Options"));

    for (const option of exampleCheckedOptions) {
      const optionElement = canvas.getByText(option.name);
      expect(optionElement).toBeVisible();
      if (option.isSelected) {
        expect(
          optionElement.parentElement?.querySelector('input[type="checkbox"]')
        ).toBeChecked();
      } else {
        expect(
          optionElement.parentElement?.querySelector('input[type="checkbox"]')
        ).not.toBeChecked();
      }
    }
  },
};
