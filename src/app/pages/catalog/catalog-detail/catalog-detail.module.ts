import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDetailV1Component } from './catalog-detail-v1/catalog-detail-v1.component';
import { CatalogDetailV2Component } from './catalog-detail-v2/catalog-detail-v2.component';
import { CatalogDetailV3Component } from './catalog-detail-v3/catalog-detail-v3.component';



@NgModule({
  declarations: [CatalogDetailV1Component, CatalogDetailV2Component, CatalogDetailV3Component],
  imports: [
    CommonModule
  ]
})
export class CatalogDetailModule { }
