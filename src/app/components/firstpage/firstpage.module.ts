import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AuthService} from '../../service/auth.service';

import {FirstpageComponent} from './firstpage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';

const firstPageRoutes:Routes = [
  {path: 'features',component: FeaturesComponent},
  {path:'about',component:AboutComponent},
  {path: 'login1',component: Login1Component},
  {path: 'register1',component:Register1Component}

];







@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(firstPageRoutes)

  ],
  exports:[RouterModule],
  declarations: [FirstpageComponent,
    NavigationComponent,
  Login1Component,
  Register1Component,
  FeaturesComponent,
  AboutComponent],
  providers: [AuthService]

})
export class FirstpageModule { }
