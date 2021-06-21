import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleModule } from './article/article.module';
import { BasketModule } from './basket/basket.module';
import { CatalogModule } from './catalog/catalog.module';
import { ContactModule } from './contact/contact.module';
import { MainModule } from './main/main.module';
import { OrderModule } from './order/order.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticleModule,
    BasketModule,
    CatalogModule,
    ContactModule,
    MainModule,
    OrderModule,
    SharedModule
  ]
})
export class PagesModule { }
