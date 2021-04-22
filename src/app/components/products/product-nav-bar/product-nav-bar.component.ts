import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from '../../../state/product.state';
import {EventDriverService} from '../../../state/event.driver.service';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private eventDriverService : EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts() {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts() {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct() {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any) {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.SEARCH_PRODUCTS, payLoad : dataForm});
  }
}
