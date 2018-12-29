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

  editInformation(information){
    
     //console.log(information);
    this.userService.editInformation(information).subscribe(res=>{
 
      if (res.state){
        console.log("done updation");
    
      }

 
    });

  }

}
