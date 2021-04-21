import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from '../../../state/product.state';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productsInput$ : Observable<AppDataState<Product[]>> | null = null;
  @Output() productsEventEmitter  : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  readonly DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

  onActionEvent($event: ActionEvent) {
    this.productsEventEmitter.emit($event);
  }
}
