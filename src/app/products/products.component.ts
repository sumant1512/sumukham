import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../shared/product-card/product-card.interface';

interface Filter {
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  activeCategory = 'Crystals';

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

  products: IProduct[] = [
    { id: '1', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_1.png', rating: 4.5, reviews: 2326, price: 2499 },
    { id: '2', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_2.png', rating: 4.7, reviews: 1840, price: 2999 },
    { id: '3', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_3.png', rating: 4.6, reviews: 2010, price: 2799 },
    { id: '4', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_4.png', rating: 4.8, reviews: 3200, price: 3499 },
    { id: '5', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_1.png', rating: 4.5, reviews: 2326, price: 2499 },
    { id: '6', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_2.png', rating: 4.7, reviews: 1840, price: 2999 },
    { id: '7', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_3.png', rating: 4.6, reviews: 2010, price: 2799 },
    { id: '8', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_4.png', rating: 4.8, reviews: 3200, price: 3499 },
    { id: '9', title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated', image: 'crystal_1.png', rating: 4.5, reviews: 2326, price: 2499 },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.paramsSub = this.route.queryParams.subscribe((params) => {
      if (params['category']) {
        this.activeCategory = params['category'];
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSub?.unsubscribe();
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
