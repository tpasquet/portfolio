import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
