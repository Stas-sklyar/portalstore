import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-slider-goods-half',
  styleUrls: ['./slider-goods-half.component.scss'],
  template: `
  <section class="slider-goods-wrap slider-goods-wrap_half">
    <div class="container">
        <div class="row">

            <div class="col-md-6">
                <swiper [navigation]="true" [pagination]="{ clickable: true, type: 'bullets' }"
                    [scrollbar]="{ draggable: true }" [autoplay]="{ delay: 2500 }">
                    <div class="swiper-container slider-goods js-slider-goods-half">
                        <div class="slider-goods__top">
                            <div class="slider-goods__title">פרחים בסלים</div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="swiper-wrapper">
                            <ng-template swiperSlide>
                                <div class="swiper-slide">
                                    <app-goods-half-item></app-goods-half-item>
                                </div>
                            </ng-template>
                            <ng-template swiperSlide>
                                <div class="swiper-slide">
                                    <app-goods-half-item></app-goods-half-item>
                                </div>
                            </ng-template>
                            <ng-template swiperSlide>
                                <div class="swiper-slide">
                                    <app-goods-half-item></app-goods-half-item>
                                </div>
                            </ng-template>

                        </div>
                    </div>
                </swiper>
            </div>

            <div class="col-md-6">
                <swiper [navigation]="true" [pagination]="{ clickable: true, type: 'bullets' }"
                    [scrollbar]="{ draggable: true }" [autoplay]="{ delay: 2500 }">
                    <div class="swiper-container slider-goods js-slider-goods-half">
                        <div class="slider-goods__top">
                            <div class="slider-goods__title">פרחים בסלים</div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="swiper-wrapper">
                            <ng-template swiperSlide>
                                <div class="swiper-slide">
                                    <app-goods-half-item></app-goods-half-item>
                                </div>
                            </ng-template>
                            <ng-template swiperSlide>
                                <div class="swiper-slide">
                                    <app-goods-half-item></app-goods-half-item>
                                </div>
                            </ng-template>
                            <ng-template swiperSlide>
                                <div class="swiper-slide">
                                    <app-goods-half-item></app-goods-half-item>
                                </div>
                            </ng-template>
                        </div>
                    </div>
                </swiper>
            </div>

        </div>
    </div>
</section>
  `
})
export class SliderGoodsHalfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
