import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { InsideComponent } from './components/inside/inside.component';

import { NavigationComponent } from './components/firstpage/navigation/navigation.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';


import { Login1Component } from './components/firstpage/login1/login1.component';
import { Register1Component } from './components/firstpage/register1/register1.component';
import { FeaturesComponent } from './components/firstpage/features/features.component';
import { AboutComponent } from './components/firstpage/about/about.component';


import { NavigationInsideComponent } from './components/inside/navigation-inside/navigation-inside.component';
import { ProfileComponent } from './components/inside/profile/profile.component';
import { OtherProfileComponent } from './components/inside/other-profile/other-profile.component';
import { NewsComponent } from './components/inside/news/news.component';
import { MessagesComponent } from './components/inside/messages/messages.component';
import { NotificationsComponent } from './components/inside/notifications/notifications.component';

import { SidenavigationComponent } from './components/inside/profile/sidenavigation/sidenavigation.component';
import { MypostsComponent } from './components/inside/profile/myposts/myposts.component';
import { MytransactionsComponent } from './components/inside/profile/mytransactions/mytransactions.component';
import { MyinfoComponent } from './components/inside/profile/myinfo/myinfo.component';
import { MycircleComponent } from './components/inside/profile/mycircle/mycircle.component';

import { SidenavigationotherComponent } from './components/inside/other-profile/sidenavigationother/sidenavigationother.component';
import { PostsotherComponent } from './components/inside/other-profile/postsother/postsother.component';
import { InfootherComponent } from './components/inside/other-profile/infoother/infoother.component';





const applicationRoutes:Routes = [
  {path: '',redirectTo:'firstpage',pathMatch:'full'},
  {path: 'firstpage',component :FirstpageComponent, children: [
    {path: 'login1',  component: Login1Component},
    {path: 'register1',component:Register1Component},
    {path: 'features',component:FeaturesComponent},
    {path: 'about',component:AboutComponent}
  ]},
  {path: 'inside', component:InsideComponent, children: [
    {path: '',redirectTo:'profile',pathMatch:'full'},
    {path: 'profile',  component: ProfileComponent, children:[
      {path: '',redirectTo:'myposts',pathMatch:'full'},
      {path:'myposts', component: MypostsComponent},
      {path:'mytransactions',component:MytransactionsComponent},
      {path:'myinfo', component: MyinfoComponent},
      {path:'mycircle', component: MycircleComponent}
    ]},
    {path: 'news',component:NewsComponent},
    {path: 'notifications',component:NotificationsComponent},
    {path: 'messages',component:MessagesComponent},
    {path: 'other_profile',component:OtherProfileComponent}

  ]}



 //{ path: "", redirectTo: "/firstpage", pathMatch: "full" },
 //{ path: '**', component: PageNotFoundComponent }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(applicationRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
