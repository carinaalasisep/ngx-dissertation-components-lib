// .storybook.ts
import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../lib/tabs/tabs.component';
import { TabComponent } from '../lib/tabs/tab/tab.component';

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
        <isep-lib-tab title="Tab 1" [isActive]="true">Content for Tab 1</isep-lib-tab>
        <isep-lib-tab title="Tab 2">Content for Tab 2</isep-lib-tab>
        <isep-lib-tab title="Tab 3" [disabled]="true">Content for Tab 3</isep-lib-tab>
      </isep-lib-tabs>
    `,
  }),
  args: {},
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
};

export const PreSelectedTab: Story = {
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
};