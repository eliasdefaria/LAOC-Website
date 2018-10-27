import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { MembershipComponent } from './membership/membership.component';
import { NsComponent } from './ns/ns.component';
import { PppComponent } from './ppp/ppp.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //path for landing page route
  { path: 'about', component: AboutComponent }, //path for about route
  { path: 'shop', component: ShopComponent }, //path for shop component
  { path: 'volunteer', component: VolunteerComponent}, //path for volunteer component
  { path: 'membership', component: MembershipComponent}, //path for membership component
  { path: 'ns', component: NsComponent}, //path for newsletter component
  { path: 'ucla_ppp', component: PppComponent}
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
