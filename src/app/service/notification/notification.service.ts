import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  myNotificationsToday:any;
  myNotificationsIn3Days:any;
  myNotificationsLate:any;
  token:any;
  constructor(
    private http:HttpClient
  ) { }



  getNotificationsToday(): Observable<any> {
    this.fetchToken();
     const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
      })
    };
    
    return this.http.get("http://localhost:5550/notifications/my-notifications-today",httpOptions);

  }

  getNotificationsIn3Days(): Observable<any> {
    this.fetchToken();
     const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
      })
    };
    
    return this.http.get("http://localhost:5550/notifications/my-notifications-in3days",httpOptions);

  }

  getNotificationsLate(): Observable<any> {
    this.fetchToken();
     const httpOptions={
       headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
      })
    };
    
    return this.http.get("http://localhost:5550/notifications/my-notifications-late",httpOptions);

  }


  fetchToken(){
    const token = localStorage.getItem("token");
    this.token = token;

  }

}