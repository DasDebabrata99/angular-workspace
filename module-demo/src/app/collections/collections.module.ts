import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [ CollectionsHomeComponent, TableComponent, TabsComponent  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  exports: [ CollectionsHomeComponent]
})
export class CollectionsModule { }
