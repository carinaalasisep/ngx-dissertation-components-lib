// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../lib/tabs/tabs.component';
import { TabComponent } from '../lib/tabs/tab/tab.component';
import { within, expect, fireEvent } from "@storybook/test";

export default {
  title: 'Components/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabsComponent, TabComponent],
      imports: [BrowserModule, CommonModule],
    }),
  ],
} as Meta<TabsComponent>;

type Story = StoryObj<TabsComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <isep-lib-tabs>
        <isep-lib-tab title="Tab 1">Content for Tab 1</isep-lib-tab>
        <isep-lib-tab title="Tab 2" [isActive]="true">Content for Tab 2</isep-lib-tab>
        <isep-lib-tab title="Tab 3">Content for Tab 3</isep-lib-tab>
      </isep-lib-tabs>
    `,
  }),
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if all tabs are present
    const tab1 = canvas.getByText('Tab 1' );
    const tab2 = canvas.getByText('Tab 2' );
    const tab3 = canvas.getByText('Tab 3' );

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();
    
    // Check if the content for the active tab is displayed
    await fireEvent.click(tab2);
    const activeContent = canvas.getByText('Content for Tab 2');
    expect(activeContent).toBeInTheDocument();
  },
};

export const WithDisabledTab: Story = {
  render: (args) => ({
    props: args,
    template: `
      <isep-lib-tabs>
        <isep-lib-tab title="Tab 1">Content for Tab 1</isep-lib-tab>
        <isep-lib-tab title="Tab 2">Content for Tab 2</isep-lib-tab>
        <isep-lib-tab title="Tab 3" [disabled]="true" [isActive]="true">Content for Tab 3</isep-lib-tab>
      </isep-lib-tabs>
    `,
  }),
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if all tabs are present
    const tab1 = canvas.getByText('Tab 1' );
    const tab2 = canvas.getByText('Tab 2' );
    const tab3 = canvas.getByText('Tab 3' );

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();

    // Check if the third tab is disabled
    expect(tab3).toHaveClass('disabled');

    // Check if the content for the active tab is displayed
    const activeContent = canvas.getByText('Content for Tab 1');
    expect(activeContent).toBeInTheDocument();
  },
};