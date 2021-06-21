import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-main-v3',
  styleUrls: ['./main-v3.component.scss'],
  template: `
  <!-- здесь нужно доделать -->
  <main>
  <app-main-about-site></app-main-about-site>
  <app-main-delivery-line></app-main-delivery-line>

  <app-main-top-slider></app-main-top-slider>

  <section class="slider-goods-wrap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="slider-title d-md-none">
            <div class="slider-title__content">
              <div class="slider-title__item active">מבצעים חמים</div>
              <div class="slider-title__item">זרי פרחים</div>
              <div class="slider-title__item">פרחים בסלים</div>
              <div class="slider-title__item">ורדים</div>
              <div class="slider-title__item">פרחים בסלים</div>
              <div class="slider-title__item">ורדים</div>
            </div>
            <div class="slider-title__arr slider-title__arr_prev">
              <svg class="icon ic-arrow-left" width="16" height="27">
                <use xlink:href="#ic-arr-left"></use>
              </svg>
            </div>
            <div class="slider-title__arr slider-title__arr_next">
              <svg class="icon ic-arrow-right" width="16" height="27">
                <use xlink:href="#ic-arr-right"></use>
              </svg>
            </div>
          </div>
          <swiper [navigation]="true" [pagination]="{ clickable: true, type: 'bullets' }"
            [scrollbar]="{ draggable: true }" [autoplay]="{ delay: 2500 }">
            <div class="swiper-container slider-goods-title js-slider-goods">
              <div class="swiper-wrapper">
                <ng-template swiperSlide>
                  <div class="swiper-slide">
                    <div class="goods-item-head d-none d-md-block">מבצעים חמים</div>
                    <app-goods-half-item></app-goods-half-item>
                  </div>
                </ng-template>
                <ng-template swiperSlide>
                  <div class="swiper-slide">
                    <div class="goods-item-head d-none d-md-block">מבצעים חמים</div>
                    <app-goods-half-item></app-goods-half-item>
                  </div>
                </ng-template>
                <ng-template swiperSlide>
                  <div class="swiper-slide">
                    <div class="goods-item-head d-none d-md-block">מבצעים חמים</div>
                    <app-goods-half-item></app-goods-half-item>
                  </div>
                </ng-template>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </swiper>
        </div>
      </div>
    </div>
  </section>

  <app-slider-goods-half></app-slider-goods-half>

  <app-main-article></app-main-article>

  <app-map></app-map>

</main>
  `
})
export class MainV3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
