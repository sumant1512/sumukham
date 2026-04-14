import { IProduct } from '../shared/product-card/product-card.interface';

export interface IProductDetail {
  id: string;
  title: string;
  images: string[];
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
  description: string;
  howToUse: string;
  specifications: { label: string; value: string }[];
  relatedProducts: IProduct[];
}
