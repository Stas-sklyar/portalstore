import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ArticleDetailModule } from './article-detail/article-detail.module';
import { ArticleListModule } from './article-list/article-list.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticleDetailModule,
    ArticleListModule,
  ]
})
export class ArticleModule { }
