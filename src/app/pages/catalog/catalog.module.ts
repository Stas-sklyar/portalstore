import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CatalogDetailModule } from "./catalog-detail/catalog-detail.module";
import { CatalogListModule } from "./catalog-list/catalog-list.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogDetailModule,
    CatalogListModule,
  ]
})
export class CatalogModule { }
