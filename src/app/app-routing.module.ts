import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //path for landing page route
  { path: 'about', component: AboutComponent }, //path for about route
  { path: 'getinvolved', component: GetInvolvedComponent}, //path for get involved route
  { path: 'shop', component: ShopComponent } //path for shop component
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
