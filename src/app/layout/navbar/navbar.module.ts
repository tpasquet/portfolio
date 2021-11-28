import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [
    ContactMeComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
