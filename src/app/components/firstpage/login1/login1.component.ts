import { Component, OnInit } from '@angular/core';
//import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {

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
