import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from "@angular/router";
import { PagesModule } from "./pages/pages.module";


import {ArticleDetailV1Component} from "./pages/article/article-detail/article-detail-v1/article-detail-v1.component";
import {ArticleDetailV2Component} from "./pages/article/article-detail/article-detail-v2/article-detail-v2.component";
import {ArticleDetailV3Component} from "./pages/article/article-detail/article-detail-v3/article-detail-v3.component";
import {ArticleListV1Component} from "./pages/article/article-list/article-list-v1/article-list-v1.component";
import {ArticleListV2Component} from "./pages/article/article-list/article-list-v2/article-list-v2.component";
import {ArticleListV3Component} from "./pages/article/article-list/article-list-v3/article-list-v3.component";
import {MainV1Component} from "./pages/main/main-v1/main-v1.component";
import {MainV2Component} from "./pages/main/main-v2/main-v2.component";
import {MainV3Component} from "./pages/main/main-v3/main-v3.component";
import {MainMobileComponent} from "./pages/main/main-mobile/main-mobile.component";
import {CatalogDetailV1Component} from "./pages/catalog/catalog-detail/catalog-detail-v1/catalog-detail-v1.component";
import {CatalogDetailV2Component} from "./pages/catalog/catalog-detail/catalog-detail-v2/catalog-detail-v2.component";
import {CatalogDetailV3Component} from "./pages/catalog/catalog-detail/catalog-detail-v3/catalog-detail-v3.component";
import {CatalogV1Component} from "./pages/catalog/catalog-list/catalog-v1/catalog-v1.component";
import {CatalogV2Component} from "./pages/catalog/catalog-list/catalog-v2/catalog-v2.component";
import {CatalogV3Component} from "./pages/catalog/catalog-list/catalog-v3/catalog-v3.component";
import {CatalogV4Component} from "./pages/catalog/catalog-list/catalog-v4/catalog-v4.component";
import {ContactV1Component} from "./pages/contact/contact-v1/contact-v1.component";
import {ContactV2Component} from "./pages/contact/contact-v2/contact-v2.component";
import {ContactV3Component} from "./pages/contact/contact-v3/contact-v3.component";
import {OrderV1Component} from "./pages/order/order-v1/order-v1.component";
import {OrderV2Component} from "./pages/order/order-v2/order-v2.component";
import {OrderV3Component} from "./pages/order/order-v3/order-v3.component";
import {OrderPopupComponent} from "./pages/order/order-popup/order-popup.component";
import {BasketV1Component} from "./pages/basket/basket-v1/basket-v1.component";
import {BasketV2Component} from "./pages/basket/basket-v2/basket-v2.component";
import {BasketV3Component} from "./pages/basket/basket-v3/basket-v3.component";


const appRoutes: Routes = [
  { path: '', component: MainV1Component },
  { path: 'mainv2', component: MainV2Component },
  { path: 'mainv3', component: MainV3Component},
  { path: 'main-mobile', component: MainMobileComponent },


  { path: 'article-v1', component: ArticleDetailV1Component },
  { path: 'article-v2', component: ArticleDetailV2Component },
  { path: 'article-v3', component: ArticleDetailV3Component },
  { path: 'article-list-v1', component: ArticleListV1Component },
  { path: 'article-list-v2', component: ArticleListV2Component },
  { path: 'article-list-v3', component: ArticleListV3Component },

  { path: 'basket-v1', component: BasketV1Component },
  { path: 'basket-v2', component: BasketV2Component },
  { path: 'basket-v3', component: BasketV3Component },

  { path: 'catalog-detail-v1', component: CatalogDetailV1Component },
  { path: 'catalog-detail-v2', component: CatalogDetailV2Component },
  { path: 'catalog-detail-v3', component: CatalogDetailV3Component },
  { path: 'catalog-list-v1', component: CatalogV1Component },
  { path: 'catalog-list-v2', component: CatalogV2Component },
  { path: 'catalog-list-v3', component: CatalogV3Component },
  { path: 'catalog-list-v4', component: CatalogV4Component },


  { path: 'contact-v1', component: ContactV1Component },
  { path: 'contact-v2', component: ContactV2Component },
  { path: 'contact-v3', component: ContactV3Component },


  { path: 'order-v1', component: OrderV1Component },
  { path: 'order-v2', component: OrderV2Component },
  { path: 'order-v3', component: OrderV3Component },
  { path: 'order-popup', component: OrderPopupComponent },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    SharedModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
