import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Item} from './item';
import { HttpHeaders} from '@angular/common/http';
import {ITEMS} from './mok-items';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  static getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  getItem(id: string) {
    return ItemService.getItems().pipe(
      map((items: Item[]) => items.find(item => item.id === id))
    );
  }
}
