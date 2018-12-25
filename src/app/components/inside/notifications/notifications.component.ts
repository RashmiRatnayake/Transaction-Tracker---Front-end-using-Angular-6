import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../../service/notification/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  myNotificationsToday:any;
  notificationToday:any;



  
  constructor(

    private notificationService:NotificationService

  ) { }



  ngOnInit() {
    
    this.notificationService
        .getNotificationsToday()
        .subscribe(res=>{
          console.log(res) 
          this.myNotificationsToday = res.notificationToday
        })


}
}
