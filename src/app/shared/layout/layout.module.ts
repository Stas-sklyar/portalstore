import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SvgLoaderComponent } from './svg-loader/svg-loader.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SvgLoaderComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SvgLoaderComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LayoutModule { }
