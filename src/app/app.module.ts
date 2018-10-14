import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { DateComponent } from './date/date.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { InsideComponent } from './components/inside/inside.component';
import { ViewotherComponent } from './components/viewother/viewother.component';
import { NavigationComponent } from './components/firstpage/navigation/navigation.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';

import { Login1Component } from './components/firstpage/login1/login1.component';
import { Register1Component } from './components/firstpage/register1/register1.component';
import { AboutComponent } from './components/firstpage/about/about.component';
import { FeaturesComponent } from './components/firstpage/features/features.component';

import {AuthService} from './service/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DateComponent,
    ButtonsComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    FirstpageComponent,
    InsideComponent,
    ViewotherComponent,
    NavigationComponent,
    PageNotFoundComponent,
    Login1Component,
    Register1Component,
    AboutComponent,
    FeaturesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
