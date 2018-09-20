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
import { NewsletterRegisterComponent, DonateComponent } from './shared';
import { MatSnackBarModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    GetInvolvedComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    SocialComponent,
    NewsletterRegisterComponent,
    DonateComponent
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
    DonateComponent
  ]
})
export class AppModule {}
