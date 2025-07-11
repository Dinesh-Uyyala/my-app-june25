import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProductsComponent } from './about-products/about-products.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    AboutProductsComponent,
    AboutCompanyComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule { }
