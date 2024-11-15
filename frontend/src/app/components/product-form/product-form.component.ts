import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  product = { name: '', description: '', price: 0, category: '', stock: 0 };

  constructor(private productService: ProductService) {}

  createProduct() {
    this.productService.createProduct(this.product).subscribe(response => {
      console.log('Producto creado:', response);
    });
  }
}
