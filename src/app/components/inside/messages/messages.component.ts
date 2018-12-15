import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../service/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message:any;
  mymessage:any;

  
  constructor(

    private messageService:MessageService

  ) { }



  ngOnInit() {
    
    this.messageService
        .getmessages()
        .subscribe(res=>{
          console.log(res) 
          this.mymessage = res.message
        })

    



  }

}

