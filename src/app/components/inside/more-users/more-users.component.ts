import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserListService} from '../../../service/userlist/userlist.service';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'app-more-users',
  templateUrl: './more-users.component.html',
  styleUrls: ['./more-users.component.css']
})
export class MoreUsersComponent implements OnInit {

  userlist:any;
  myprofile:any;

  constructor(private router:Router,
    private userListService:UserListService,
    private userService:UserService
  ) { }

  ngOnInit() {

    this.userService
    .getfullProfile()
    .subscribe(res=>{
      console.log(res) 
      this.myprofile = res.user
    })


    this.userListService
    .getuserlist()
    .subscribe(res=>{
      console.log(res) 
      this.userlist = res.userlist
    })

  }
  subscribeUser(subscribeuser){
    
    const subscribeuserData={
      subscribeto:subscribeuser.userId,
      subscriber:this.myprofile.userId
    } 


    this.userListService.subscribeUser(subscribeuserData).subscribe(res=>{
      
      if (res.state){
        console.log("done subscription");
        
        }

      });

      }

}
