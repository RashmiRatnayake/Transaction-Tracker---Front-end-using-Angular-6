import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';

import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { InsideComponent } from './components/inside/inside.component';
import { ViewotherComponent } from './components/viewother/viewother.component';
import { NavigationComponent } from './components/firstpage/navigation/navigation.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';




import { Login1Component } from './components/firstpage/login1/login1.component';
import { Register1Component } from './components/firstpage/register1/register1.component';
import { FeaturesComponent } from './components/firstpage/features/features.component';
import { AboutComponent } from './components/firstpage/about/about.component';

const applicationRoutes:Routes = [
  {path: '',redirectTo:'firstpage',pathMatch:'full'},
  {path: 'firstpage',component :FirstpageComponent, children: [
    {path: 'login1',  component: Login1Component},
    {path: 'register1',component:Register1Component},
    {path: 'features',component:FeaturesComponent},
    {path: 'about',component:AboutComponent}
  ]},
  {path: 'inside', component:InsideComponent},
  {path: 'viewother', component:ViewotherComponent}



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
