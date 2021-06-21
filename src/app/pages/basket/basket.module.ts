import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketV1Component } from './basket-v1/basket-v1.component';
import { BasketV2Component } from './basket-v2/basket-v2.component';
import { BasketV3Component } from './basket-v3/basket-v3.component';



@NgModule({
  declarations: [BasketV1Component, BasketV2Component, BasketV3Component],
  imports: [
    CommonModule
  ]
})
export class BasketModule { }
