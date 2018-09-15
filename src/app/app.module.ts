import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
//import {FlashMessagesModule} from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DateComponent } from './date/date.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
//import { NgFlashMessagesModule } from 'ng-flash-messages';
import {AuthService} from './service/auth.service';

const applicationRoutes:Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  //{path : 'transactions', component:TransactionsComponent},
  //{path : 'profilecontent', component:ProfileContentComponent},
  //{path : 'mypost', component:MypostComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DateComponent,
    ButtonsComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(applicationRoutes),
    //NgFlashMessagesModule.forRoot()
  //  FlashMessagesModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
