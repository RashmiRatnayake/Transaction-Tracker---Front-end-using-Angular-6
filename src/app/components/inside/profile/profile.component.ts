import { Component, OnInit } from '@angular/core';
//import { Router} from '@angular/router';

import { AuthService } from '../../../service/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
//    private router:Router
      private authService:AuthService
) { }
user:any
  ngOnInit() {
    this.authService.getProfile().subscribe(res=>{
     this.user=res;
     console.log(res);
    })

  }

}
