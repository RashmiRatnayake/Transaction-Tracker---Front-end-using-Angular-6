import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../service/user/user.service';


@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  user:any;
  profile:any
  constructor(

    private userService:UserService

  ) { }



  ngOnInit() {
    
    this.userService
        .getfullProfile()
        .subscribe(res=>{
          console.log(res) 
          this.profile = res.user
        })

    



  }

}
