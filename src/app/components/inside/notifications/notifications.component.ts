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

  myNotificationsIn3Days:any;
  notificationIn3Days:any;

  myNotificationsLate:any;
  notificationLate:any;

 
  constructor(

    private notificationService:NotificationService

  ) { }



  ngOnInit() {
    
    this.notificationService
        .getNotificationsToday()
        .subscribe(res=>{
         
          this.myNotificationsToday = res.notificationToday
            
        })

    this.notificationService
        .getNotificationsIn3Days()
        .subscribe(res=>{
         
          this.myNotificationsIn3Days = res.notificationIn3Days
           
        })
          

    this.notificationService
        .getNotificationsLate()
        .subscribe(res=>{
        
          this.myNotificationsLate = res.notificationLate
           //console.log(this.myNotificationsLate)
        })
        
  }

}
