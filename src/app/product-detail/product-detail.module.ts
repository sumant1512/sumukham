import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductDetailRoutingModule,
    SharedModule,
  ],
})
export class ProductDetailModule {}
