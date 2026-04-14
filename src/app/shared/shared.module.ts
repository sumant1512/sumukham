import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { GiftCollectionsSectionComponent } from './gift-collections-section/gift-collections-section.component';
import { GiftCollectionComponent } from '../home/gift-collection/gift-collection.component';

@NgModule({
  declarations: [ProductCardComponent, GiftCollectionsSectionComponent, GiftCollectionComponent],
  imports: [CommonModule],
  exports: [ProductCardComponent, GiftCollectionsSectionComponent, GiftCollectionComponent],
})
export class SharedModule {}
