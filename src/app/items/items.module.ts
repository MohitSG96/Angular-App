import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemDisplayComponent } from './item-display/item-display.component';
import {FormsModule} from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import {BadgeModule, BreadcrumbModule, IconsModule, WavesModule, ChartsModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [ItemDisplayComponent, ItemListComponent, ItemListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,
    WavesModule,
    BreadcrumbModule,
    BadgeModule,
    IconsModule,
    ChartsModule
  ]
})

export class ItemsModule { }
