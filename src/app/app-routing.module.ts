import { Comment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OurEpicBattleComponent } from './our-epic-battle/our-epic-battle.component';
import { AlwaysPadContentsComponent } from './always-pad-contents/always-pad-contents.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWePromisComponent } from './what-we-promis/what-we-promis.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { MyPeriodsComponent } from './my-periods/my-periods.component';
import { PubertyComponent } from './puberty/puberty.component';
import { TipsForParentsComponent } from './tips-for-parents/tips-for-parents.component';
import { FirstPeriodComponent } from './first-period/first-period.component';

const routes: Routes = [
  {path : "comment", component:CommentComponent},
  {path : "", component:HomeComponent},
  // {path : "", component:HomeNewComponent},
  {path : "dashboard", component:DashboardComponent},
  {path : "our-epic-battle", component:OurEpicBattleComponent},
  {path : "always-pad-contents", component:AlwaysPadContentsComponent},
  {path : "who-we-are", component:WhoWeAreComponent},
  {path : "what-we-promis", component:WhatWePromisComponent},
  {path : "my-periods", component:MyPeriodsComponent},
  {path : "puberty", component:PubertyComponent},
  {path : "tips-for-parents", component:TipsForParentsComponent},
  {path : "first-period", component:FirstPeriodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
