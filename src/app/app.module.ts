import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent, SocialComponent } from './shared';
import { HomeComponent } from './home/home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NewsletterRegisterComponent, DonateComponent, ShirtComponent, NsTriggerComponent } from './shared';
import { MatSnackBarModule, MatDialogModule } from '@angular/material';
import { ShopComponent } from './shop/shop.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { MembershipComponent } from './membership/membership.component';
import { NsComponent } from './ns/ns.component';
import { ApiService } from './shared';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    SocialComponent,
    NewsletterRegisterComponent,
    DonateComponent,
    ShopComponent,
    ShirtComponent,
    VolunteerComponent,
    MembershipComponent,
    NsTriggerComponent,
    NsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewsletterRegisterComponent,
    DonateComponent,
    ShirtComponent
  ]
})
export class AppModule {}
