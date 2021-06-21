import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainV1Component } from './main-v1/main-v1.component';
import { MainV2Component } from './main-v2/main-v2.component';
import { MainV3Component } from './main-v3/main-v3.component';
import { MainMobileComponent } from './main-mobile/main-mobile.component';
import { SliderGoodsHalfComponent } from './main-v3/slider-goods-half/slider-goods-half.component';
import { GoodsHalfItemComponent } from './main-v3/slider-goods-half/goods-half-item/goods-half-item.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [MainV1Component, MainV2Component, MainV3Component, MainMobileComponent,
    SliderGoodsHalfComponent,
    GoodsHalfItemComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    [SwiperModule]
  ]
})
export class MainModule { }
