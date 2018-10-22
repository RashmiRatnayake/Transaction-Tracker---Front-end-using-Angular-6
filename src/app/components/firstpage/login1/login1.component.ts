import { Component, OnInit } from '@angular/core';
//import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService} from '../service/auth.service';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import { Observable }  from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

  inputEmail:String;
  inputPassword:String;

  constructor(
    private authService:AuthService,
    private router:Router
    //private ngFlashMessageService: NgFlashMessageService
  ) { }

  ngOnInit() {
  }


  loginUser(){
    const user={
      inputEmail:this.inputEmail,
      inputPassword:this.inputPassword
    }

    this.authService.loginUser(user).subscribe(res=>{
      console.log(res);
      if(res.logged){
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inside']);
        console.log(localStorage.getItem('token'));

      }

      //this.router.navigate(["/inside"], { "queryParams": res });
    //  this.router.navigate(['/inside']);
    });

  }

}
