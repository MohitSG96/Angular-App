import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemDisplayComponent} from './item-display/item-display.component';

const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'item/:id', component: ItemDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
