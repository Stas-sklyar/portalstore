import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogV1Component} from "./catalog-v1/catalog-v1.component";
import {CatalogV2Component} from "./catalog-v2/catalog-v2.component";
import {CatalogV3Component} from "./catalog-v3/catalog-v3.component";
import { CatalogV4Component } from "./catalog-v4/catalog-v4.component";
import {ComponentsModule} from "../../../shared/components/components.module";



@NgModule({
  declarations: [ CatalogV1Component, CatalogV2Component, CatalogV3Component, CatalogV4Component ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class CatalogListModule { }
