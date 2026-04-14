import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { CrystalStoreComponent } from './crystal-store/crystal-store.component';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { PujanBannerComponent } from './pujan-banner/pujan-banner.component';
import { RudrakshStoreComponent } from './rudraksh-store/rudraksh-store.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    CategoryComponent,
    NewArrivalComponent,
    PujanBannerComponent,
    RudrakshStoreComponent,
    CrystalStoreComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
