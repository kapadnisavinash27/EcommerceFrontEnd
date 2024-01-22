import { Component } from '@angular/core';
import { Product } from '../product'; 
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-form-component',
  templateUrl: './product-form-component.component.html',
  styleUrls: ['./product-form-component.component.css']
})
export class ProductFormComponentComponent {
  constructor(private service:ProductService){

  }
// Property to store product information as an instance of the Product class
product: Product = new Product('', 0, 0);
message:String='';
// Method to handle form submission
onSubmit() {
  
  console.log('Product Name:', this.product.productName);
  console.log('Product Price:', this.product.productPrice);
  console.log('Product Quantity:', this.product.productQuantity);
  this.service.add(this.product).subscribe((data: String)=>{this.message=data
    
  },(error: any)=>{
    console.log(error);
    this.message = 'Unable to save! Contact Admin';
  });;
  
}
}
