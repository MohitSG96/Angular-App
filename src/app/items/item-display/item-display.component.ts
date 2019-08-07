import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ItemService} from '../item.service';
import {Item} from '../item';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  private item$: Observable<Item>;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ItemService
  ) { }

  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getItem(params.get('id'))
      )
    );
  }

}
