import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { CompareValidatorModule } from 'angular-compare-validator';
import { FormControl } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { DateComponent } from './date/date.component';


import { FooterComponent } from './footer/footer.component';

import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { InsideComponent } from './components/inside/inside.component';

import { NavigationComponent } from './components/firstpage/navigation/navigation.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';

import { Login1Component } from './components/firstpage/login1/login1.component';
import { Register1Component } from './components/firstpage/register1/register1.component';
import { AboutComponent } from './components/firstpage/about/about.component';
import { FeaturesComponent } from './components/firstpage/features/features.component';

import {AuthService} from './service/auth.service';
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



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DateComponent,

    FooterComponent,

    FirstpageComponent,
    InsideComponent,

    NavigationComponent,
    PageNotFoundComponent,
    Login1Component,
    Register1Component,
    AboutComponent,
    FeaturesComponent,
    NavigationInsideComponent,
    ProfileComponent,
    OtherProfileComponent,
    NewsComponent,
    MessagesComponent,
    NotificationsComponent,

    SidenavigationComponent,
    MypostsComponent,
    MytransactionsComponent,
    MyinfoComponent,
    MycircleComponent,

    SidenavigationotherComponent,
    InfootherComponent,
    PostsotherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CompareValidatorModule,
    ReactiveFormsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
