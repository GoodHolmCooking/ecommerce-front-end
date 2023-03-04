import { Component } from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  inventory: Product[] = [
    new Product("Milk", 3.62, 2),
    new Product("Bread", 2.98, 12),
    new Product("Pickles", 3.76, 3),
    new Product("Milk", 3.62, 2),
    new Product("Bread", 2.98, 12),
    new Product("Pickles", 3.76, 3),
    new Product("Milk", 3.62, 2),
    new Product("Bread", 2.98, 12),
    new Product("Pickles", 3.76, 3),
    new Product("Milk", 3.62, 2),
    new Product("Bread", 2.98, 12),
    new Product("Pickles", 3.76, 3),
    new Product("Milk", 3.62, 2),
    new Product("Bread", 2.98, 12),
    new Product("Pickles", 3.76, 3)
  ];
}
