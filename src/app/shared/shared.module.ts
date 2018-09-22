import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './embeds/header/header.component';
import { SocialComponent } from './embeds/social/social.component';
import { ShirtComponent } from './embeds/shirt/shirt.component';
import { NsTriggerComponent } from './embeds/ns-trigger/ns-trigger.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SocialComponent
  ],
  declarations: [
    HeaderComponent,
    SocialComponent,
    ShirtComponent,
    NsTriggerComponent
  ]

})
export class SharedModule { }
