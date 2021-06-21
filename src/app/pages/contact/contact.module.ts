import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactV1Component } from './contact-v1/contact-v1.component';
import { ContactV2Component } from './contact-v2/contact-v2.component';
import { ContactV3Component } from './contact-v3/contact-v3.component';



@NgModule({
  declarations: [ContactV1Component, ContactV2Component, ContactV3Component],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
