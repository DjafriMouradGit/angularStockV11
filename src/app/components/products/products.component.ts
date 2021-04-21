import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../service/products.service';
import {Product} from '../../model/product.model';
import {Observable, of} from 'rxjs';
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from '../../state/product.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ : Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productsService: ProductsService,
              private router : Router) {
  }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.products$ = this.productsService.getAllProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage :err.message}))
    );
  }

  onGetSelectedProducts() {
    this.products$ = this.productsService.getSelectedProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage :err.message}))
    );
  }

  onGetAvailableProducts() {
    this.products$ = this.productsService.getAvailableProducts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage :err.message}))
    );
  }

  onSearch(dataForm:any) {
    this.products$ = this.productsService.searchProducts(dataForm.keyWord).pipe(
      map(data => ({dataState: DataStateEnum.LOADED,data:data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage :err.message}))
    );
  }

  onSelected(p: Product) {
     this.productsService.select(p)
       .subscribe(data =>
       {
         // On charge juste cette donnée c'est pas évident de charger toute la liste
         p.selected = data.selected;
       })
  }

  onDelete(p: Product) {
    this.productsService.delete(p)
      .subscribe(data =>
      {
         this.onGetAllProducts();
      })
  }

  onNewProduct() {
     this.router.navigateByUrl("/newProduct");
  }

  onUpdate(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id);
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionsTypes.GET_ALL_PRODUCTS: this.onGetAllProducts(); break;
      case ProductActionsTypes.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts(); break;
      case ProductActionsTypes.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts(); break;
      case ProductActionsTypes.SEARCH_PRODUCTS: this.onSearch($event.payLoad); break;
      case ProductActionsTypes.NEW_PRODUCT: this.onNewProduct(); break;
      case ProductActionsTypes.SELECT_PRODUCT: this.onSelected($event.payLoad); break;
      case ProductActionsTypes.EDIT_PRODUCT: this.onUpdate($event.payLoad); break;
      case ProductActionsTypes.DELETE_PRODUCT: this.onDelete($event.payLoad); break;
    }
  }
}
