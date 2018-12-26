import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../service/auth.service';
//import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import { Observable }  from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {

  CompanyName:String;
  form_email:String;
  password:String;
  confirm_password:String;
  tp:String;
  form_about_yourself:String;
  opt:String;

  constructor(private authService:AuthService,
              private router:Router
  
              ){}


  ngOnInit() {
  }

  registerData(){
    const user={
      CompanyName:this.CompanyName,
      form_email:this.form_email,
      password:this.password,
      confirm_password:this.confirm_password,
      tp:this.tp,
      form_about_yourself:this.form_about_yourself,
      opt:this.opt
    };
  
    this.authService.registerUser(user).subscribe(res=>{
  console.log(res)
    if (res.state){
    //console.log("done");
    this.router.navigate(['firstpage/login1']);
   }
   
    console.log("you're registered");

    });
  }
}
