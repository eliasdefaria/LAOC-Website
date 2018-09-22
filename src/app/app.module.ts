import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent, SocialComponent } from './shared';
import { HomeComponent } from './home/home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NewsletterRegisterComponent, DonateComponent, ShirtComponent } from './shared';
import { MatSnackBarModule, MatDialogModule } from '@angular/material';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    GetInvolvedComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    SocialComponent,
    NewsletterRegisterComponent,
    DonateComponent,
    ShopComponent,
    ShirtComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewsletterRegisterComponent,
    DonateComponent,
    ShirtComponent
  ]
})
export class AppModule {}
