import { Component, OnInit } from '@angular/core';
//import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService} from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  CompanyName:String;
  form_email:String;
  password:String;
  confirm_password:String;
  tp:String;
  form_about_yourself:String;
  opt:String;

  constructor(private authService:AuthService
  //private ngFlashMessageService: NgFlashMessageService
){

  }


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
  //  this.flashMessage.show("you are registered!!",{cssClass:'alert-success',timeout:1000});
//this.ngFlashMessageService.showFlashMessage({
// Array of messages each will be displayed in new line
      //messages: ["You're registered"],
      //type: 'success'


    //});

 console.log("you're registered");
});
}
}
