import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { IProductDetail } from './product-detail.interface';

const MOCK_PRODUCT: IProductDetail = {
  id: '1',
  title: 'Brass & Armed Maa Durga Idol Sitting on Lion (3 Idols)',
  images: ['crystal_1.png', 'crystal_2.png', 'crystal_3.png', 'crystal_4.png'],
  rating: 4.5,
  reviews: 2124,
  price: 2499,
  originalPrice: 4999,
  discount: 50,
  description:
    'This beautifully crafted Maa Durga idol is made from premium quality brass and is silver plated for a divine finish. The idol depicts Maa Durga seated on her lion, holding weapons in her multiple hands, symbolizing strength and power. Perfect for home temples, gifting, and festive décor. Each piece is handcrafted by skilled artisans and goes through quality checks before delivery.',
  howToUse:
    'Place the idol in a clean and sacred space in your home temple. Perform daily puja with incense, flowers, and diyas. Clean gently with a soft cloth. Avoid harsh chemicals.',
  specifications: [
    { label: 'Material', value: 'Brass with Silver Plating' },
    { label: 'Height', value: '8 inches' },
    { label: 'Weight', value: '650 grams' },
    { label: 'Finish', value: 'Antique Gold & Silver' },
    { label: 'Idols Included', value: '3 (Maa Durga, Lion, Weapon Set)' },
    { label: 'Country of Origin', value: 'India' },
  ],
  relatedProducts: [
    {
      id: '2',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_1.png',
      rating: 4.3,
      reviews: 1230,
      price: 1599,
    },
    {
      id: '3',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_2.png',
      rating: 4.6,
      reviews: 980,
      price: 2199,
    },
    {
      id: '4',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_3.png',
      rating: 4.7,
      reviews: 3420,
      price: 3499,
    },
    {
      id: '5',
      title: 'Kamdhenu Cow with Calf Idol - Gold & Silver Plated',
      image: 'crystal_4.png',
      rating: 4.4,
      reviews: 760,
      price: 1899,
    },
  ],
};

@Injectable({ providedIn: 'root' })
export class ProductDetailService {
  private readonly apiBase = '/api/products';

  constructor(private http: HttpClient) {}

  getProduct(id: string): Observable<IProductDetail> {
    return this.http
      .get<IProductDetail>(`${this.apiBase}/${id}`)
      .pipe(catchError(() => of({ ...MOCK_PRODUCT, id })));
  }
}
