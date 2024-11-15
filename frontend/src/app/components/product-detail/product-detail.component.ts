import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    // Obtiene el 'id' del producto desde la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          this.errorMessage = 'Error al cargar el producto';
          console.error(error);
        }
      );
    }
  }
}
