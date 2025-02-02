import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);
  addProduct(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() { }
}
