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
    const activeTabs = this.tabs.filter(tab => tab.isActive);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    if (tab.disabled) {
      return;
    }
    this.tabs.toArray().forEach(t => t.isActive = false);
    tab.isActive = true;
  }

  selectTabByIndex(index: number) {
    const tabsArray = this.tabs.toArray();
    if (tabsArray[index]) {
      tabsArray.forEach(tab => tab.isActive = false); // Deselect all tabs
      tabsArray[index].isActive = true; // Select the desired tab
    }
  }
}