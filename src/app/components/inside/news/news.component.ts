import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../service/news/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any;
  mynews:any;

  
  constructor(

    private newsService:NewsService

  ) { }



  ngOnInit() {
    
    this.newsService
        .getnews()
        .subscribe(res=>{
          console.log(res) 
          this.mynews = res.news
        })

    



  }

}
