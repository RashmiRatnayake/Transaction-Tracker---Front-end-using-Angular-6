import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../../service/post/post.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  post:any;
  mypost:any;

  
  constructor(

    private postService:PostService

  ) { }



  ngOnInit() {
    
    this.postService
        .getposts()
        .subscribe(res=>{
          console.log(res) 
          this.mypost = res.post
        })

    



  }

}
