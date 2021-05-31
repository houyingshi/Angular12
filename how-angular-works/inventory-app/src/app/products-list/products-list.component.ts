import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  inputs:['productList']
})
export class ProductsListComponent implements OnInit {
  productList!: Product[];
  onProductSelected!: EventEmitter<Product>;
  private currentProduct!: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clicked(prodct: Product): void{
    this.currentProduct = prodct;
    this.onProductSelected.emit(prodct);
  }

  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct){
      return false;
    }

    return product.sku == this.currentProduct.sku;
  }
}
