import { Component } from '@angular/core';
import {Product} from "../../models/product";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  faPlus = faPlus;
  inventory: Product[] = []

  onAdd() {
    console.log("Product added.");
  }

  ngOnInit() {
    this.fetchPosts();
  }

  constructor(private http: HttpClient) {
  }

  private fetchPosts() {
    this.http.get('http://localhost:8080/inventory').subscribe(posts => {
      Object.entries(posts).forEach(([key, value]) => {
        let product: Product = new Product(value.name, value.price, 10);
        this.inventory.push(product);
      })
    });
  }
}
