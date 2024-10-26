import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.scss'
})
export class ProductCardsComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
