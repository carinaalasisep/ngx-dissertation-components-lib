import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'isep-lib-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    if (tab.disabled) {
      return;
    }
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }
}