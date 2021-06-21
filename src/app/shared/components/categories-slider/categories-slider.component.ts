import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-categories-slider',
  styleUrls: ['./categories-slider.component.scss'],
  template: `
  <section class="cat-slider-wrap">
  <div class="container">
      <div class="row">
          <div class="col-md-4">
              <swiper [navigation]="true" [pagination]="{ clickable: true, type: 'bullets' }"
                  [scrollbar]="{ draggable: true }" [autoplay]="{ delay: 3500 }" [slidesPerView]="1">
                  <div class="cat-slider">
                      <div class="cat-slider__title">ורדים</div>
                      <div class="swiper-container cat-slider__list js-cat-slider">
                          <div class="swiper-wrapper">
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>

                          </div>
                          <div class="swiper-pagination"></div>
                      </div>
                  </div>
              </swiper>
          </div>


          <div class="col-md-4">
              <swiper [navigation]="true" [pagination]="{ clickable: true, type: 'bullets' }"
                  [scrollbar]="{ draggable: true }" [autoplay]="{ delay: 3500 }" [slidesPerView]="1">
                  <div class="cat-slider">
                      <div class="cat-slider__title">פרחים בסלים</div>
                      <div class="swiper-container cat-slider__list js-cat-slider">
                          <div class="swiper-wrapper">
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                          </div>
                          <div class="swiper-pagination"></div>
                      </div>
                  </div>
              </swiper>
          </div>


          <div class="col-md-4">
              <swiper [navigation]="true" [pagination]="{ clickable: true, type: 'bullets' }"
                  [scrollbar]="{ draggable: true }" [autoplay]="{ delay: 3500 }" [slidesPerView]="1">
                  <div class="cat-slider">
                      <div class="cat-slider__title">פרחים בסלים</div>
                      <div class="swiper-container cat-slider__list js-cat-slider">
                          <div class="swiper-wrapper">
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                              <ng-template swiperSlide>
                                  <div class="swiper-slide">
                                      <app-goods-slider-item></app-goods-slider-item>
                                  </div>
                              </ng-template>
                          </div>
                          <div class="swiper-pagination"></div>
                      </div>
                  </div>
              </swiper>
          </div>

      </div>
  </div>
</section>
  `
})
export class CategoriesSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
