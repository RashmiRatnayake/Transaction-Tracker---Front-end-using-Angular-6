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

  isNotificationToday:boolean;
  isNotificationIn3Days:boolean;


  
  constructor(

    private notificationService:NotificationService

  ) { }



  ngOnInit() {
    
    this.notificationService
        .getNotificationsToday()
        .subscribe(res=>{
         // console.log(res) 
          //if (res!=undefined){
          //if (res.notificationToday.length>0){
            //this.isNotificationToday=true
            this.myNotificationsToday = res.notificationToday
            //console.log(this.isNotificationToday)
          //}}
          //else {this.isNotificationToday=false;
            //console.log(this.isNotificationToday)}
          
        })

    this.notificationService
        .getNotificationsIn3Days()
        .subscribe(res=>{
          //console.log(res.notificationIn3Days.length>0) 
          //if (res!='undefined'){
           // if (res.notificationIn3Days.length>0){
            //this.isNotificationIn3Days=true
            this.myNotificationsIn3Days = res.notificationIn3Days
            //console.log(this.isNotificationIn3Days)
            })
          //}
          //else {this.isNotificationIn3Days=false;}
        //})

          }

}
