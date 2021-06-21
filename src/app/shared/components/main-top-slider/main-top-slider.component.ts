import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-main-top-slider',
  styleUrls: ['./main-top-slider.component.scss'],

  template: `
    <swiper
      [navigation]="true"
      [pagination]="{ clickable: true, type: 'bullets' }"
      [scrollbar]="{ draggable: true }"
      [autoplay]="{ delay: 3500 }"
    >
      <section class="swiper-container top-slider js-top-slider">

      <div class="swiper-wrapper">

          <ng-template swiperSlide> <app-top-slider-item></app-top-slider-item> </ng-template>
          <ng-template swiperSlide> <app-top-slider-item></app-top-slider-item> </ng-template>
          <ng-template swiperSlide> <app-top-slider-item></app-top-slider-item> </ng-template>
          <ng-template swiperSlide> <app-top-slider-item></app-top-slider-item> </ng-template>

      </div>

      <div class="swiper-button-prev">
          <svg class="icon ic-arrow-left" width="11" height="14">
              <use xlink:href="#ic-arrow-left"></use>
          </svg>
      </div>

      <div class="swiper-button-next">
          <svg class="icon ic-arrow-right" width="11" height="14">
              <use xlink:href="#ic-arrow-right"></use>
          </svg>
      </div>

    </section>
  </swiper>
  `
})
export class MainTopSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
