import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class InventoryApp {
  //logic
  products: Product[];

  constructor(){
    this.products = [
      new Product(
      'NiceHat', 
      'A Nice Black Hat', 
      '../resources/images/products/black-hat.jpg', 
      ['Men', 'Accessories', 'Hats'],
      30),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '../resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        243
      )  
    ];
  }

  productWasSelected(product: Product): void{
    console.log('Product clicked: ' , product);
  }
}
