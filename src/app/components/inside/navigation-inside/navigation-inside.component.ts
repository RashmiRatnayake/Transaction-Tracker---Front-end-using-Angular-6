import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
//import {InsideModule} from '../inside.module'
import { AuthService} from '../../../service/auth.service';
import { Http, Headers, RequestOptions } from "@angular/http";

import { Observable }  from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-inside',
  templateUrl: './navigation-inside.component.html',
  styleUrls: ['./navigation-inside.component.css']
})
export class NavigationInsideComponent implements OnInit {

  constructor(  private authService:AuthService,
                private router:Router
              ) { }

  ngOnInit() {
  }

  logout(){

    this.authService.logout();
    this.router.navigate(['/firstpage']);
    return false;


    }


}
