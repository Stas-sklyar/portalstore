import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailV2Component } from './article-detail-v2/article-detail-v2.component';
import { ArticleDetailV3Component } from './article-detail-v3/article-detail-v3.component';
import { ArticleDetailV1Component } from './article-detail-v1/article-detail-v1.component';



@NgModule({
  declarations: [ArticleDetailV2Component, ArticleDetailV3Component, ArticleDetailV1Component],
  exports: [
    ArticleDetailV1Component,
    ArticleDetailV2Component,
    ArticleDetailV3Component
  ],
  imports: [
    CommonModule
  ]
})
export class ArticleDetailModule { }
