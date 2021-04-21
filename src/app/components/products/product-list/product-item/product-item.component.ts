import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, ProductActionsTypes} from '../../../../state/product.state';
import {Product} from '../../../../model/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product ?: Product;
  @Output() productsEventEmitter  : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(product: Product) {
    this.productsEventEmitter.emit({type : ProductActionsTypes.SELECT_PRODUCT, payLoad : product});
  }

  onDelete(product: Product) {
    this.productsEventEmitter.emit({type : ProductActionsTypes.DELETE_PRODUCT, payLoad : product});
  }

  onUpdate(product: Product) {
    this.productsEventEmitter.emit({type : ProductActionsTypes.EDIT_PRODUCT, payLoad : product});
  }
}
