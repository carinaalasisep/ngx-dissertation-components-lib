import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent
  ],
  imports: [CommonModule],
  exports: [
    TabsComponent,
    TabComponent
  ]
})
export class TabsModule { }
