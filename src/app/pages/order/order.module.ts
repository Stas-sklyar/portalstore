import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderV1Component } from './order-v1/order-v1.component';
import { OrderV2Component } from './order-v2/order-v2.component';
import { OrderV3Component } from './order-v3/order-v3.component';
import { OrderPopupComponent } from './order-popup/order-popup.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { OrderV3DetailsDeliveryComponent } from './order-v3/order-v3-details-delivery/order-v3-details-delivery.component';
import { OrderV3DetailsEventComponent } from './order-v3/order-v3-details-event/order-v3-details-event.component';
import { OrderV3InfoAboutClientComponent } from './order-v3/order-v3-info-about-client/order-v3-info-about-client.component';



@NgModule({
  declarations: [OrderV1Component, OrderV2Component, OrderV3Component, OrderPopupComponent, OrderV3DetailsDeliveryComponent, OrderV3DetailsEventComponent, OrderV3InfoAboutClientComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class OrderModule { }
