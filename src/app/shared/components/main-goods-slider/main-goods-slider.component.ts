import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);


@Component({
  selector: 'app-main-goods-slider',
  styleUrls: ['./main-goods-slider.component.scss'],

  template: `
  <section class="slider-goods-wrap">
    <swiper [navigation]="true"
            [pagination]="{ clickable: true, type: 'bullets' }"
            [scrollbar]="{ draggable: true }"
            [autoplay]="{ delay: 2500 }"
    >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="swiper-container slider-goods js-slider-goods">
                        <div class="slider-goods__top">
                            <div class="slider-goods__title">מבצעים חמים</div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="swiper-wrapper">
                            <ng-template swiperSlide> <div class="swiper-slide">
                                <app-goods-slider-item swiperSlide></app-goods-slider-item>
                            </div></ng-template>
                            <ng-template swiperSlide> <div class="swiper-slide">
                                <app-goods-slider-item swiperSlide></app-goods-slider-item>
                            </div></ng-template>
                            <ng-template swiperSlide> <div class="swiper-slide">
                                <app-goods-slider-item swiperSlide></app-goods-slider-item>
                            </div></ng-template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </swiper>
</section>
  `
})
export class MainGoodsSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
