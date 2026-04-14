import { Component } from '@angular/core';

@Component({
  selector: 'app-crystal-store',
  templateUrl: './crystal-store.component.html',
  styleUrls: ['./crystal-store.component.scss'],
})
export class CrystalStoreComponent {
  products = [
    {
      id: '1',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_1.png',
      rating: 4.5,
      reviews: 2326,
      price: 2499,
    },
    {
      id: '2',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_2.png',
      rating: 4.7,
      reviews: 1840,
      price: 2999,
    },
    {
      id: '3',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_3.png',
      rating: 4.6,
      reviews: 2010,
      price: 2799,
    },
    {
      id: '4',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_4.png',
      rating: 4.8,
      reviews: 3200,
      price: 3499,
    },
  ];
}
