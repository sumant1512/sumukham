import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-collection',
  templateUrl: './gift-collection.component.html',
  styleUrls: ['./gift-collection.component.scss'],
})
export class GiftCollectionComponent {
  giftCollections = [
    { id: '1', image: 'gift_1.png' },
    { id: '2', image: 'gift_2.png' },
    { id: '3', image: 'gift_3.png' },
    { id: '4', image: 'gift_4.png' },
  ];

  getItemClass(index: number): string {
    if (index === 0) return 'big';
    if (index === 1) return 'wide';
    return 'small';
  }
}
