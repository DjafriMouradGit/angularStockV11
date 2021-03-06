import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from '../../../state/product.state';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

 @Output() productEventEmitter  : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productEventEmitter.emit({type : ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({type : ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts() {
    this.productEventEmitter.emit({type : ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    this.productEventEmitter.emit({type : ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    this.productEventEmitter.emit({type : ProductActionsTypes.SEARCH_PRODUCTS, payLoad : dataForm});
  }
}
