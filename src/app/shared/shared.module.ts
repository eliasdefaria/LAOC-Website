import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './embeds/header/header.component';
import { SocialComponent } from './embeds/social/social.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SocialComponent
  ],
  declarations: [HeaderComponent, SocialComponent]
})
export class SharedModule { }
