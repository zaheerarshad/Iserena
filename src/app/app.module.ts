import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LightgalleryModule} from 'lightgallery/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OurEpicBattleComponent } from './our-epic-battle/our-epic-battle.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWePromisComponent } from './what-we-promis/what-we-promis.component';
import { AlwaysPadContentsComponent } from './always-pad-contents/always-pad-contents.component';
import { OnlyheadermenuComponent } from './onlyheadermenu/onlyheadermenu.component';
import { AboutAlwaysComponent } from './about-always/about-always.component';
import { TipsForGirlsAndParentsComponent } from './tips-for-girls-and-parents/tips-for-girls-and-parents.component';
import { MyPeriodsComponent } from './my-periods/my-periods.component';
import { PubertyComponent } from './puberty/puberty.component';
import { TipsForParentsComponent } from './tips-for-parents/tips-for-parents.component';
import { TipsForWomenComponent } from './tips-for-women/tips-for-women.component';
import { MenstrualCycleTipsComponent } from './menstrual-cycle-tips/menstrual-cycle-tips.component';
import { PremenstrualCyndromeComponent } from './premenstrual-cyndrome/premenstrual-cyndrome.component';
import { VaginalDischargeComponent } from './vaginal-discharge/vaginal-discharge.component';
import { MenstrualCycleCalculatorComponent } from './menstrual-cycle-calculator/menstrual-cycle-calculator.component';
import { AlwaysProductsComponent } from './always-products/always-products.component';
import { AlwaysSanitoryPadsComponent } from './always-sanitory-pads/always-sanitory-pads.component';
import { AlwaysDiamondFlexFoamLargeNightComponent } from './always-diamond-flex-foam-large-night/always-diamond-flex-foam-large-night.component';
import { AlwaysDreamsNapkinNightComponent } from './always-dreams-napkin-night/always-dreams-napkin-night.component';
import { AlwaysDreamSoftCottonPadNightComponent } from './always-dream-soft-cotton-pad-night/always-dream-soft-cotton-pad-night.component';
import { AlwaysCottonSoftMaxiThickNightComponent } from './always-cotton-soft-maxi-thick-night/always-cotton-soft-maxi-thick-night.component';
import { AlwaysMaxiThickNightComponent } from './always-maxi-thick-night/always-maxi-thick-night.component';
import { AlwaysAllInOneUltraSlimComponent } from './always-all-in-one-ultra-slim/always-all-in-one-ultra-slim.component';
import { AlwaysThickTexturedAdvancedMaxiComponent } from './always-thick-textured-advanced-maxi/always-thick-textured-advanced-maxi.component';
import { AlwaysSkinLoveLavenderRefreshingComponent } from './always-skin-love-lavender-refreshing/always-skin-love-lavender-refreshing.component';
import { AlwaysSoftAndBreathableMaxiThickComponent } from './always-soft-and-breathable-maxi-thick/always-soft-and-breathable-maxi-thick.component';
import { AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent } from './always-daily-protection-multiform-fresh-scented-panty-liners/always-daily-protection-multiform-fresh-scented-panty-liners.component';
import { AlwaysProtectionAndComfortComponent } from './always-protection-and-comfort/always-protection-and-comfort.component';
import { AlwaysDailyProtectionExtraProtectionComponent } from './always-daily-protection-extra-protection/always-daily-protection-extra-protection.component';
import { DailyPadsComponent } from './daily-pads/daily-pads.component';
import { TamponsComponent } from './tampons/tampons.component';
import { AlwaysTamponsCardboardComponent } from './always-tampons-cardboard/always-tampons-cardboard.component';
import { AlwaysTampaxPearlPocketComponent } from './always-tampax-pearl-pocket/always-tampax-pearl-pocket.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { FirstPeriodComponent } from './first-period/first-period.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CommentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OurEpicBattleComponent,
    WhoWeAreComponent,
    WhatWePromisComponent,
    AlwaysPadContentsComponent,
    OnlyheadermenuComponent,
    AboutAlwaysComponent,
    TipsForGirlsAndParentsComponent,
    MyPeriodsComponent,
    PubertyComponent,
    TipsForParentsComponent,
    TipsForWomenComponent,
    MenstrualCycleTipsComponent,
    PremenstrualCyndromeComponent,
    VaginalDischargeComponent,
    MenstrualCycleCalculatorComponent,
    AlwaysProductsComponent,
    AlwaysSanitoryPadsComponent,
    AlwaysDiamondFlexFoamLargeNightComponent,
    AlwaysDreamsNapkinNightComponent,
    AlwaysDreamSoftCottonPadNightComponent,
    AlwaysCottonSoftMaxiThickNightComponent,
    AlwaysMaxiThickNightComponent,
    AlwaysAllInOneUltraSlimComponent,
    AlwaysThickTexturedAdvancedMaxiComponent,
    AlwaysSkinLoveLavenderRefreshingComponent,
    AlwaysSoftAndBreathableMaxiThickComponent,
    AlwaysDailyProtectionMultiformFreshScentedPantyLinersComponent,
    AlwaysProtectionAndComfortComponent,
    AlwaysDailyProtectionExtraProtectionComponent,
    DailyPadsComponent,
    TamponsComponent,
    AlwaysTamponsCardboardComponent,
    AlwaysTampaxPearlPocketComponent,
    HomeNewComponent,
    FirstPeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightgalleryModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
