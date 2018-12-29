import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../../service/post/post.service';
import {UserService} from '../../../../service/user/user.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  post:any;
  mypost:any;
  title:String;
  content:String;

  myprofile:any;

  
  constructor(

    private postService:PostService,
    private userService:UserService

  ) { }



  ngOnInit() {
    
    this.postService
        .getposts()
        .subscribe(res=>{
          
          this.mypost = res.post
        })

    this.userService
        .getfullProfile()
        .subscribe(res=>{
          
          this.myprofile=res.user
 
        })

  }

  deletePost(post){
    
    this.postService.deletePost(post).subscribe(res=>{
     
      if (res.state){
        console.log("done deletion of post");
         
      }
    
      
    });
    
    
    
  }

  newPostData(){
    const newpost={
      title:this.title,
      postContent:this.content,
      postedBy:this.myprofile.userId
      
    };
   
    this.postService.addPost(newpost).subscribe(res=>{
      
      if (res.state){
      console.log("done adding post");
      
      }

    });


  }

}
