import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  host = environment.host;
  constructor(private http: HttpClient) {
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/products");
  }

  getSelectedProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/products?selected=true");
  }

  getAvailableProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/products?available=true");
  }

  searchProducts(keyWord:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.host+"/products?name_like="+keyWord);
   }

   select(product : Product):Observable<Product>{
     product.selected = !product.selected;
     return this.http.put<Product>(this.host+"/products/"+product.id,product);
   }

  delete(product : Product):Observable<void>{
    return this.http.delete<void>(this.host+"/products/"+product.id);
  }

  save(product : Product):Observable<Product>{
    return this.http.post<Product>(this.host+"/products/",product);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(this.host+"/products/"+id);
  }

  update(product : Product):Observable<Product>{
    return this.http.put<Product>(this.host+"/products/"+product.id,product);
  }
}
