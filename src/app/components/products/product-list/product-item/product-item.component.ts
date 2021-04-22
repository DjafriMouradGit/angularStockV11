import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ActionEvent, AppDataState, ProductActionsTypes} from '../../../../state/product.state';
import {Product} from '../../../../model/product.model';
import {EventDriverService} from '../../../../state/event.driver.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product ?: Product;

  constructor(private eventDriverService : EventDriverService) { }

  ngOnInit(): void {
  }

  onSelected(product: Product) {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.SELECT_PRODUCT, payLoad : product});
  }

  onDelete(product: Product) {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.DELETE_PRODUCT, payLoad : product});
  }

  onUpdate(product: Product) {
    this.eventDriverService.publishEvent({type : ProductActionsTypes.EDIT_PRODUCT, payLoad : product});
  }
}
