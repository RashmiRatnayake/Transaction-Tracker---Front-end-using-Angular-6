import { Component, OnInit } from '@angular/core';
//import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputEmail:String;
  inputPassword:String;

  constructor(
    private authService:AuthService
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
    });

  }

}
