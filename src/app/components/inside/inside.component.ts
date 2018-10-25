import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {InsideModule} from './inside.module'

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

}
