import { Component, Input } from '@angular/core';
import { IProduct } from './product-card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: IProduct;

  constructor(private readonly router: Router) {}

  navigateToProductDetails(id?: string): void {
    if (id) {
      this.router.navigate(['/products', id]);
    }
  }
}
