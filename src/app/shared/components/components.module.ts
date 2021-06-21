import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogListItemV1Component } from './catalog-list-item-v1/catalog-list-item-v1.component';
import { CatalogListItemV3Component } from './catalog-list-item-v3/catalog-list-item-v3.component';
import { CatalogListItemV2Component } from './catalog-list-item-v2/catalog-list-item-v2.component';
import { CatalogListItemV4Component } from "./catalog-list-item-v4/catalog-list-item-v4.component";
import { ArticleListComponentV1Component } from "./article-list-component-v1/article-list-component-v1.component";
import { ArticleListComponentV2Component } from "./article-list-component-v2/article-list-component-v2.component";
import { AdvantComponent } from './advant/advant.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { InvitingComponent } from './inviting/inviting.component';
import { OrderDeliveryMethodComponent } from './order-delivery-method/order-delivery-method.component';
import { OrderInfoAboutClientComponent } from './order-info-about-client/order-info-about-client.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { BasketItemComponent } from './basket-item/basket-item.component';
import { DatePopupComponent } from './date-popup/date-popup.component';
import { SelectCityPopupComponent } from './select-city-popup/select-city-popup.component';
import { BasketHeadComponent } from './basket-head/basket-head.component';
import { BasketTotalPriceComponent } from './basket-total-price/basket-total-price.component';
import { CheckOrderComponent } from './check-order/check-order.component';
import { BasketDeliveryComponent } from './basket-delivery/basket-delivery.component';
import { AcceptAgreementComponent } from './accept-agreement/accept-agreement.component';
import { BasketSpoilerComponent } from './basket-spoiler/basket-spoiler.component';
import { MainAboutSiteComponent } from './main-about-site/main-about-site.component';
import { MainTopSliderComponent } from './main-top-slider/main-top-slider.component';
import { MainDeliveryLineComponent } from './main-delivery-line/main-delivery-line.component';
import { TopSliderItemComponent } from './main-top-slider/top-slider-item/top-slider-item.component';
import { MainGoodsSliderComponent } from './main-goods-slider/main-goods-slider.component';
import { GoodsSliderItemComponent } from './main-goods-slider/goods-slider-item/goods-slider-item.component';
import { MainArticleComponent } from './main-article/main-article.component';
import { MapComponent } from './map/map.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';
import { BreadcrumbItemComponent } from './Breadcrumb/breadcrumb-item/breadcrumb-item.component';
import { CounterMinComponent } from './basket-item/counter-min/counter-min.component';
import { CounterMaxComponent } from './basket-item/counter-max/counter-max.component';
import { DeleteItemComponent } from './basket-item/delete-item/delete-item.component';

import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [CatalogListItemV1Component, CatalogListItemV2Component, CatalogListItemV3Component, CatalogListItemV4Component,
    ArticleListComponentV1Component, ArticleListComponentV2Component, AdvantComponent, BreadcrumbComponent, InvitingComponent,
    OrderDeliveryMethodComponent, OrderInfoAboutClientComponent, PaymentMethodComponent, BasketItemComponent, DatePopupComponent,
    SelectCityPopupComponent, BasketHeadComponent, BasketTotalPriceComponent, CheckOrderComponent, BasketDeliveryComponent,
    AcceptAgreementComponent, BasketSpoilerComponent, MainAboutSiteComponent, MainTopSliderComponent,
    MainDeliveryLineComponent, TopSliderItemComponent, MainGoodsSliderComponent,
    GoodsSliderItemComponent, MainArticleComponent, MapComponent, CategoriesSliderComponent,
    BreadcrumbItemComponent, CounterMinComponent, CounterMaxComponent, DeleteItemComponent,
  ],
  exports: [
    CatalogListItemV1Component,
    CatalogListItemV2Component,
    CatalogListItemV3Component,
    CatalogListItemV4Component,
    ArticleListComponentV1Component,
    ArticleListComponentV2Component,
    AdvantComponent,
    BreadcrumbComponent,
    InvitingComponent,
    OrderDeliveryMethodComponent,
    OrderInfoAboutClientComponent,
    PaymentMethodComponent,
    BasketItemComponent,
    DatePopupComponent,
    SelectCityPopupComponent,
    BasketHeadComponent,
    BasketTotalPriceComponent,
    CheckOrderComponent,
    BasketDeliveryComponent,
    AcceptAgreementComponent,
    BasketSpoilerComponent,
    MainAboutSiteComponent,
    MainTopSliderComponent,
    MainDeliveryLineComponent,
    MainGoodsSliderComponent,
    GoodsSliderItemComponent,
    MainArticleComponent,
    MapComponent,
    CategoriesSliderComponent,
    BreadcrumbItemComponent,
    CounterMinComponent,
    CounterMaxComponent,
    DeleteItemComponent
  ],

  imports: [
    CommonModule, [SwiperModule]
  ],

})
export class ComponentsModule { }
