import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProductsRoutingModule,
    SharedModule,
  ],
})
export class ProductsModule {}
