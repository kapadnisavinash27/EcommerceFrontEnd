import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  

  constructor(private http:HttpClient) { 
}

uri:String='http://localhost:8080/product' ;

add(product: Product ):Observable<any>{
  console.log(product.productName);
  console.log(product.productQuantity);
  console.log(product.productPrice);
  console.log("in service");
    return this.http.post(`${this.uri}/add`,product, {
      responseType: 'text',
    });



}
}