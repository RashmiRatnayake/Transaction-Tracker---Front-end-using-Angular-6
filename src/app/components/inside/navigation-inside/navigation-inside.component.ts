import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../../../service/auth.service';
import { Http, Headers, RequestOptions } from "@angular/http";
import {UserListService} from '../../../service/userlist/userlist.service';
import { FormControl } from '@angular/forms';


import { Observable }  from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-navigation-inside',
  templateUrl: './navigation-inside.component.html',
  styleUrls: ['./navigation-inside.component.css']
})
export class NavigationInsideComponent implements OnInit {


  userlist:any;

  constructor(  private authService:AuthService,
                private router:Router,
                private userListService:UserListService,
              ) { }

  ngOnInit() {
    
    this.userListService
    .getuserlist()
    .subscribe(res=>{
      console.log(res) 
      this.userlist = res.userlist
    })

  }
    

  logout(){

    this.authService.logout();
    this.router.navigate(['/firstpage']);
    return false;

    }

}
