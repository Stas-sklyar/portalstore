import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import {ComponentsModule} from './components/components.module';
import {DirectivesModule} from './directives/directives.module';


@NgModule({
  declarations: [],
  exports: [
    ComponentsModule,
    DirectivesModule,
    LayoutModule
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    LayoutModule
  ]
})
export class SharedModule { }
