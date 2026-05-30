import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/product-card/product-card.interface';

interface Filter {
  label: string;
  checked: boolean;
}

interface ApiProduct {
  id: number;
  product_name: string;
  product_sku: string;
  description: string | null;
  price: string;
  currency: string;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  template_id: string;
  template_name: string;
  attributes: Record<string, unknown>;
}

interface ApiPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ApiDataWrapper {
  products: ApiProduct[];
  pagination: ApiPagination;
  sync_timestamp: string;
}

interface ApiResponse {
  status: boolean;
  data: {
    data: ApiDataWrapper;
  };
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  activeCategory = 'Crystals';
  products: IProduct[] = [];

  categories = [
    'Crystals',
    'Rudraksha',
    'Brass Idols',
    "Tiger's Eye",
    'Selenite',
    'Citrine',
    'Lapis Local',
  ];

  crystalFilters: Filter[] = [
    { label: 'Amethyst', checked: false },
    { label: 'Diamonds', checked: false },
    { label: 'Citrine', checked: false },
    { label: 'Rose Quartz', checked: false },
    { label: 'Tiger Eye', checked: false },
    { label: 'Black Tourmaline', checked: false },
  ];

  productTypeFilters: Filter[] = [
    { label: 'Ring', checked: false },
    { label: 'Bracelet', checked: false },
    { label: 'Sphere', checked: false },
    { label: 'Tomas', checked: false },
    { label: 'Pendants', checked: false },
    { label: 'Rings', checked: false },
    { label: 'Pyramid', checked: false },
  ];

  private paramsSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
    this.paramsSub = this.route.queryParams.subscribe((params) => {
      if (params['category']) {
        this.activeCategory = params['category'];
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
  }

  fetchProducts(): void {
    this.productsService.getProducts().subscribe(
      (response: any) => {
        const apiProducts = response?.data?.data?.products || [];
        this.products = apiProducts.map((apiProduct: ApiProduct) =>
          this.mapApiProductToProduct(apiProduct),
        );
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      },
    );
  }

  mapApiProductToProduct(apiProduct: ApiProduct): IProduct {
    return {
      id: apiProduct.id.toString(),
      title: apiProduct.product_name,
      image: apiProduct.image_url || 'crystal_1.png',
      rating: 0,
      reviews: 0,
      price: parseFloat(apiProduct.price),
    };
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category.toLocaleLowerCase();
    this.syncQueryParams();
  }

  syncQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        category: this.activeCategory,
      },
      queryParamsHandling: 'merge',
    });
  }
}
