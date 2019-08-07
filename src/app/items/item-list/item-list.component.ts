import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  itemService: ItemService;
  selectedProductId: string;

  constructor() {
    ItemService.getItems()
      .subscribe( items => this.items = items);
  }

  ngOnInit() {  }

  onSelect(item: Item) {
    this.selectedProductId = item.id;
  }
}
