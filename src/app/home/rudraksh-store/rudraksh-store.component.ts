import { Component } from '@angular/core';

@Component({
  selector: 'app-rudraksh-store',
  templateUrl: './rudraksh-store.component.html',
  styleUrls: ['./rudraksh-store.component.scss'],
})
export class RudrakshStoreComponent {
  products = [
    {
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'r1.png',
      rating: 4.5,
      reviews: 2326,
      price: 2499,
    },
    {
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'r2.png',
      rating: 4.7,
      reviews: 1840,
      price: 2999,
    },
    {
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'r3.png',
      rating: 4.6,
      reviews: 2010,
      price: 2799,
    },
    {
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'r4.png',
      rating: 4.8,
      reviews: 3200,
      price: 3499,
    },
  ];
}
