import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProductDetail } from './product-detail.interface';
import { ProductDetailService } from './product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: IProductDetail | null = null;
  selectedImage = '';
  activeAccordion: 'description' | 'howToUse' | 'specifications' | null =
    'description';
  pincode = '';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductDetailService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
      this.selectedImage = product.images[0];
      this.loading = false;
    });
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  toggleAccordion(
    section: 'description' | 'howToUse' | 'specifications'
  ): void {
    this.activeAccordion = this.activeAccordion === section ? null : section;
  }
}
