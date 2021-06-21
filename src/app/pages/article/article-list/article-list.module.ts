import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListV1Component } from './article-list-v1/article-list-v1.component';
import { ArticleListV2Component } from './article-list-v2/article-list-v2.component';
import { ArticleListV3Component } from './article-list-v3/article-list-v3.component';
import {ComponentsModule} from "../../../shared/components/components.module";



@NgModule({
  declarations: [ArticleListV1Component, ArticleListV2Component, ArticleListV3Component],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class ArticleListModule { }
