import { Component, OnInit } from '@angular/core';
import {CircleService} from '../../../../service/circle/circle.service';

@Component({
  selector: 'app-mycircle',
  templateUrl: './mycircle.component.html',
  styleUrls: ['./mycircle.component.css']
})
export class MycircleComponent implements OnInit {

  circle:any;
  mycircle:any;

  
  constructor(

    private circleService:CircleService

  ) { }



  ngOnInit() {
    
    this.circleService
        .getcircle()
        .subscribe(res=>{
          console.log(res) 
          this.mycircle = res.circle
        })

    



  }

}
