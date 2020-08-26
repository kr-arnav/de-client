import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardNowrapComponent } from './card-nowrap/card-nowrap.component';
import { CardWrapComponent } from './card-wrap/card-wrap.component';
import { CardImgComponent } from './card-img/card-img.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { DirectivesModule } from '../directives/directives.module';
import { BtnPushComponent } from './btn-push/btn-push.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { SubtitleComponent } from './subtitle/subtitle.component';
import { HrComponent } from './hr/hr.component';
import { MidTitleComponent } from './mid-title/mid-title.component';
import { RegesterWrapComponent } from './regester-wrap/regester-wrap.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CarouselComponent,
    CardNowrapComponent,
    CardWrapComponent,
    CardImgComponent,
    BtnPushComponent,
    PageTitleComponent,
    MobileNavbarComponent,
    SubtitleComponent,
    HrComponent,
    MidTitleComponent,
    RegesterWrapComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    RouterModule,
    DirectivesModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    CarouselComponent,
    CardNowrapComponent,
    CardWrapComponent,
    CardImgComponent,
    PageTitleComponent,
    BtnPushComponent,
    MobileNavbarComponent,
    SubtitleComponent,
    HrComponent,
    MidTitleComponent,
    RegesterWrapComponent
  ]
})
export class WrapperModule { }
