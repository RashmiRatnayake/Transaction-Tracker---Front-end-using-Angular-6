import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { NewsComponent } from './news/news.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';
import { SidenavigationComponent } from './profile/sidenavigation/sidenavigation.component';
import { MypostsComponent } from './profile/myposts/myposts.component';
import { MytransactionsComponent } from './profile/mytransactions/mytransactions.component';
import { SidenavigationotherComponent } from './other-profile/sidenavigationother/sidenavigationother.component';
import { PostsotherComponent } from './other-profile/postsother/postsother.component';

import { InfootherComponent } from './other-profile/infoother/infoother.component';
import { MyinfoComponent } from './profile/myinfo/myinfo.component';
import { MycircleComponent } from './profile/mycircle/mycircle.component';



const insideRoutes:Routes = [

  {path: 'profile',component: ProfileComponent},
  {path:'notifications',component:NotificationsComponent},
  {path: 'news',component: NewsComponent},
  {path: 'messages',component: MessagesComponent},
  {path: 'other_profile',component:OtherProfileComponent}


];



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(insideRoutes)
  ],

  exports:[RouterModule],

  declarations: [
    NewsComponent,
    ProfileComponent,
    NotificationsComponent,
    MessagesComponent,
    OtherProfileComponent,
    SidenavigationComponent,
    MypostsComponent,
    MytransactionsComponent,
    SidenavigationotherComponent,
    PostsotherComponent,
    InfootherComponent,
    MyinfoComponent,
    MycircleComponent]
})
export class InsideModule { }
