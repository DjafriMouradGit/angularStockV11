import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {ProductAddComponent} from './components/product-add/product-add.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

export const APP_ROUTE: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'newProduct', component: ProductAddComponent },
  { path: 'editProduct/:id', component: ProductEditComponent },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(APP_ROUTE,
      {
        preloadingStrategy: PreloadAllModules
      })
  ]
})
export class AppRoutingModule { }
