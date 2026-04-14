import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss'],
})
export class NewArrivalComponent {
  products = [
    {
      id: '1',
      title: 'Ganesh Idol - Black Stone Finish',
      image: 'p_1.png',
      rating: 4.5,
      reviews: 2326,
      price: 2499,
    },
    {
      id: '2',
      title: 'Lakshmi Idol - Antique Gold',
      image: 'p_2.png',
      rating: 4.7,
      reviews: 1840,
      price: 2999,
    },
    {
      id: '3',
      title: 'Shiva Idol - Brass Finish',
      image: 'p_3.png',
      rating: 4.6,
      reviews: 2010,
      price: 2799,
    },
    {
      id: '4',
      title: 'Radha Krishna Idol',
      image: 'p_4.png',
      rating: 4.8,
      reviews: 3200,
      price: 3499,
    },
    {
      id: '5',
      title: 'Hanuman Idol - Black Stone',
      image: 'p_5.png',
      rating: 4.5,
      reviews: 1500,
      price: 2399,
    },
    {
      id: '6',
      title: 'Buddha Idol - White Marble',
      image: 'p_6.png',
      rating: 4.9,
      reviews: 4100,
      price: 4599,
    },
    {
      id: '7',
      title: 'Vishnu Idol - Gold Plated',
      image: 'p_7.png',
      rating: 4.6,
      reviews: 2800,
      price: 3899,
    },
    {
      id: '8',
      title: 'Kamdhenu Cow with Calf Idol',
      image: 'p_8.png',
      rating: 4.5,
      reviews: 2326,
      price: 2499,
    },
  ];
}
