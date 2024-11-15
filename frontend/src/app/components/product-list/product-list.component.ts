import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
