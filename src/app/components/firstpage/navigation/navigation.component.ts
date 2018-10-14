import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FirstpageModule} from '../firstpage.module'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(  private router:Router ) { }

  ngOnInit() {
  }

}
