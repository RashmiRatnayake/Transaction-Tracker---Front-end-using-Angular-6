import { Component, OnInit } from '@angular/core';
import {CircleService} from '../../../../service/circle/circle.service';
import {UserService} from '../../../../service/user/user.service';

@Component({
  selector: 'app-mycircle',
  templateUrl: './mycircle.component.html',
  styleUrls: ['./mycircle.component.css']
})
export class MycircleComponent implements OnInit {

  circle:any;
  mycircle:any;
  myprofile:any;

  
  constructor(

    private circleService:CircleService,
    private userService:UserService

  ) { }



  ngOnInit() {
    
    this.circleService
        .getcircle()
        .subscribe(res=>{
          console.log(res) 
          this.mycircle = res.circle
          console.log(this.mycircle)
        })

    this.userService
        .getfullProfile()
        .subscribe(res=>{
          console.log(res) 
          this.myprofile = res.user
        })

  }

  removeSubscription(friend){

        this.circleService.removeSubscription(friend).subscribe(res=>{
      
          if (res.state){
          console.log("done removal of subscription");
         
          }
    
      
        });
    
  }

}
